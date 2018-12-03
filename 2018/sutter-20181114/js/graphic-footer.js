var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
Highcharts.setOptions({lang:{thousandsSep:','}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',height:350,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'area'},title:{text:null},xAxis:{categories:["2012","2013","2014","2015","2016","2017"],labels:{staggerLines:2},title:{text:'YEAR'}},yAxis:{tickInterval:200000000,minorTickInterval:'auto',overflow:'justify',min:0,max:1000000000,title:{text:'$ IN MILLIONS'}},credits:{enabled:false},plotOptions:{series:{dataLabels:{enabled:false,format:'${y}',formatter:function(){return DATA[this.point.x].share;},align:'right'},stacking:'normal'}},series:[{name:'Medicaid shortfall',data:$.map([DATA[0].medicaid,DATA[1].medicaid,DATA[2].medicaid,DATA[3].medicaid,DATA[4].medicaid,DATA[5].medicaid],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:'Spending for<br>broader community',data:$.map([DATA[0].CBS_broader,DATA[1].CBS_broader,DATA[2].CBS_broader,DATA[3].CBS_broader,DATA[4].CBS_broader,DATA[5].CBS_broader],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:'Charity care',data:$.map([DATA[0].charity,DATA[1].charity,DATA[2].charity,DATA[3].charity,DATA[4].charity,DATA[5].charity],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:'Other',data:$.map([DATA[0].other,DATA[1].other,DATA[2].other,DATA[3].other,DATA[4].other,DATA[5].other],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})}],tooltip:{crosshairs:true,style:{width:'250px'},useHTML:true,formatter:function(){return '<h5><strong>'+DATA[this.point.x].Year+'</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#0067AC"><strong>Medicaid<br>shortfall: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">$'+DATA[this.point.x].medicaida+' million</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><span style="color:#67B4A5"><strong>Spending for<br>broader community: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">$'+DATA[this.point.x].CBS_broadera+' million</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#EBAB38">Charity care: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">$'+DATA[this.point.x].charitya+' million</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#9D85BE">Other: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">$'+DATA[this.point.x].othera+' million</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong>Total community<br>benefit spending: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">$'+DATA[this.point.x].Total_CBSa+' million</strong></td></tr></table>';}}});