
Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

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
        categories: [ DATA[0].procedure, DATA[1].procedure, DATA[2].procedure, DATA[3].procedure, DATA[4].procedure, DATA[5].procedure],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 1000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'TOTAL PRICE'
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
              stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
            }
      },
      series: [{
        name: 'Average hospital price',
        data: $.map( [ DATA[0].hospital,DATA[1].hospital,DATA[2].hospital,DATA[3].hospital,DATA[4].hospital,DATA[5].hospital ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: 'Average physician price',
        data: $.map( [ DATA[0].physician,DATA[1].physician,DATA[2].physician,DATA[3].physician,DATA[4].physician,DATA[5].physician ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].procedure + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#67B4A5"><strong>Physician<br>avg. price: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;"><br>$' + DATA[this.point.x].physiciantxt + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><span style="color:#0067AC"><strong>Hospital<br>avg. price: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;"><br>$' + DATA[this.point.x].hospitaltxt + '</td></tr></table>';
      },
    },
  });
