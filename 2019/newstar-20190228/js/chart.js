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
        categories: [ DATA[0].rating,DATA[1].rating,DATA[2].rating,DATA[3].rating,DATA[4].rating ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: 'RATING'
        }
      },
      yAxis: {
        tickInterval: 5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 35,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: 'Percentage receiving rating'
        }
      },
      legend: {
        reversed: true
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: 'Old rating',
        data: $.map( [ DATA[0].oldperc,DATA[1].oldperc,DATA[2].oldperc,DATA[3].oldperc,DATA[4].oldperc ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'New rating',
        data: $.map( [ DATA[0].newperc,DATA[1].newperc,DATA[2].newperc,DATA[3].newperc,DATA[4].newperc ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>Rating: ' +  DATA[this.point.x].rating + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; Previous: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].oldperc + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar SECOND"></div>&nbsp; New: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].newperc + '%</strong></td></tr>' +
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
