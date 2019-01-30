Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

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
        categories: [ DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year ],
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 5000000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'TOTAL ENROLLMENT'
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
        name: 'Enrollment',
        data: $.map( [ DATA[0].total,DATA[1].total,DATA[2].total,DATA[3].total,DATA[4].total ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;">Enrollment: </td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].totaltxt + '</td></tr></table>';
      },
    },
  });

//});
