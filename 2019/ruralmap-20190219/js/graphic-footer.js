var pymChild=null;var isMobile=false;var onWindowLoaded=function(){pymChild=new pym.Child({polling:200});pymChild.onMessage('on-screen',function(bucket){ANALYTICS.trackEvent('on-screen',bucket);});pymChild.onMessage('scroll-depth',function(data){ANALYTICS.trackEvent('scroll-depth',data.percent,data.seconds);});};var artboardResizer=function(){if(document.documentElement.className.indexOf('g-resizer-v3-init')>-1)return;document.documentElement.className+=' g-resizer-v3-init';if(!('querySelector' in document))return;function resizer(){var elements=Array.prototype.slice.call(document.querySelectorAll('.g-artboard[data-min-width]')),widthById={};elements.forEach(function(el){var parent=el.parentNode,width=widthById[parent.id]||parent.getBoundingClientRect().width,minwidth=el.getAttribute('data-min-width'),maxwidth=el.getAttribute('data-max-width');widthById[parent.id]=width;if(+minwidth<=width&&(+maxwidth>=width||maxwidth===null))el.style.display='block';else el.style.display='none';});try{if(window.parent&&window.parent.$)window.parent.$('body').trigger('resizedcontent',[window]);if(window.require)require(['foundation/main'],function(){require(['shared/interactive/instances/app-communicator'],function(AppCommunicator){AppCommunicator.triggerResize();});});}catch(e){console.log(e);}pymChild.sendHeight();}document.addEventListener('DOMContentLoaded',resizer);window.addEventListener('resize',_.throttle(resizer,200));};window.onload=onWindowLoaded;
console.log(DATA);Highcharts.setOptions({lang:{thousandsSep:','}});var chartRate=new Highcharts.Chart({chart:{renderTo:'graphic',backgroundColor:'#fafafa',width:w,height:'80%',spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,type:'tilemap',inverted:true},title:{text:null},credits:{enabled:false},xAxis:{visible:false},yAxis:{visible:false},legend:{reversed:false},colorAxis:{dataClasses:[{from:-1,to:1,color:'#FFE5C2',name:'< 11% at risk'},{from:3,to:5,color:'#FFCE7B',name:'11% to 19%'},{from:6,to:8,color:'#DF896F',name:'20% to 29%'},{from:9,color:'#AE1B1F',name:'> 29% at risk'},{from:-10,to:-2,color:"#DDDDDD",name:"No Data"}]},tooltip:{useHTML:true,headerFormat:'<small><b>{point.key}</b></small><br>',pointFormat:'<table style="width:100%;"><tbody>'+'<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;">Total rural hospitals: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>{point.total}</strong></td></tr>'+'<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;">Number at risk: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>{point.risk}</strong></td></tr>'+'<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;">Percentage at risk: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>{point.legend}</strong></td></tr>'+'</table>'},plotOptions:{series:{dataLabels:{enabled:true,format:'{point.hc-a2}',style:{textOutline:false},formatter:function(){var max=this.series.yAxis.max,color=this.y/max<0.05?'black':'white';return '<span style="color: '+color+'">'+this.y+' </span>';}}}},series:[{name:'',data:[{'hc-a2':'AL',name:'Alabama',region:'South',x:6,y:7,value:parseFloat(DATA[0].value),legend:DATA[0].legend,total:DATA[0].total,risk:DATA[0].risk},{'hc-a2':'AK',name:'Alaska',region:'West',x:0,y:0,value:parseFloat(DATA[1].value),legend:DATA[1].legend,total:DATA[1].total,risk:DATA[1].risk},{'hc-a2':'AZ',name:'Arizona',region:'West',x:5,y:3,value:parseFloat(DATA[2].value),legend:DATA[2].legend,total:DATA[2].total,risk:DATA[2].risk},{'hc-a2':'AR',name:'Arkansas',region:'South',x:5,y:6,value:parseFloat(DATA[3].value),legend:DATA[3].legend,total:DATA[3].total,risk:DATA[3].risk},{'hc-a2':'CA',name:'California',region:'West',x:5,y:2,value:parseFloat(DATA[4].value),legend:DATA[4].legend,total:DATA[4].total,risk:DATA[4].risk},{'hc-a2':'CO',name:'Colorado',region:'West',x:4,y:3,value:parseFloat(DATA[5].value),legend:DATA[5].legend,total:DATA[5].total,risk:DATA[5].risk},{'hc-a2':'CT',name:'Connecticut',region:'Northeast',x:3,y:11,value:parseFloat(DATA[6].value),legend:DATA[6].legend,total:DATA[6].total,risk:DATA[6].risk},{'hc-a2':'DE',name:'Delaware',region:'South',x:4,y:9,value:parseFloat(DATA[7].value),legend:DATA[7].legend,total:DATA[7].total,risk:DATA[7].risk},{'hc-a2':'DC',name:'District of Columbia',region:'South',x:4,y:10,value:parseFloat(DATA[8].value),legend:DATA[8].legend,total:DATA[8].total,risk:DATA[8].risk},{'hc-a2':'FL',name:'Florida',region:'South',x:8,y:8,value:parseFloat(DATA[9].value),legend:DATA[9].legend,total:DATA[9].total,risk:DATA[9].risk},{'hc-a2':'GA',name:'Georgia',region:'South',x:7,y:8,value:parseFloat(DATA[10].value),legend:DATA[10].legend,total:DATA[10].total,risk:DATA[10].risk},{'hc-a2':'HI',name:'Hawaii',region:'West',x:8,y:0,value:parseFloat(DATA[11].value),legend:DATA[11].legend,total:DATA[11].total,risk:DATA[11].risk},{'hc-a2':'ID',name:'Idaho',region:'West',x:3,y:2,value:parseFloat(DATA[12].value),legend:DATA[12].legend,total:DATA[12].total,risk:DATA[12].risk},{'hc-a2':'IL',name:'Illinois',region:'Midwest',x:3,y:6,value:parseFloat(DATA[13].value),legend:DATA[13].legend,total:DATA[13].total,risk:DATA[13].risk},{'hc-a2':'IN',name:'Indiana',region:'Midwest',x:3,y:7,value:parseFloat(DATA[14].value),legend:DATA[14].legend,total:DATA[14].total,risk:DATA[14].risk},{'hc-a2':'IA',name:'Iowa',region:'Midwest',x:3,y:5,value:parseFloat(DATA[15].value),legend:DATA[15].legend,total:DATA[15].total,risk:DATA[15].risk},{'hc-a2':'KS',name:'Kansas',region:'Midwest',x:5,y:5,value:parseFloat(DATA[16].value),legend:DATA[16].legend,total:DATA[16].total,risk:DATA[16].risk},{'hc-a2':'KY',name:'Kentucky',region:'South',x:4,y:6,value:parseFloat(DATA[17].value),legend:DATA[17].legend,total:DATA[17].total,risk:DATA[17].risk},{'hc-a2':'LA',name:'Louisiana',region:'South',x:6,y:5,value:parseFloat(DATA[18].value),legend:DATA[18].legend,total:DATA[18].total,risk:DATA[18].risk},{'hc-a2':'ME',name:'Maine',region:'Northeast',x:0,y:11,value:parseFloat(DATA[19].value),legend:DATA[19].legend,total:DATA[19].total,risk:DATA[19].risk},{'hc-a2':'MD',name:'Maryland',region:'South',x:4,y:8,value:parseFloat(DATA[20].value),legend:DATA[20].legend,total:DATA[20].total,risk:DATA[20].risk},{'hc-a2':'MA',name:'Massachusetts',region:'Northeast',x:2,y:10,value:parseFloat(DATA[21].value),legend:DATA[21].legend,total:DATA[21].total,risk:DATA[21].risk},{'hc-a2':'MI',name:'Michigan',region:'Midwest',x:2,y:7,value:parseFloat(DATA[22].value),legend:DATA[22].legend,total:DATA[22].total,risk:DATA[22].risk},{'hc-a2':'MN',name:'Minnesota',region:'Midwest',x:2,y:4,value:parseFloat(DATA[23].value),legend:DATA[23].legend,total:DATA[23].total,risk:DATA[23].risk},{'hc-a2':'MS',name:'Mississippi',region:'South',x:6,y:6,value:parseFloat(DATA[24].value),legend:DATA[24].legend,total:DATA[24].total,risk:DATA[24].risk},{'hc-a2':'MO',name:'Missouri',region:'Midwest',x:4,y:5,value:parseFloat(DATA[25].value),legend:DATA[25].legend,total:DATA[25].total,risk:DATA[25].risk},{'hc-a2':'MT',name:'Montana',region:'West',x:2,y:2,value:parseFloat(DATA[26].value),legend:DATA[26].legend,total:DATA[26].total,risk:DATA[26].risk},{'hc-a2':'NE',name:'Nebraska',region:'Midwest',x:4,y:4,value:parseFloat(DATA[27].value),legend:DATA[27].legend,total:DATA[27].total,risk:DATA[27].risk},{'hc-a2':'NV',name:'Nevada',region:'West',x:4,y:2,value:parseFloat(DATA[28].value),legend:DATA[28].legend,total:DATA[28].total,risk:DATA[28].risk},{'hc-a2':'NH',name:'New Hampshire',region:'Northeast',x:1,y:11,value:parseFloat(DATA[29].value),legend:DATA[29].legend,total:DATA[29].total,risk:DATA[29].risk},{'hc-a2':'NJ',name:'New Jersey',region:'Northeast',x:3,y:10,value:parseFloat(DATA[30].value),legend:DATA[30].legend,total:DATA[30].total,risk:DATA[30].risk},{'hc-a2':'NM',name:'New Mexico',region:'West',x:6,y:3,value:parseFloat(DATA[31].value),legend:DATA[31].legend,total:DATA[31].total,risk:DATA[31].risk},{'hc-a2':'NY',name:'New York',region:'Northeast',x:2,y:9,value:parseFloat(DATA[32].value),legend:DATA[32].legend,total:DATA[32].total,risk:DATA[32].risk},{'hc-a2':'NC',name:'North Carolina',region:'South',x:5,y:9,value:parseFloat(DATA[33].value),legend:DATA[33].legend,total:DATA[33].total,risk:DATA[33].risk},{'hc-a2':'ND',name:'North Dakota',region:'Midwest',x:2,y:3,value:parseFloat(DATA[34].value),legend:DATA[34].legend,total:DATA[34].total,risk:DATA[34].risk},{'hc-a2':'OH',name:'Ohio',region:'Midwest',x:3,y:8,value:parseFloat(DATA[35].value),legend:DATA[35].legend,total:DATA[35].total,risk:DATA[35].risk},{'hc-a2':'OK',name:'Oklahoma',region:'South',x:6,y:4,value:parseFloat(DATA[36].value),legend:DATA[36].legend,total:DATA[36].total,risk:DATA[36].risk},{'hc-a2':'OR',name:'Oregon',region:'West',x:4,y:1,value:parseFloat(DATA[37].value),legend:DATA[37].legend,total:DATA[37].total,risk:DATA[37].risk},{'hc-a2':'PA',name:'Pennsylvania',region:'Northeast',x:3,y:9,value:parseFloat(DATA[38].value),legend:DATA[38].legend,total:DATA[38].total,risk:DATA[38].risk},{'hc-a2':'RI',name:'Rhode Island',region:'Northeast',x:2,y:11,value:parseFloat(DATA[39].value),legend:DATA[39].legend,total:DATA[39].total,risk:DATA[39].risk},{'hc-a2':'SC',name:'South Carolina',region:'South',x:6,y:8,value:parseFloat(DATA[40].value),legend:DATA[40].legend,total:DATA[40].total,risk:DATA[40].risk},{'hc-a2':'SD',name:'South Dakota',region:'Midwest',x:3,y:4,value:parseFloat(DATA[41].value),legend:DATA[41].legend,total:DATA[41].total,risk:DATA[41].risk},{'hc-a2':'TN',name:'Tennessee',region:'South',x:5,y:7,value:parseFloat(DATA[42].value),legend:DATA[42].legend,total:DATA[42].total,risk:DATA[42].risk},{'hc-a2':'TX',name:'Texas',region:'South',x:7,y:4,value:parseFloat(DATA[43].value),legend:DATA[43].legend,total:DATA[43].total,risk:DATA[43].risk},{'hc-a2':'UT',name:'Utah',region:'West',x:5,y:4,value:parseFloat(DATA[44].value),legend:DATA[44].legend,total:DATA[44].total,risk:DATA[44].risk},{'hc-a2':'VT',name:'Vermont',region:'Northeast',x:1,y:10,value:parseFloat(DATA[45].value),legend:DATA[45].legend,total:DATA[45].total,risk:DATA[45].risk},{'hc-a2':'VA',name:'Virginia',region:'South',x:5,y:8,value:parseFloat(DATA[46].value),legend:DATA[46].legend,total:DATA[46].total,risk:DATA[46].risk},{'hc-a2':'WA',name:'Washington',region:'West',x:2,y:1,value:parseFloat(DATA[47].value),legend:DATA[47].legend,total:DATA[47].total,risk:DATA[47].risk},{'hc-a2':'WV',name:'West Virginia',region:'South',x:4,y:7,value:parseFloat(DATA[48].value),legend:DATA[48].legend,total:DATA[48].total,risk:DATA[48].risk},{'hc-a2':'WI',name:'Wisconsin',region:'Midwest',x:2,y:5,value:parseFloat(DATA[49].value),legend:DATA[49].legend,total:DATA[49].total,risk:DATA[49].risk},{'hc-a2':'WY',name:'Wyoming',region:'West',x:3,y:3,value:parseFloat(DATA[50].value),legend:DATA[50].legend,total:DATA[50].total,risk:DATA[50].risk}]}]});