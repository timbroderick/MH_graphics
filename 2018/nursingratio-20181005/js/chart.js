

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 375,
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
        categories: ["Community -<br>high public payer","Community","Teaching","Academic","Specialty"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'HOSPITAL TYPE'
            }
      },
      yAxis: {
        tickInterval: 5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: '% INCREASE IN STAFFING'
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
            dataLabels: {
                enabled: false,
                //format: '${y}',
                formatter: function() {
                  return DATA[this.point.x].share;
                },
                align: 'right'
                }
            }
      },
      series: [{
        name: "Assumes avg. of 10%<br>statewide increase",
        data: $.map( [ DATA[0].anA,DATA[1].anA,DATA[2].anA,DATA[3].anA,DATA[4].anA], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
          name: "Assumes avg. of 20%<br>statewide increase",
          data: $.map( [ DATA[0].anB,DATA[1].anB,DATA[2].anB,DATA[3].anB,DATA[4].anB ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].type + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>10% statewide inc.: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].anA +
                '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#67B4A5">20% statewide inc.: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].anB + '%</td></tr></table>';
      },

    },
  });

//});
