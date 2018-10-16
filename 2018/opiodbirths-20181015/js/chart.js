

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 375,
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
        categories: ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'YEAR'
            }
      },
      yAxis: {
        tickInterval: 2,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'Opioid use disorder<br>per 1,000 delivery hospitalizations'
              }
      },
      legend: {
        reversed: true
      },
      credits: {
          enabled: false
      },
      series: [{
        name: 'National',
        data: $.map( [ 1.10, 1.00, 1.20, 1.20, 1.40, 1.60, 2.10, 2.10, 2.40, 2.90, 3.90, 3.90, 4.90, 5.70, 6.50 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'Kentucky',
        data: $.map( [ 0.40, 0.90, 1.60, 2.40, 2.50, 3.10, 3.90, 4.00, 5.10, 6.10, 7.20, 9.50, 14.00, 15.70, 19.30 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }]
  });

//});
