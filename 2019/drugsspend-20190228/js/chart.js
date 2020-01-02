$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 450,
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
        categories: [ DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year,DATA[5].year,DATA[6].year,DATA[7].year,DATA[8].year,DATA[9].year,DATA[10].year,DATA[11].year,DATA[12].year ],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 105,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: 'PERCENTAGE OF SPENDING'
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
          dataLabels: {
            enabled: false,
            format: '$' + '{y:,.0f}',
            align: 'right'
            },
          stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
        }
      },
      series: [{
        name: 'Copay spending',
        data: $.map( [ DATA[0].copay,DATA[1].copay,DATA[2].copay,DATA[3].copay,DATA[4].copay,DATA[5].copay,DATA[6].copay,DATA[7].copay,DATA[8].copay,DATA[9].copay,DATA[10].copay,DATA[11].copay,DATA[12].copay ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: 'Coinsurance spending',
        data: $.map( [ DATA[0].coinsure,DATA[1].coinsure,DATA[2].coinsure,DATA[3].coinsure,DATA[4].coinsure,DATA[5].coinsure,DATA[6].coinsure,DATA[7].coinsure,DATA[8].coinsure,DATA[9].coinsure,DATA[10].coinsure,DATA[11].coinsure,DATA[12].coinsure ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: 'Deductible spending',
        data: $.map( [ DATA[0].deduct,DATA[1].deduct,DATA[2].deduct,DATA[3].deduct,DATA[4].deduct,DATA[5].deduct,DATA[6].deduct,DATA[7].deduct,DATA[8].deduct,DATA[9].deduct,DATA[10].deduct,DATA[11].deduct,DATA[12].deduct ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + ' drug spending</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; Copay: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].deduct + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar SECOND"></div>&nbsp; Coinsurance: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].coinsure + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar THIRD"></div>&nbsp; Deductible: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].copay + '%</strong></td></tr>' +
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
