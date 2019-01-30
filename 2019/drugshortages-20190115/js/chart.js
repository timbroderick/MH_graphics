

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 425,
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
        categories: [ DATA[0].drug,DATA[1].drug,DATA[2].drug,DATA[3].drug,DATA[4].drug,DATA[5].drug,DATA[6].drug,DATA[7].drug,DATA[8].drug,DATA[9].drug ],
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 100,
        labels: {
                formatter: function () {
                    return this.value + '%';
                }
            },
              title: {
                  text: '% of surveyed community hospitals<br>reporting shortage'
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
        name: 'Percentage',
        data: $.map( [ DATA[0].short,DATA[1].short,DATA[2].short,DATA[3].short,DATA[4].short,DATA[5].short,DATA[6].short,DATA[7].short,DATA[8].short,DATA[9].short ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].drug + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>% reporting<br>shortage: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].short + '%</td></tr></table>';
      },
    },
  });

//});
