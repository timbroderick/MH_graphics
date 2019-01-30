

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 550,
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
        categories: ['Hospital care','Professional services','Other health, residential<br>and personal care','Home healthcare','Nursing care facilities<br>and continuing care<br>retirement communities','Prescription drugs','Durable medical equipment','Other nondurable<br>medical products'],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            }
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
                  text: 'Annual growth (percent)'
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
                },
            }
      },
      series: [{
        name: '2013',
        data: $.map( [ DATA[0].y2013,DATA[1].y2013,DATA[2].y2013,DATA[3].y2013,DATA[4].y2013,DATA[5].y2013,DATA[6].y2013,DATA[7].y2013 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: '2014',
        data: $.map( [ DATA[0].y2014,DATA[1].y2014,DATA[2].y2014,DATA[3].y2014,DATA[4].y2014,DATA[5].y2014,DATA[6].y2014,DATA[7].y2014 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: '2015',
         data: $.map( [ DATA[0].y2015,DATA[1].y2015,DATA[2].y2015,DATA[3].y2015,DATA[4].y2015,DATA[5].y2015,DATA[6].y2015,DATA[7].y2015 ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: '2016',
          data: $.map( [ DATA[0].y2016,DATA[1].y2016,DATA[2].y2016,DATA[3].y2016,DATA[4].y2016,DATA[5].y2016,DATA[6].y2016,DATA[7].y2016 ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
         },{
           name: '2017',
           data: $.map( [ DATA[0].y2017,DATA[1].y2017,DATA[2].y2017,DATA[3].y2017,DATA[4].y2017,DATA[5].y2017,DATA[6].y2017,DATA[7].y2017 ], function(datavalue) {
             return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
          }],
      tooltip: {
          crosshairs: true,
          shared: true,
          valueDecimals: 1,
          valueSuffix: '%'
    },
  });

//});
