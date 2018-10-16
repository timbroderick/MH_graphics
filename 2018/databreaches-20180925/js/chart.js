
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
        name: 'Business associate',
        data: $.map( [ DATA[0].business, DATA[1].business, DATA[2].business, DATA[3].business, DATA[4].business, DATA[5].business, DATA[6].business, DATA[7].business ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'Health plan',
        data: $.map( [ DATA[0].plan, DATA[1].plan,DATA[2].plan, DATA[3].plan, DATA[4].plan, DATA[5].plan, DATA[6].plan, DATA[7].plan ], function(datavalue1) {
          return isNaN(datavalue1) ? {y:null} : parseFloat(datavalue1); })
      }, {
        name: 'Healthcare provider',
        data: $.map( [ DATA[0].provider, DATA[1].provider, DATA[2].provider, DATA[3].provider, DATA[4].provider, DATA[5].provider, DATA[6].provider, DATA[7].provider ], function(datavalue2) {
          return isNaN(datavalue2) ? {y:null} : parseFloat(datavalue2); })
       }],
      tooltip: {
          crosshairs: true,
          shared: true
//          useHTML: true,
//          formatter: function() {
//                return '<b>' + DATA[this.point.x].Year + '</b><br><table class="mapTable table-hover table-striped table-condensed"><tr><td class="tdLEFT"><span style="color:#0067AC"><strong>Something: </strong></span></td><td>' + DATA[this.point.x].something + '</td></tr><tr><td class="tdLEFT"><strong><span style="color:#67B4A5">Another thing: </strong></span></td><td>' + DATA[this.point.x].another_thing + '</td></tr></table>';
//      }
    },
  });

//});
