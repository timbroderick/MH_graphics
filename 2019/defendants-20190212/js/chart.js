

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 500,
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
        categories: [DATA[0].defendant,DATA[1].defendant,DATA[2].defendant,DATA[3].defendant,DATA[4].defendant,DATA[5].defendant,DATA[6].defendant,DATA[7].defendant,DATA[8].defendant,DATA[9].defendant,DATA[10].defendant,DATA[11].defendant,DATA[12].defendant,DATA[13].defendant,DATA[14].defendant,DATA[15].defendant],
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'Number of cases'
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
        name: 'Cases',
        data: $.map( [ DATA[0].cases,DATA[1].cases,DATA[2].cases,DATA[3].cases,DATA[4].cases,DATA[5].cases,DATA[6].cases,DATA[7].cases,DATA[8].cases,DATA[9].cases,DATA[10].cases,DATA[11].cases,DATA[12].cases,DATA[13].cases,DATA[14].cases,DATA[15].cases ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true
    },
  });

//});
