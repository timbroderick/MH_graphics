

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 325,
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
        categories: ["2015","2016","2017"],
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
                    return '$' + this.value;
                }
            },
        min: 0,
              title: {
                  text: 'AVERAGE DRUG SPENDING<br>PER ADMISSION'
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
        name: 'Inpatient<br>drug spending',
        data: $.map( [ DATA[0].inpatient,DATA[1].inpatient,DATA[2].inpatient ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'Outpatient<br>drug spending',
        data: $.map( [ DATA[0].outpatient,DATA[1].outpatient,DATA[2].outpatient ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>Avg. inpatient<br>drug spending: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">$' + DATA[this.point.x].inpatient + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#67B4A5">Avg. outpatient<br>drug spending: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">$' + DATA[this.point.x].outpatient + '</td></tr></table>';
      },
    },
  });

//});
