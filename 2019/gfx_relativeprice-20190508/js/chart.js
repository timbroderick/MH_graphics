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
        categories: [ DATA[0].system,DATA[1].system,DATA[2].system,DATA[3].system,DATA[4].system,DATA[5].system,DATA[6].system,DATA[7].system,DATA[8].system,DATA[9].system ],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 50,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 600,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: "Relative price"
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
        name: 'Relative inpatient price',
        data: $.map( [ DATA[0].inpatient,DATA[1].inpatient,DATA[2].inpatient,DATA[3].inpatient,DATA[4].inpatient,DATA[5].inpatient,DATA[6].inpatient,DATA[7].inpatient,DATA[8].inpatient,DATA[9].inpatient ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Relative outpatient price',
        data: $.map( [ DATA[0].outpatient,DATA[1].outpatient,DATA[2].outpatient,DATA[3].outpatient,DATA[4].outpatient,DATA[5].outpatient,DATA[6].outpatient,DATA[7].outpatient,DATA[8].outpatient,DATA[9].outpatient ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: 'Medicare price',
         type: 'line',
         color: "#AE1B1F",
         data: $.map( [ 100,100,100,100,100,100,100,100,100,100 ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].system + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Relative inpatient price: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].inpatient + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Relative outpatient price: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].outpatient + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIFTH"></div>&nbsp; Medicare price: </td><td style="padding:2px; margin:2px;"><strong>100%</strong></td></tr>' +
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
