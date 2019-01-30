

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
        categories: ["2008","2009","2010","2011","2012","2013","2014"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        labels: {
                formatter: function () {
                    return this.value + '%';
                }
            },
        min: 0,
        max: 110,
              title: {
                  text: 'GENERIC DRUG PRICE PER DOSE<br>RELATIVE TO BRAND-NAME VERSION'
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
        name: 'One manufacturer',
        data: $.map( [ DATA[0].one_manu,DATA[1].one_manu,DATA[2].one_manu,DATA[3].one_manu,DATA[4].one_manu,DATA[5].one_manu,DATA[6].one_manu ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Three manufacturers',
        data: $.map( [ DATA[0].three_manu,DATA[1].three_manu,DATA[2].three_manu,DATA[3].three_manu,DATA[4].three_manu,DATA[5].three_manu,DATA[6].three_manu ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Five manufacturers',
        data: $.map( [ DATA[0].five_manu,DATA[1].five_manu,DATA[2].five_manu,DATA[3].five_manu,DATA[4].five_manu,DATA[5].five_manu,DATA[6].five_manu ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Seven manufacturers',
        data: $.map( [ DATA[0].seven_manu,DATA[1].seven_manu,DATA[2].seven_manu,DATA[3].seven_manu,DATA[4].seven_manu,DATA[5].seven_manu,DATA[6].seven_manu ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Nine manufacturers',
        data: $.map( [ DATA[0].nine_manu,DATA[1].nine_manu,DATA[2].nine_manu,DATA[3].nine_manu,DATA[4].nine_manu,DATA[5].nine_manu,DATA[6].nine_manu ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong><br>Number of<br>manufacturers</h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>One: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].one_manu + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#67B4A5">Three: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].three_manu + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#EBAB38"><strong>Five: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].five_manu + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#9D85BE">Seven: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].seven_manu + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#AE1B1F"><strong>Nine: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].nine_manu + '%</td></tr></table>';
      },
    },
  });

//});
