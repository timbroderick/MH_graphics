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
        type: 'column'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year ],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 2,
        minorTickInterval: 'auto',
        overflow: 'justify',
        //min: 0,
        //max: 2000,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        plotLines: [
          {
            color: '#aaa',
            value: 0,
            width: 1,
            zIndex: 100,
            dashStyle: 'solid'
          }],
        title: {
          text: 'PERCENTAGE CHANGE<br>FROM PREVIOUS YEAR'
        }
      },
      legend: {
          enabled: true
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: 'Total GME payments',
        data: $.map( [ DATA[0].gme,DATA[1].gme,DATA[2].gme,DATA[3].gme,DATA[4].gme ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Total FTE<br>residents/fellows',
        data: $.map( [ DATA[0].fte,DATA[1].fte,DATA[2].fte,DATA[3].fte,DATA[4].fte ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '<br><small>% change from previous year</small></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Total GME<br>payments: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].gme + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Total FTE<br>residents/fellows: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].fte + '%</strong></td></tr>' +
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
