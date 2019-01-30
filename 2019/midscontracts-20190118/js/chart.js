

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 525,
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
        categories: [ DATA[0].place,DATA[1].place,DATA[2].place,DATA[3].place,DATA[4].place,DATA[5].place,DATA[6].place,DATA[7].place,DATA[8].place,DATA[9].place,DATA[10].place,DATA[11].place,DATA[12].place,DATA[13].place,DATA[14].place,DATA[15].place ],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 20,
        minorTickInterval: 'auto',
        overflow: 'justify',
        labels: {
                formatter: function () {
                    return '$' + this.value + 'M';
                }
            },
        min: 0,
              title: {
                  text: '2013 MIDS CONTRACT AWARDS<br>($ IN MILLIONS)'
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
        name: '2013 MIDS contract',
        data: $.map( [ DATA[0].value,DATA[1].value,DATA[2].value,DATA[3].value,DATA[4].value,DATA[5].value,DATA[6].value,DATA[7].value,DATA[8].value,DATA[9].value,DATA[10].value,DATA[11].value,DATA[12].value,DATA[13].value,DATA[14].value,DATA[15].value ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].place + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong>Award: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">$' + DATA[this.point.x].value + ' million</td></tr></table>';
      },
    },
  });

//});
