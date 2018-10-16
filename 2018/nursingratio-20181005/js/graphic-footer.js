var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',height:375,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'column'},title:{text:null},xAxis:{categories:["Community -<br>high public payer","Community","Teaching","Academic","Specialty"],labels:{staggerLines:2},title:{text:'HOSPITAL TYPE'}},yAxis:{tickInterval:5,minorTickInterval:'auto',overflow:'justify',min:0,title:{text:'% INCREASE IN STAFFING'}},legend:{reversed:false},credits:{enabled:false},plotOptions:{series:{dataLabels:{enabled:false,formatter:function(){return DATA[this.point.x].share;},align:'right'}}},series:[{name:"Assumes avg. of 10%<br>statewide increase",data:$.map([DATA[0].anA,DATA[1].anA,DATA[2].anA,DATA[3].anA,DATA[4].anA],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:"Assumes avg. of 20%<br>statewide increase",data:$.map([DATA[0].anB,DATA[1].anB,DATA[2].anB,DATA[3].anB,DATA[4].anB],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA[this.point.x].type+'</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>10% statewide inc.: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">'+DATA[this.point.x].anA+'%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#67B4A5">20% statewide inc.: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">'+DATA[this.point.x].anB+'%</td></tr></table>';}}});