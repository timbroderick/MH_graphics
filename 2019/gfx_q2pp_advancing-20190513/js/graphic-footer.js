var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({polling:200});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
$(function(){Highcharts.setOptions({lang:{thousandsSep:','}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',height:350,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'pie'},title:{text:null},xAxis:{categories:[DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state],title:{text:null}},yAxis:{tickInterval:10,minorTickInterval:'auto',overflow:'justify',title:{text:null}},credits:{enabled:false},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',dataLabels:{enabled:false},showInLegend:true}},series:[{name:'Percentage',data:[{name:DATA[0].state,y:parseFloat(DATA[0].rank)},{name:DATA[1].state,y:parseFloat(DATA[1].rank)},{name:DATA[2].state,y:parseFloat(DATA[2].rank)},{name:DATA[3].state,y:parseFloat(DATA[3].rank)},{name:DATA[4].state,y:parseFloat(DATA[4].rank)}]}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA[this.point.x].state+'</strong></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>'+DATA[this.point.x].rank+'%</strong></td></tr>'+'</table>';}}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic2',backgroundColor:'#fafafa',height:370,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'pie'},title:{text:null},xAxis:{categories:[DATA2[0].state,DATA2[1].state,DATA2[2].state,DATA2[3].state,DATA2[4].state],title:{text:null}},yAxis:{tickInterval:10,minorTickInterval:'auto',overflow:'justify',title:{text:null}},credits:{enabled:false},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',dataLabels:{enabled:false},showInLegend:true}},series:[{name:'Percentage',data:[{name:DATA2[0].state,y:parseFloat(DATA2[0].rank)},{name:DATA2[1].state,y:parseFloat(DATA2[1].rank)},{name:DATA2[2].state,y:parseFloat(DATA2[2].rank)},{name:DATA2[3].state,y:parseFloat(DATA2[3].rank)},{name:DATA2[4].state,y:parseFloat(DATA2[4].rank)}]}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA2[this.point.x].state2+'</strong></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>'+DATA2[this.point.x].rank+'%</strong></td></tr>'+'</table>';}}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic3',backgroundColor:'#fafafa',height:350,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'bar'},title:{text:null},xAxis:{categories:[DATA3[0].state,DATA3[1].state,DATA3[2].state,DATA3[3].state,DATA3[4].state,DATA3[5].state],title:{text:null}},yAxis:{tickInterval:10,minorTickInterval:'auto',overflow:'justify',min:0,max:80,title:{text:null},labels:{format:'{value:,.0f}'+"%"}},legend:{enabled:false},credits:{enabled:false},plotOptions:{},series:[{name:'Percentage',data:[{y:73.1,color:'#0067AC'},{y:53.9,color:'#b9e5fb'},{y:34.6,color:'#b9e5fb'},{y:30.8,color:'#b9e5fb'},{y:19.2,color:'#b9e5fb'},{y:26.9,color:'#b9e5fb'}]}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA3[this.point.x].state+'</strong></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>'+DATA3[this.point.x].rank+'%</strong></td></tr>'+'</table>';}}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic4',backgroundColor:'#fafafa',height:350,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'pie'},title:{text:null},xAxis:{categories:[DATA4[0].state,DATA4[1].state,DATA4[2].state,DATA4[3].state],title:{text:null}},yAxis:{tickInterval:10,minorTickInterval:'auto',overflow:'justify',title:{text:null}},credits:{enabled:false},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',dataLabels:{enabled:false},showInLegend:true}},series:[{name:'Percentage',data:[{name:DATA4[0].state,y:parseFloat(DATA4[0].rank)},{name:DATA4[1].state,y:parseFloat(DATA4[1].rank)},{name:DATA4[2].state,y:parseFloat(DATA4[2].rank)},{name:DATA4[3].state,y:parseFloat(DATA4[3].rank)}]}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA4[this.point.x].state2+'</strong></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>'+DATA4[this.point.x].rank+'%</strong></td></tr>'+'</table>';}}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic5',backgroundColor:'#fafafa',height:310,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'pie'},title:{text:null},xAxis:{categories:[DATA5[0].state,DATA5[1].state],title:{text:null}},yAxis:{tickInterval:10,minorTickInterval:'auto',overflow:'justify',title:{text:null}},credits:{enabled:false},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',dataLabels:{enabled:false},showInLegend:true}},series:[{name:'Percentage',data:[{name:DATA5[0].state,y:parseFloat(DATA5[0].rank)},{name:DATA5[1].state,y:parseFloat(DATA5[1].rank)}]}],tooltip:{crosshairs:true,useHTML:true,formatter:function(){return '<h5><strong>'+DATA5[this.point.x].state+'</strong></h5>'+'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>'+DATA5[this.point.x].rank+'%</strong></td></tr>'+'</table>';}}});});