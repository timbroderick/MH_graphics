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
        categories: [ DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year,DATA[5].year,DATA[6].year,DATA[7].year,DATA[8].year,DATA[9].year ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: 'PERCENTAGE PRICE INCREASE FROM PREVIOUS YEAR'
        }
      },
      yAxis: {
        tickInterval: 1,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 4,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: null
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
        name: 'Hospital care',
        data: $.map( [ DATA[0].hosp,DATA[1].hosp,DATA[2].hosp,DATA[3].hosp,DATA[4].hosp,DATA[5].hosp,DATA[6].hosp,DATA[7].hosp,DATA[8].hosp,DATA[9].hosp ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Physician & clinical services',
        data: $.map( [ DATA[0].phys,DATA[1].phys,DATA[2].phys,DATA[3].phys,DATA[4].phys,DATA[5].phys,DATA[6].phys,DATA[7].phys,DATA[8].phys,DATA[9].phys ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Home health care',
        data: $.map( [ DATA[0].home,DATA[1].home,DATA[2].home,DATA[3].home,DATA[4].home,DATA[5].home,DATA[6].home,DATA[7].home,DATA[8].home,DATA[9].home ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Nursing home care',
        data: $.map( [ DATA[0].nurse,DATA[1].nurse,DATA[2].nurse,DATA[3].nurse,DATA[4].nurse,DATA[5].nurse,DATA[6].nurse,DATA[7].nurse,DATA[8].nurse,DATA[9].nurse ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Prescription drugs',
        data: $.map( [ DATA[0].drug,DATA[1].drug,DATA[2].drug,DATA[3].drug,DATA[4].drug,DATA[5].drug,DATA[6].drug,DATA[7].drug,DATA[8].drug,DATA[9].drug ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong><br><small>Percentage increase in price<br>from previous year</small></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; Hospital care: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].hosp + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar SECOND"></div>&nbsp; Physician: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].phys + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar THIRD"></div>&nbsp; Home health: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].home + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar FOURTH"></div>&nbsp; Nursing home: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].nurse + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIFTH"></div>&nbsp; Drugs: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].drug + '%</strong></td></tr>' +
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
