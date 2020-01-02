var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({polling:200});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
function getCol(matrix,col){var column=[];for(var i=0;i<matrix.length;i++)column.push(matrix[i][col]);return column;}var hospital=getCol(DATA,'hospital');var all=getCol(DATA,'all');var dsh=getCol(DATA,'dsh');$(function(){Highcharts.setOptions({lang:{thousandsSep:','}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',height:350,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'bar'},title:{text:null},xAxis:{categories:hospital,title:{text:null}},yAxis:{tickInterval:2,minorTickInterval:'auto',overflow:'justify',min:0,max:16,labels:{format:'{value:,.0f}'+'%'},title:{text:'Total bad-debt expense<br>as percentage of net patient revenue'}},legend:{reversed:false},credits:{enabled:false},plotOptions:{series:{dataLabels:{enabled:false,format:'{y:,.0f}',align:'right'}}},series:[{name:'All',data:$.map(all,function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:'Disproportionate-<br>share hospitals',color:'#3d505a',data:$.map(dsh,function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA[this.point.x].hospital+'</strong></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; All: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].all+'%</strong></td></tr>'+'<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; DSH: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].dsh+'%</strong></td></tr>'+'</table>';}}});});