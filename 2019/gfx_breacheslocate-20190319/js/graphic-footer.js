var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({polling:200});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
$(function(){Highcharts.setOptions({lang:{thousandsSep:','}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',height:350,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'area'},title:{text:null},xAxis:{categories:[DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year,DATA[5].year,DATA[6].year,DATA[7].year,DATA[8].year],labels:{staggerLines:2},title:{text:null}},yAxis:{tickInterval:50,minorTickInterval:'auto',overflow:'justify',min:0,max:400,labels:{format:'{value:,.0f}'},title:{text:null}},legend:{reversed:false},credits:{enabled:false},plotOptions:{series:{dataLabels:{enabled:false,format:'$'+'{y:,.0f}',align:'right'},stacking:'normal'}},series:[{name:'Laptop',data:$.map([DATA[0].laptop,DATA[1].laptop,DATA[2].laptop,DATA[3].laptop,DATA[4].laptop,DATA[5].laptop,DATA[6].laptop,DATA[7].laptop,DATA[8].laptop],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:'Paper/films',data:$.map([DATA[0].paper,DATA[1].paper,DATA[2].paper,DATA[3].paper,DATA[4].paper,DATA[5].paper,DATA[6].paper,DATA[7].paper,DATA[8].paper],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:'Nework server',data:$.map([DATA[0].server,DATA[1].server,DATA[2].server,DATA[3].server,DATA[4].server,DATA[5].server,DATA[6].server,DATA[7].server,DATA[8].server],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:'Email',color:"#AE1B1F",data:$.map([DATA[0].email,DATA[1].email,DATA[2].email,DATA[3].email,DATA[4].email,DATA[5].email,DATA[6].email,DATA[7].email,DATA[8].email],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:'All other**',color:"#9D85BE",data:$.map([DATA[0].other,DATA[1].other,DATA[2].other,DATA[3].other,DATA[4].other,DATA[5].other,DATA[6].other,DATA[7].other,DATA[8].other],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA[this.point.x].year+'</strong></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Laptop: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].laptop+'</strong></td></tr>'+'<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Paper/film: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].paper+'</strong></td></tr>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Network server: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].server+'</strong></td></tr>'+'<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIFTH"></div>&nbsp; Email: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].email+'</strong></td></tr>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FOURTH"></div>&nbsp; All other**: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].other+'</strong></td></tr>'+'</table>';}}});});