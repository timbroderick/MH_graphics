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
        type: 'bar'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ DATA[0].med,DATA[1].med,DATA[2].med,DATA[3].med,DATA[4].med ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 50000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        //max: 2000,
        labels: {
          format: '$' + '{value:,.0f}'
        },
        title: {
          text: 'AVG. ANNUAL COMPENSATION'
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
            format: '$' + '{y:,.0f}',
            align: 'right'
            }
        }
      },
      series: [{
        name: 'Men',
        data: $.map( [ DATA[0].men,DATA[1].men,DATA[2].men,DATA[3].men,DATA[4].men ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Women',
        data: $.map( [ DATA[0].women,DATA[1].women,DATA[2].women,DATA[3].women,DATA[4].women ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].med + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Men: </td><td style="padding:2px; margin:2px;"><strong>$' + DATA[this.point.x].mentxt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Women: </td><td style="padding:2px; margin:2px;"><strong>$' + DATA[this.point.x].womentxt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Difference: </td><td style="padding:2px; margin:2px;"><span style="color:red"><strong>' + DATA[this.point.x].diff + '</strong></span></td></tr>' +
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
