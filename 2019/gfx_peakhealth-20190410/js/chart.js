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
        categories: [ DATA[0].service,DATA[1].service,DATA[2].service ],
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
        //max: 2000,
        labels: {
          format: '$' + '{value:,.0f}'
        },
        title: {
          text: 'UNIT SERVICE COSTS'
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
        name: 'Summit County',
        data: $.map( [ DATA[0].summit,DATA[1].summit,DATA[2].summit ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Denver Metro',
        data: $.map( [ DATA[0].denver,DATA[1].denver,DATA[2].denver ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].service + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Summit County: </td><td style="padding:2px; margin:2px;"><strong>$' + DATA[this.point.x].summittxt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Denver Metro: </td><td style="padding:2px; margin:2px;"><strong>$' + DATA[this.point.x].denvertxt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Summit vs. Denver: </td><td style="padding:2px; margin:2px;"><strong>+' + DATA[this.point.x].diff + '</strong></td></tr>' +
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
