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
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state,DATA[5].state,DATA[6].state,DATA[7].state,DATA[8].state,DATA[9].state,DATA[10].state,DATA[11].state,DATA[12].state,DATA[13].state,DATA[14].state,DATA[15].state,DATA[16].state,DATA[17].state,DATA[18].state,DATA[19].state,DATA[20].state,DATA[21].state,DATA[22].state,DATA[23].state,DATA[24].state ],
        labels: {
          step: 4
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 1,
        minorTickInterval: 'auto',
        overflow: 'justify',
        //min: 0,
        //max: 2000,
        labels: {
          format: '{value:,.0f}' + "%"
        },
        title: {
          text: 'PERCENTAGE CHANGE<br>FROM PREVIOUS YEAR'
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
        name: 'Medical care services',
        data: $.map( [ DATA[0].medcare,DATA[1].medcare,DATA[2].medcare,DATA[3].medcare,DATA[4].medcare,DATA[5].medcare,DATA[6].medcare,DATA[7].medcare,DATA[8].medcare,DATA[9].medcare,DATA[10].medcare,DATA[11].medcare,DATA[12].medcare,DATA[13].medcare,DATA[14].medcare,DATA[15].medcare,DATA[16].medcare,DATA[17].medcare,DATA[18].medcare,DATA[19].medcare,DATA[20].medcare,DATA[21].medcare,DATA[22].medcare,DATA[23].medcare,DATA[24].medcare ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Professional services',
        data: $.map( [ DATA[0].pro,DATA[1].pro,DATA[2].pro,DATA[3].pro,DATA[4].pro,DATA[5].pro,DATA[6].pro,DATA[7].pro,DATA[8].pro,DATA[9].pro,DATA[10].pro,DATA[11].pro,DATA[12].pro,DATA[13].pro,DATA[14].pro,DATA[15].pro,DATA[16].pro,DATA[17].pro,DATA[18].pro,DATA[19].pro,DATA[20].pro,DATA[21].pro,DATA[22].pro,DATA[23].pro,DATA[24].pro ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Hospital and related services',
        data: $.map( [ DATA[0].hosp,DATA[1].hosp,DATA[2].hosp,DATA[3].hosp,DATA[4].hosp,DATA[5].hosp,DATA[6].hosp,DATA[7].hosp,DATA[8].hosp,DATA[9].hosp,DATA[10].hosp,DATA[11].hosp,DATA[12].hosp,DATA[13].hosp,DATA[14].hosp,DATA[15].hosp,DATA[16].hosp,DATA[17].hosp,DATA[18].hosp,DATA[19].hosp,DATA[20].hosp,DATA[21].hosp,DATA[22].hosp,DATA[23].hosp,DATA[24].hosp ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Health insurance',
        color: "#AE1B1F",
        data: $.map( [ DATA[0].insure,DATA[1].insure,DATA[2].insure,DATA[3].insure,DATA[4].insure,DATA[5].insure,DATA[6].insure,DATA[7].insure,DATA[8].insure,DATA[9].insure,DATA[10].insure,DATA[11].insure,DATA[12].insure,DATA[13].insure,DATA[14].insure,DATA[15].insure,DATA[16].insure,DATA[17].insure,DATA[18].insure,DATA[19].insure,DATA[20].insure,DATA[21].insure,DATA[22].insure,DATA[23].insure,DATA[24].insure ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].mmyy + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Medical care services:</td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].medcare + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Professional services: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].pro + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Hospital and<br>related services:</td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].hosp + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIFTH"></div>&nbsp; Health Insurance: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].insure + '%</strong></td></tr>' +
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
