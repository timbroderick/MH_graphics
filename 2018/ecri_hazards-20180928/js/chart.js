

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
        categories: ["2017","2018"],
            title: {
                text: 'THROUGH AUGUST 31'
            }
      },
      yAxis: {
        tickInterval: 50,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'BREACHES'
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
        name: 'Loss',
        data: $.map( [ DATA[0].loss,DATA[1].loss ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
          name: 'Hacking/IT Incident',
          data: $.map( [ DATA[0].hack,DATA[1].hack ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
          name: 'Unauthorized access/<br>disclosure',
          data: $.map( [ DATA[0].access,DATA[1].access ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
          name: 'Theft',
          data: $.map( [ DATA[0].theft,DATA[1].theft ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
          }, {
            name: 'Improper disposal',
            data: $.map( [ DATA[0].disposal,DATA[1].disposal ], function(datavalue) {
              return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
       tooltip: {
           crosshairs: true,
           useHTML: true,
           style: {
             width: '200px'
           },
          formatter: function() {
                return '<h5><strong>' + DATA[this.point.x].year + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>Loss: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].loss + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#67B4A5">Hacking/IT<br>incident: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].hack + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#EBAB38">Unauthorized access/<br>disclosure: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].access + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#9D85BE">Theft: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].theft + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#AE1B1F">Improper<br>disposal: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].disposal + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong>Total: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].total + '</strong></td></tr></table>';
      },
    },
  });

//});
