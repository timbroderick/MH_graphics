Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 425,
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
        categories: [ DATA[0].parent,DATA[1].parent,DATA[2].parent,DATA[3].parent,DATA[4].parent,DATA[5].parent,DATA[6].parent,DATA[7].parent,DATA[8].parent,DATA[9].parent ],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 500000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'NUMBER OF ENROLLEES'
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
        name: 'Jan. 2019<br>enrollment',
        data: $.map( [ DATA[0].total2019,DATA[1].total2019,DATA[2].total2019,DATA[3].total2019,DATA[4].total2019,DATA[5].total2019,DATA[6].total2019,DATA[7].total2019,DATA[8].total2019,DATA[9].total2019 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'Jan. 2018<br>enrollment',
        data: $.map( [ DATA[0].total2018,DATA[1].total2018,DATA[2].total2018,DATA[3].total2018,DATA[4].total2018,DATA[5].total2018,DATA[6].total2018,DATA[7].total2018,DATA[8].total2018,DATA[9].total2018 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].parent + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>Jan. 2019<br>enrollment: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].total2019txt + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#67B4A5">Jan. 2018<br>enrollment: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].total2018txt + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;">Percentage change<br>from 2018: </td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].percchange + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;">Share of 2019<br>enrollment: </td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].share2019 + '</td></tr></table>';
      },
    },
  });

//});
