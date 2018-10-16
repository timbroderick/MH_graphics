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
        categories: ["2009","2010","2011","2012","2013","2014","2015","2016","2017","2018*"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'YEAR'
            }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            },
        min: 0,
              title: {
                  text: 'Value of venture capital deals<br>($ BILLIONS)'
              }
      },
      legend: {
        reversed: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          series: {
              stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
            }
      },
      series: [{
        name: 'Pharma & Biotech',
        data: $.map( [ DATA[0].y2009, DATA[0].y2010, DATA[0].y2011, DATA[0].y2012, DATA[0].y2013, DATA[0].y2014, DATA[0].y2015, DATA[0].y2016, DATA[0].y2017, DATA[0].y2018 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
          name: 'Healthcare services & systems',
          data: $.map( [ DATA[1].y2009, DATA[1].y2010, DATA[1].y2011, DATA[1].y2012, DATA[1].y2013, DATA[1].y2014, DATA[1].y2015, DATA[1].y2016, DATA[1].y2017, DATA[1].y2018 ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
          }, {
            name: 'Healthcare devices & supplies',
            data: $.map( [ DATA[2].y2009, DATA[2].y2010, DATA[2].y2011, DATA[2].y2012, DATA[2].y2013, DATA[2].y2014, DATA[2].y2015, DATA[2].y2016, DATA[2].y2017, DATA[2].y2018 ], function(datavalue) {
              return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          shared: true,
          valuePrefix: '$',
          valueSuffix: ' billion'
    },
  });

//});
