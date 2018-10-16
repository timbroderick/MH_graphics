

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
        categories: ["William <br>Carpenter III,<br>Chairman and CEO","David Dill,<br>President and COO","Michael Coggin,<br>Executive VP and CFO","John Bumpus<br>Executive VP and CAO"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 10000000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'IN MILLIONS'
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
              stacking: 'normal'
            }
      },
      series: [{
        name: 'Severance',
        data: $.map( [ DATA[0].severance,DATA[1].severance,DATA[2].severance,DATA[3].severance ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
        name: 'Equity',
        data: $.map( [ DATA[0].equity,DATA[1].equity,DATA[2].equity,DATA[3].equity ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
        name: 'Pension',
        color: "#EBAB38",
        data: $.map( [ DATA[0].pension,DATA[1].pension,DATA[2].pension,DATA[3].pension ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }, {
        name: 'Tax Reimbursement',
        color: "#9D85BE",
        data: $.map( [ DATA[0].reimburse,DATA[1].reimburse,DATA[2].reimburse,DATA[3].reimburse ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<b>' + DATA[this.point.x].name + '</b><br><table class="mapTable table-hover table-striped table-condensed"><tr><td class="tdLEFT">Total:</td><td>$' + DATA[this.point.x].total1 + '</td></tr><tr><td class="tdLEFT"><span style="color:#0067AC"><strong>Severance: </strong></span></td><td>$' + DATA[this.point.x].severance1 + '</td></tr><tr><td class="tdLEFT"><strong><span style="color:#67B4A5">Equity: </strong></span></td><td>$' + DATA[this.point.x].equity1 + '</td></tr><tr><td class="tdLEFT"><strong><span style="color:#EBAB38">Pension: </strong></span></td><td>$' + DATA[this.point.x].pension1 + '</td></tr><tr><td class="tdLEFT"><strong><span style="color:#9D85BE">Tax reimbursement: </strong></span></td><td>$' + DATA[this.point.x].reimburse1 + '</td></tr></table>';
      },
    },
  });

//});
