$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 350,
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        type: 'column'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state,DATA[5].state,DATA[6].state,DATA[7].state,DATA[8].state,DATA[9].state,DATA[10].state,DATA[11].state ],
        labels: {
          rotation: -45
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 1000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: -5000,
        max: 0,
        labels: {
          format: '{value:,.0f}'
        },
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: 'change',
        color: '#AE1B1F',
        data: $.map( [ DATA[0].change,DATA[1].change,DATA[2].change,DATA[3].change,DATA[4].change,DATA[5].change,DATA[6].change,DATA[7].change,DATA[8].change,DATA[9].change,DATA[10].change,DATA[11].change ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;">2017: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].y2017 + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;">2018: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].y2018 + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;">Change: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].changep + '</strong></td></tr>' +
                '</table>';
          },
      },
  });

});

//Colors
//#0067AC
//#67B4A5
//#EBAB38
//#9D85BE
//#AE1B1F
//#FECF8D
//#51247f
//#394e4b
