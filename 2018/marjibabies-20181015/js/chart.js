

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 375,
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
        categories: ["Nonpregnant","Pregnant, all","Pregnant,<br>First trimester","Pregnant,<br>Second trimester","Pregnant,<br>Third trimester"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            },
            plotBands: [{
              from: -0.5,
              to: 0.5,
              color: '#e1e1e1'
            }],
      },
      yAxis: {
        tickInterval: 1,
        minorTickInterval: 'auto',
        overflow: 'justify',
        labels: {
                formatter: function () {
                    return this.value + '%';
                }
            },
        min: 0,
              title: {
                  text: 'Percent'
              }
      },
      legend: {
        reversed: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          series: {
            dataLabels: {
                enabled: false,
                //format: '${y}',
                formatter: function() {
                  return DATA[this.point.x].share;
                },
                align: 'right'
                }
            }
      },
      series: [{
        name: 'Past month',
        data: $.map( [ 7.6, 3.9, 7.4, 2.8, 1.8 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'Past year*',
        data: $.map( [ 7.4, 7.0, 8.5, 6.9, 5.7 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          valueSuffix: '%',
          shared: true
    },
  });

//});
