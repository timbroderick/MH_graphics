Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 425,
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
        categories: ["2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'YEAR'
            }
      },
      yAxis: {
        tickInterval: 5000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'Number of care centers'
              }
      },
      legend: {
        enabled: false
      },
      credits: {
          enabled: false
      },
      series: [{
        name: 'Outpatient<br>care centers',
        data: $.map( [ DATA[0].center,DATA[1].center,DATA[2].center,DATA[3].center,DATA[4].center,DATA[5].center,DATA[6].center,DATA[7].center,DATA[8].center,DATA[9].center,DATA[10].center,DATA[11].center ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true
    },
  });
