

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 325,
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
        categories: ["Medicare", "Medicaid", "Private"],
            title: {
                text: 'INSURANCE'
            }
      },
      yAxis: {
        tickInterval: 1,
        minorTickInterval: 'auto',
        overflow: 'justify',
        labels: {
                formatter: function () {
                    return this.value + '%';
                }
            },
        min: 0,
              title: {
                  text: 'AVERAGE ANNUAL CHANGE'
              }
      },
      legend: {
        reversed: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: 'Spending',
        data: $.map( [ DATA[0].spend,DATA[1].spend,DATA[2].spend ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'Enrollment',
        data: $.map( [ DATA[0].enroll,DATA[1].enroll,DATA[2].enroll ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }, {
         name: 'Spending<br>per enrollee',
         data: $.map( [ DATA[0].perenroll,DATA[1].perenroll,DATA[2].perenroll ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>Avg. annual<br>change in<br>' +  this.x + '...</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#0067AC"><strong>spending: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].spend + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><span style="color:#67B4A5"><strong>enrollment: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].enroll + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#EBAB38"><strong>spending per<br>enrollee: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;"><br>' + DATA[this.point.x].perenroll + '%</td></tr></table>';
      },
    },
  });

//});
