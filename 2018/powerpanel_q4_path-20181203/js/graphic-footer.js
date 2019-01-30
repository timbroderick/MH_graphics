var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic1',backgroundColor:'#fafafa',height:300,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'pie'},title:{text:null},xAxis:{title:{text:null}},yAxis:{title:{text:null}},credits:{enabled:false},plotOptions:{series:{dataLabels:{enabled:false},showInLegend:true}},series:[{name:'IMPACT',data:[{name:'Right direction',y:parseFloat(DATA[0].percent)},{name:'Wrong direction',y:parseFloat(DATA[1].percent)}]}],tooltip:{useHTML:true,formatter:function(){return '<p>'+this.point.name+': <strong>'+this.point.y+'%</strong></p>';}}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic2',backgroundColor:'#fafafa',height:500,spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'bar'},title:{text:null},xAxis:{categories:["Prescription drug<br>cost controls","More deregulation<br>of providers","Strengthening<br>ACA markets","More alternatives<br>to ACA plans","Approval of more<br>mergers, consolidations","Limits on surprise,<br>out-of-network bills","Changes in the 340B<br>prescription drug program","Stronger funding, action on<br>behavioral health, substance abuse","Action on<br>rural healthcare","Other"],labels:{staggerLines:2},title:{text:null}},yAxis:{tickInterval:10,minorTickInterval:'auto',overflow:'justify',min:0,title:{text:'PERCENT'}},legend:{reversed:false},credits:{enabled:false},series:[{name:'Most like<br>to see',data:$.map([DATA2[0].most,DATA2[1].most,DATA2[2].most,DATA2[3].most,DATA2[4].most,DATA2[5].most,DATA2[6].most,DATA2[7].most,DATA2[8].most,DATA2[9].most],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})},{name:'Least like<br>to see',data:$.map([DATA2[0].least,DATA2[1].least,DATA2[2].least,DATA2[3].least,DATA2[4].least,DATA2[5].least,DATA2[6].least,DATA2[7].least,DATA2[8].least,DATA2[9].least],function(datavalue){return isNaN(datavalue)?{y:null}:parseFloat(datavalue);})}],tooltip:{crosshairs:true,shared:true,valueSuffix:'%'}});