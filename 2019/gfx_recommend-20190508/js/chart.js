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
        categories: [ 2014,2015,2016,2017 ],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 25,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 100,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: null
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
        name: 'Would not recommend',
        data: $.map( [ DATA[0].not,DATA[1].not,DATA[2].not,DATA[3].not ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Would probably recommmend',
        data: $.map( [ DATA[0].prob,DATA[1].prob,DATA[2].prob,DATA[3].prob ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: 'Would definitely recommend',
         data: $.map( [ DATA[0].def,DATA[1].def,DATA[2].def,DATA[3].def ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Would not<br>recommend: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].not + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Would probably<br>recommend: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].prob + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Would definitely<br>recommend: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].def + '%</strong></td></tr>' +
                '</table>';
          },
      },
  });

});

//Colors
//#0067AC
//#67B4A5
//#EBAB38
//#9fa7d4
//#AE1B1F
//#5d7683
//#b9e5fb
//#CEE5B7
//#fbf6b4
//#FFE17F
//#f15b5b
