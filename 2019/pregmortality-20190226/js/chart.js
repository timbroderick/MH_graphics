$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 350,
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
        categories: [ DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year,DATA[5].year,DATA[6].year,DATA[7].year,DATA[8].year,DATA[9].year,DATA[10].year,DATA[11].year,DATA[12].year,DATA[13].year,DATA[14].year,DATA[15].year,DATA[16].year,DATA[17].year,DATA[18].year,DATA[19].year,DATA[20].year,DATA[21].year,DATA[22].year,DATA[23].year,DATA[24].year,DATA[25].year,DATA[26].year,DATA[27].year ],
        labels: {
          staggerLines: 2,
          step: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 2,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        //max: 2000,
        labels: {
          format: '{value:,.0f}'
        },
        title: {
          text: 'Rate'
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
        name: 'Rate',
        data: $.map( [ DATA[0].rate,DATA[1].rate,DATA[2].rate,DATA[3].rate,DATA[4].rate,DATA[5].rate,DATA[6].rate,DATA[7].rate,DATA[8].rate,DATA[9].rate,DATA[10].rate,DATA[11].rate,DATA[12].rate,DATA[13].rate,DATA[14].rate,DATA[15].rate,DATA[16].rate,DATA[17].rate,DATA[18].rate,DATA[19].rate,DATA[20].rate,DATA[21].rate,DATA[22].rate,DATA[23].rate,DATA[24].rate,DATA[25].rate,DATA[26].rate,DATA[27].rate ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; Rate per 100,000<br>live births: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong><br>' + DATA[this.point.x].rate + '</strong></td></tr>' +
                '</table>';
          },
      },
  });

});

//Colors
//#0067AC
//#67B4A5
//#EBAB38
//#9D85BE
//#AE1B1F
//#FECF8D
//#51247f
//#394e4b
