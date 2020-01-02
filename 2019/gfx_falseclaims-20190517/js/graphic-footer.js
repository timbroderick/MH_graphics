var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({polling:200});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
$(function(){Highcharts.setOptions({lang:{thousandsSep:','}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',height:350,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'column'},title:{text:null},xAxis:{categories:[DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state,DATA[5].state,DATA[6].state,DATA[7].state,DATA[8].state,DATA[9].state],labels:{staggerLines:2},title:{text:null}},yAxis:{tickInterval:50,minorTickInterval:'auto',overflow:'justify',min:0,labels:{format:'$'+'{value:,.0f}'},title:{text:'$ IN MILLIONS'}},legend:{enabled:false},credits:{enabled:false},plotOptions:{},series:[{name:'Amount from<br>settlements or judgements',data:$.map([DATA[0].judge,DATA[1].judge,DATA[2].judge,DATA[3].judge,DATA[4].judge,DATA[5].judge,DATA[6].judge,DATA[7].judge,DATA[8].judge,DATA[9].judge],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>Amount from settlements<br>or judgements</strong><br><small>$ in millions</small></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">'+DATA[this.point.x].state+':</td><td style="padding:2px; margin:2px;"><strong>$'+DATA[this.point.x].judge+'</strong></td></tr>'+'</table>';}}});});