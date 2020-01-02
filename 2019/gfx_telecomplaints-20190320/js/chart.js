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
        categories: [ DATA[0].complaints,DATA[1].complaints,DATA[2].complaints,DATA[3].complaints,DATA[4].complaints,DATA[5].complaints,DATA[6].complaints,DATA[7].complaints,DATA[8].complaints,DATA[9].complaints ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 25,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        //max: 2000,
        labels: {
          format: '{value:,.0f}'
        },
        title: {
          text: null
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
        name: 'Complaints',
        data: $.map( [ DATA[0].calls,DATA[1].calls,DATA[2].calls,DATA[3].calls,DATA[4].calls,DATA[5].calls,DATA[6].calls,DATA[7].calls,DATA[8].calls,DATA[9].calls ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].complaints + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Number of calls: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].calls + '</strong></td></tr>' +
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
