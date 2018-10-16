

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
        categories: ["Major teaching","Minor teaching/<br>large community","Medium/small<br>community","Specialty"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'Sullivan Cotter peer groups'
            }
      },
      yAxis: {
        tickInterval: 0.05,
        minorTickInterval: 'auto',
        overflow: 'justify',
        //min: 0,
              title: {
                  text: '<strong><- Decrease | Increase -></strong><br>Percentage-point change<br>in average penalty, 2018-2019'
              },
              plotLines: [{
                color: '#666',
                value: 0,
                width: 2,
                zIndex: 10000
              }]
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
              }//,
              //stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
            }
      },
      series: [{
        name: 'CMS peer group 1',
        data: $.map( [ DATA[0].cms1,DATA[1].cms1,DATA[2].cms1,DATA[3].cms1 ], function(datavalue)
          { return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
          name: 'CMS peer group 2',
          data: $.map( [ DATA[0].cms2,DATA[1].cms2,DATA[2].cms2,DATA[3].cms2 ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
          }, {
            name: 'CMS peer group 3',
            data: $.map( [ DATA[0].cms3,DATA[1].cms3,DATA[2].cms3,DATA[3].cms3 ], function(datavalue) {
              return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
            }, {
              name: 'CMS peer group 4',
              data: $.map( [ DATA[0].cms4,DATA[1].cms4,DATA[2].cms4,DATA[3].cms4 ], function(datavalue) {
                return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
              }, {
                name: 'CMS peer group 5',
                data: $.map( [ DATA[0].cms5,DATA[1].cms5,DATA[2].cms5,DATA[3].cms5 ], function(datavalue) {
                  return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          shared:true
          //useHTML: true,
          //formatter: function() {
                //return '<b>' + DATA[this.point.x].state + '</b><br><table class="mapTable table-hover table-striped table-condensed"><tr><td class="tdLEFT"><span style="color:#0067AC"><strong>Something: </strong></span></td><td>' + DATA[this.point.x].something + '</td></tr><tr><td class="tdLEFT"><strong><span style="color:#67B4A5">Another thing: </strong></span></td><td>' + DATA[this.point.x].another_thing + '</td></tr></table>';
      //},
    },
  });

//});
