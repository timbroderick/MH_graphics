

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 350,
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
        categories: ["2015","2016","2017","2018","2019"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'Year'
            }
      },
      yAxis: {
        tickInterval: 0.25,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0.5,
        max: 1.1,
        title: {
            text: null
        },
        plotLines: [{
            color: '#ae1b1f',
            value: 1,
            width: 1,
            zIndex: 2
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
          lineWidth: 3
        }
      },
      series: [{
        name: '<strong>IBM Watson Health<br>top 15 teaching hospitals</strong>',
        data: $.map( [ DATA[0].benchmark,DATA[1].benchmark,DATA[2].benchmark,DATA[3].benchmark,DATA[4].benchmark ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'All in group studied',
        data: $.map( [ DATA[0].peer,DATA[1].peer,DATA[2].peer,DATA[3].peer,DATA[4].peer ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
       tooltip: {
           crosshairs: true,
           useHTML: true,
           shared: true
       }
  });



    var chartRate = new Highcharts.Chart({
        chart: {
          renderTo: 'graphic1',
          backgroundColor: '#fafafa',
          height: 350,
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
          categories: ["2015","2016","2017","2018","2019"],
                labels: {
                  staggerLines: 2
              },
              title: {
                  text: 'Year'
              }
        },
        yAxis: {
          tickInterval: 0.25,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0.5,
          max: 1.1,
          title: {
              text: null
          },
          plotLines: [{
              color: '#ae1b1f',
              value: 1,
              width: 1,
              zIndex: 2
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
            lineWidth: 3
          }
        },
        series: [{
          name: '<strong>IBM Watson Health<br>Top 50</strong>',
          data: $.map( [ DATA2[0].benchmark,DATA2[1].benchmark,DATA2[2].benchmark,DATA2[3].benchmark,DATA2[4].benchmark ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
          name: 'All hospitals studied',
          data: $.map( [ DATA2[0].peer,DATA2[1].peer,DATA2[2].peer,DATA2[3].peer,DATA2[4].peer ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
         }],
         tooltip: {
             crosshairs: true,
             useHTML: true,
             shared: true
         }
    });
