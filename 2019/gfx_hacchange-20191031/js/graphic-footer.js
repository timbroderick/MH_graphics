var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({polling:200});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
function getCol(matrix,col){var column=[];for(var i=0;i<matrix.length;i++)column.push(matrix[i][col]);return column;}var hacs=getCol(DATA,'hacs');var change=getCol(DATA,'change');var costs=getCol(DATA,'costs');var deaths=getCol(DATA,'deaths');$(function(){Highcharts.setOptions({lang:{thousandsSep:','}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',height:450,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'bar'},title:{text:null},xAxis:{categories:hacs,labels:{staggerLines:2},title:{text:null}},yAxis:{tickInterval:500,minorTickInterval:'auto',overflow:'justify',min:-3500,max:2000,labels:{format:'$'+'{value:,.0f}'},title:{text:'($ IN MILLIONS)'},plotLines:[{color:'black',value:0,width:1,zIndex:100,dashStyle:'solid'}]},legend:{enabled:false},credits:{enabled:false},plotOptions:{series:{dataLabels:{enabled:false,format:'{y:,.0f}',align:'right'}}},series:[{name:'Estimated savings',data:[{y:1720,color:'#6d6e71'},{y:170,color:'#6d6e71'},{y:0,color:'#7F919B'},{y:-10,color:'#ae1b1f'},{y:-290,color:'#ae1b1f'},{y:-390,color:'#ae1b1f'},{y:-420,color:'#ae1b1f'},{y:-920,color:'#ae1b1f'},{y:-1100,color:'#ae1b1f'},{y:-3130,color:'#ae1b1f'},{y:-3360,color:'#ae1b1f'}]}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA[this.point.x].hacs+'</strong><br><small>Estimated change in ...</small></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">... costs: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].costs_txt+'</strong></td></tr>'+'<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">... deaths: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].deaths+'</strong></td></tr>'+'<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">... number: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].change+'</strong></td></tr>'+'</table>';}}});});