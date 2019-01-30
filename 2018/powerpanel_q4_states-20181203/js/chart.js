

  var chartRate = new Highcharts.Chart({
    chart: {
      renderTo: 'graphic1',
      backgroundColor: '#fafafa',
      height: 300,
      spacingBottom: 15,
      spacingTop: 10,
      spacingLeft: 10,
      spacingRight: 10,
      type: 'pie'
    },
    title: {
          text: null,
    },
    xAxis: {
          title: {
            text: null
          }
    },
    yAxis: {
          title: {
            text: null
          }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
          dataLabels: {
              enabled: false,
              },
          showInLegend: true
          }
    },
    series: [{
      name: 'IMPACT',
      data: [{
        name: 'Positive',
        y: parseFloat( DATA[0].percent )
      },{
        name: 'Negative',
        y: parseFloat( DATA[1].percent )
      },{
        name: 'Mixed',
        y: parseFloat( DATA[2].percent )
      }]
    }],
     tooltip: {
       useHTML: true,
       // custom tooltip
       formatter: function() {
         return '<small>' + this.series.name + '</small><br><p>' + this.point.name + ': <strong>' + this.point.y + '%</strong></p>';
       }
     },
});

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic2',
        backgroundColor: '#fafafa',
        height: 350,
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
        categories: [ DATA2[0].policy, DATA2[1].policy, DATA2[2].policy, DATA2[3].policy ],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'POLICY'
            }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'PERCENT'
              }
      },
      legend: {
        enabled: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          series: {
            dataLabels: {
                enabled: false
              },
          },
      },
      series: [{
        name: 'Policy',
        data: $.map( [ DATA2[0].percent,DATA2[1].percent,DATA2[2].percent,DATA2[3].percent ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<small>' +  this.point.y + '%</small>';
      },
    },
  });
