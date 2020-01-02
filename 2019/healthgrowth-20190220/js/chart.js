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
        categories: [ DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year,DATA[5].year ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        },
        plotBands: [{
            from: 2.5,
            to: 5.5,
            color: '#e1e1e1',
            zIndex: 0
          }],
        plotLines: [{
              color: '#bbb',
              value: 0.5,
              width: 1,
              zIndex: 1//,
              //dashStyle: 'dot'
          }]
      },
      yAxis: {
        tickInterval: 1,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        //max: 2000,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: '<strong>PERCENTAGE INCREASE</strong>'
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
        name: 'Total national<br>health expenditures',
        data: $.map( [ DATA[0].total,DATA[1].total,DATA[2].total,DATA[3].total,DATA[4].total,DATA[5].total ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Hospital care',
        data: $.map( [ DATA[0].hosp,DATA[1].hosp,DATA[2].hosp,DATA[3].hosp,DATA[4].hosp,DATA[5].hosp ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: 'Prescription drugs',
         data: $.map( [ DATA[0].drugs,DATA[1].drugs,DATA[2].drugs,DATA[3].drugs,DATA[4].drugs,DATA[5].drugs ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong><br><small>Percentage increase in spending<br>from previous year</small></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; Total national<br>health expenditures: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong><br>' + DATA[this.point.x].total + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar SECOND"></div>&nbsp; Hospital care: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].hosp + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar THIRD"></div>&nbsp; Prescription drugs: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].drugs + '%</strong></td></tr>' +
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
