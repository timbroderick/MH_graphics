
    var chartRate = new Highcharts.Chart({
        chart: {
          renderTo: 'graphic',
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
          categories: [ DATA[0].sector,DATA[1].sector,DATA[2].sector,DATA[3].sector,DATA[4].sector,DATA[5].sector,DATA[6].sector,DATA[7].sector,DATA[8].sector,DATA[9].sector ],
                labels: {
                  staggerLines: 2
              },
              title: {
                  text: null
              }
        },
        yAxis: {
          tickInterval: 5,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0,
          labels: {
                  formatter: function () {
                      return this.value + '%';
                  }
              },
                title: {
                    text: 'PERCENTAGE ACTIVELY PURSUING'
                }
        },
        legend: {
          reversed: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
        },
        series: [{
          name: '2016',
          data: $.map( [ DATA[0].y2016,DATA[1].y2016,DATA[2].y2016,DATA[3].y2016,DATA[4].y2016,DATA[5].y2016,DATA[6].y2016,DATA[7].y2016,DATA[8].y2016,DATA[9].y2016 ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
          name: '2017',
          data: $.map( [ DATA[0].y2017,DATA[1].y2017,DATA[2].y2017,DATA[3].y2017,DATA[4].y2017,DATA[5].y2017,DATA[6].y2017,DATA[7].y2017,DATA[8].y2017,DATA[9].y2017 ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
         }, {
           name: '2018',
           data: $.map( [ DATA[0].y2018,DATA[1].y2018,DATA[2].y2018,DATA[3].y2018,DATA[4].y2018,DATA[5].y2018,DATA[6].y2018,DATA[7].y2018,DATA[8].y2018,DATA[9].y2018 ], function(datavalue) {
             return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
          }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  DATA[this.point.x].sector + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#0067AC"><strong>2016: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].y2016 + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><span style="color:#67B4A5"><strong>2017: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].y2017 + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#EBAB38"><strong>2018: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].y2018 + '%</td></tr></table>';
        },
      },
    });
