
  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 325,
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        type: 'line'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'YEAR'
            }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'CUMULATIVE # OF<br>RECORDS BREACHED'
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
        name: 'Desktop computer',
        data: $.map( [ DATA[0].desktop, DATA[1].desktop, DATA[2].desktop, DATA[3].desktop, DATA[4].desktop, DATA[5].desktop, DATA[6].desktop, DATA[7].desktop ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'Electronic health record',
        data: $.map( [ DATA[0].elecrecord, DATA[1].elecrecord,DATA[2].elecrecord, DATA[3].elecrecord, DATA[4].elecrecord, DATA[5].elecrecord, DATA[6].elecrecord, DATA[7].elecrecord ], function(datavalue1) {
          return isNaN(datavalue1) ? {y:null} : parseFloat(datavalue1); })
        }, {
          name: 'Email',
          data: $.map( [ DATA[0].email, DATA[1].email, DATA[2].email, DATA[3].email, DATA[4].email, DATA[5].email, DATA[6].email, DATA[7].email ], function(datavalue2) {
            return isNaN(datavalue2) ? {y:null} : parseFloat(datavalue2); })
          }, {
            name: 'Laptop',
            data: $.map( [ DATA[0].laptop, DATA[1].laptop, DATA[2].laptop, DATA[3].laptop, DATA[4].laptop, DATA[5].laptop, DATA[6].laptop, DATA[7].laptop ], function(datavalue2) {
              return isNaN(datavalue2) ? {y:null} : parseFloat(datavalue2); })
            }, {
              name: 'Network server',
              data: $.map( [ DATA[0].server, DATA[1].server, DATA[2].server, DATA[3].server, DATA[4].server, DATA[5].server, DATA[6].server, DATA[7].server ], function(datavalue2) {
                return isNaN(datavalue2) ? {y:null} : parseFloat(datavalue2); })
              }, {
                name: 'Paper or film',
                data: $.map( [ DATA[0].paper, DATA[1].paper, DATA[2].paper, DATA[3].paper, DATA[4].paper, DATA[5].paper, DATA[6].paper, DATA[7].paper ], function(datavalue2) {
                  return isNaN(datavalue2) ? {y:null} : parseFloat(datavalue2); })
       }],
      tooltip: {
          crosshairs: true,
          shared: true
    },
  });

//});
