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
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state ],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 5000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'IN-HOME DIALYSIS PATIENTS'
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
        name: 'In-home dialysis patients',
        data: $.map( [ DATA[0].patients,DATA[1].patients,DATA[2].patients,DATA[3].patients,DATA[4].patients ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong>Number: </strong></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].patients1 + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong>% of all dialysis<br>patients: </strong></td><td style="padding:2px; margin:2px; background-color: #fff;"><br>' + DATA[this.point.x].percent + '</td></tr></table>';
      },
    },
  });

//});
