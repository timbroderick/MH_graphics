var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({polling:200});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
$(function(){Highcharts.setOptions({lang:{thousandsSep:','}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',height:350,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'column'},title:{text:null},xAxis:{categories:[DATA[0].status,DATA[1].status,DATA[2].status,DATA[3].status],title:{text:null}},yAxis:{tickInterval:5,minorTickInterval:'auto',overflow:'justify',min:0,max:45,labels:{format:'{value:,.0f}'+'%'},title:{text:'TYPE OF INSURANCE COVERAGE'}},legend:{reversed:false},credits:{enabled:false},plotOptions:{},series:[{name:'Medicaid',data:$.map([DATA[0].Medicaid,DATA[1].Medicaid,DATA[2].Medicaid,DATA[3].Medicaid],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:'Uninsured',data:$.map([DATA[0].Uninsured,DATA[1].Uninsured,DATA[2].Uninsured,DATA[3].Uninsured],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA[this.point.x].status+'</strong></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; Medicaid: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>'+DATA[this.point.x].Medicaid+'%</strong></td></tr>'+'<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar SECOND"></div>&nbsp; Uninsured: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>'+DATA[this.point.x].Uninsured+'%</strong></td></tr>'+'</table>';}}});});