var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({polling:200});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
$(function(){Highcharts.setOptions({lang:{thousandsSep:','}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',height:325,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10},title:{text:null},xAxis:{categories:[DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year,DATA[5].year,DATA[6].year,DATA[7].year],labels:{staggerLines:2},title:{text:null}},yAxis:{tickInterval:2,minorTickInterval:'auto',overflow:'justify',min:-10,max:0.5,labels:{format:'{value:,.0f}'+'%'},title:{text:null},plotLines:[{color:'#aaa',value:0,width:1,zIndex:100,dashStyle:'solid'}]},legend:{enabled:false},credits:{enabled:false},plotOptions:{},series:[{type:'column',name:'Total Medicare margin',color:"#AE1B1F",data:$.map([DATA[0].med,DATA[1].med,DATA[2].med,DATA[3].med,DATA[4].med,DATA[5].med,DATA[6].med,DATA[7].med],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA[this.point.x].year+'</strong></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar FIFTH"></div>&nbsp; Overall<br>Medicare: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong><br>'+DATA[this.point.x].med+'%</strong></td></tr>'+'</table>';}}});});