Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 500,
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
        categories: ['Orthopedics','Cardiology','Radiology','Dermatology','Anesthesiology','Urology','Ophthalmology','Emergency Medicine','Ob/Gyn','Psychiatry','Internal Medicine','Family Medicine','Pediatrics'],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 50000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: "Average annual compensation"
              }
      },
      legend: {
        enabled: false
      },
      credits: {
          enabled: false
      },
      series: [{
        name: 'Annual compensation',
        data: $.map( [ DATA[0].comp,DATA[1].comp,DATA[2].comp,DATA[3].comp,DATA[4].comp,DATA[5].comp,DATA[6].comp,DATA[7].comp,DATA[8].comp,DATA[9].comp,DATA[10].comp,DATA[11].comp,DATA[12].comp ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '$' +  DATA[this.point.x].comptxt;
      },
    },
  });

//});
