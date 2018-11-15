

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 325,
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
        categories: ["Alabama","Alaska","Arkansas","Arizona","California","Colorado","Connecticut"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'X AXIS TITLE'
            }
      },
      yAxis: {
        tickInterval: 250,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'Y AXIS TITLE'
              }
      },
      legend: {
        reversed: true
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          series: {
            dataLabels: {
                enabled: false,
                //format: '${y}',
                formatter: function() {
                  return DATA[this.point.x].share;
                },
                align: 'right'
                },
              stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
            }
      },
      series: [{
        name: 'Something',
        data: $.map( [ DATA[0].something,DATA[1].something,DATA[2].something,DATA[3].something,DATA[4].something,DATA[5].something,DATA[6].something ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'Another thing',
        data: $.map( [ DATA[0].another_thing,DATA[1].another_thing,DATA[2].another_thing,DATA[3].another_thing,DATA[4].another_thing,DATA[5].another_thing,DATA[6].another_thing ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>Something: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].something + '</td></tr></td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#67B4A5">Another thing: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].another_thing + '</td></tr></table>';
      },
    },
  });

//});
