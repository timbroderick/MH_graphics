

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
        categories: [DATA[0].issue,DATA[1].issue,DATA[2].issue,DATA[3].issue,DATA[4].issue,DATA[5].issue,DATA[6].issue,DATA[7].issue,DATA[8].issue,DATA[9].issue,DATA[10].issue],
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
        min: 0,
              title: {
                  text: 'AVERAGE RANK<br>(lowest = most concern)'
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
        name: 'Average rank',
        data: $.map( [ DATA[0].rank,DATA[1].rank,DATA[2].rank,DATA[3].rank,DATA[4].rank,DATA[5].rank,DATA[6].rank,DATA[7].rank,DATA[8].rank,DATA[9].rank,DATA[10].rank ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].issue + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>Avg. rank: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].rank + '</td></tr></table>';
      },
    },
  });

//});
