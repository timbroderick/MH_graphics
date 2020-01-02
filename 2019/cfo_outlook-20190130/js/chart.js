

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
        categories: [ DATA[0].item, DATA[1].item, DATA[2].item, DATA[3].item, DATA[4].item, DATA[5].item ],
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        labels: {
          formatter: function () {
              return this.value + '%';
          }
        },
        min: 0,
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
        name: 'Percentage:',
        data: $.map( [ DATA[0].percent,DATA[1].percent,DATA[2].percent,DATA[3].percent,DATA[4].percent,DATA[5].percent ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
        //valueDecimals: 2,
        //valuePrefix: '$',
        //useHTML: true,
        valueSuffix: '%',
        crosshairs: true
    },
  });

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic2',
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
        categories: [ DATA2[0].item, DATA2[1].item, DATA2[2].item, DATA2[3].item, DATA2[4].item, DATA2[5].item, DATA2[6].item ],
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        labels: {
          formatter: function () {
              return this.value + '%';
          }
        },
        min: 0,
        max: 90,
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
        name: 'Percentage:',
        data: $.map( [ DATA2[0].percent,DATA2[1].percent,DATA2[2].percent,DATA2[3].percent,DATA2[4].percent,DATA2[5].percent,DATA2[6].percent ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
        //valueDecimals: 2,
        //valuePrefix: '$',
        //useHTML: true,
        valueSuffix: '%',
        crosshairs: true
    },
  });
//});
