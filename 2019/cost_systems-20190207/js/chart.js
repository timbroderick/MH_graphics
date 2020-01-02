

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
        categories: ["Independent<br>physicians","Employed<br>physicians","Other*"],
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',labels: {
                formatter: function () {
                    return this.value + '%';
                }
            },
        min: 0,
              title: {
                  text: "PERCENTAGE CONSIDERING<br>INFORMATION TO BE 'VERY'<br>OR 'EXTREMELY' INFLUENTIAL"
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
        name: 'Lower device cost,<br>health system savings',
        data: $.map( [ DATA[0].system,DATA[1].system,DATA[2].system ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'Lower device cost,<br>shared savings',
        data: $.map( [ DATA[0].shared,DATA[1].shared,DATA[2].shared ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }, {
         name: 'Institution<br>preference',
         data: $.map( [ DATA[0].instpref,DATA[1].instpref,DATA[2].instpref ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  this.x + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#0067AC"><strong>System savings: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].system + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><span style="color:#67B4A5"><strong>Shared savings: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].shared + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#EBAB38"><strong>Institution<br>preference: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;"><br>' + DATA[this.point.x].instpref + '%</td></tr></table>';
      },
    },
  });

//});
