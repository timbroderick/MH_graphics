$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 400,
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        type: 'bar'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state ],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 100,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: null
        }
      },
      legend: {
        reversed: true
      },
      credits: {
          enabled: false
      },
      plotOptions: {
        series: {
          stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
        }
      },
      series: [{
        name: '% unsure',
        color: '#EBAB38',
        data: $.map( [ DATA[0].unsure,DATA[1].unsure,DATA[2].unsure,DATA[3].unsure ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: '% unlikely/<br>very unlikely',
        color: '#67B4A5',
        data: $.map( [ DATA[0].unlikely,DATA[1].unlikely,DATA[2].unlikely,DATA[3].unlikely ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: '% likely/<br>very likely',
         color: '#0067AC',
         data: $.map( [ DATA[0].likely,DATA[1].likely,DATA[2].likely,DATA[3].likely ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; % likely/very likely: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].likely + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; % unlikely/<br>very unlikely: </td><td style="padding:2px; margin:2px;"><br><strong>' + DATA[this.point.x].unlikely + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; % unsure: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].unsure + '%</strong></td></tr>' +
                '</table>';
          },
      },
  });

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic2',
        backgroundColor: '#fafafa',
        height: 450,
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        type: 'bar'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ DATA2[0].state,DATA2[1].state,DATA2[2].state,DATA2[3].state,DATA2[4].state,DATA2[5].state ],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 100,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: 'Percentage rating 4 or 5'
        }
      },
      legend: {
        reversed: true
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: 'Over the next 2 years',
        data: $.map( [ DATA2[0].next2,DATA2[1].next2,DATA2[2].next2,DATA2[3].next2,DATA2[4].next2,DATA2[5].next2 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: 'Over the next 5 years',
        data: $.map( [ DATA2[0].next5,DATA2[1].next5,DATA2[2].next5,DATA2[3].next5,DATA2[4].next5,DATA2[5].next5 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA2[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Over the next 2 years: </td><td style="padding:2px; margin:2px;"><strong>' + DATA2[this.point.x].next2 + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Over the next 5 years: </td><td style="padding:2px; margin:2px;"><strong>' + DATA2[this.point.x].next5 + '%</strong></td></tr>' +
                '</table>';
          },
      },
  });

});

//Colors
//#0067AC
//#67B4A5
//#EBAB38
//#9fa7d4
//#AE1B1F
//#5d7683
//#b9e5fb
//#CEE5B7
//#fbf6b4
//#FFE17F
//#f15b5b
