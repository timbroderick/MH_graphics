

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 400,
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
        categories: ["2013","2014","2015","2016","2017","2018","2019"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'FISCAL YEAR'
            }
      },
      yAxis: {
        tickInterval: 100,
        minorTickInterval: 'auto',
        overflow: 'justify',
        labels: {
                formatter: function () {
                    return '$' + this.value + 'M';
                }
            },
        min: 0,
              title: {
                  text: 'ESTIMATED HOSPITAL PENALTIES<br>($ IN MILLIONS)'
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
        name: 'Penalties',
        data: $.map( [ DATA[0].value,DATA[1].value,DATA[2].value,DATA[3].value,DATA[4].value,DATA[5].value,DATA[6].value ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#0067AC"><strong>Total penalty: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">$' + DATA[this.point.x].value + ' million</td></tr></table>';
      },
    },
  });

//});
