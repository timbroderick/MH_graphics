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
        categories: [ DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 10000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        //max: 2000,
        labels: {
          format: '{value:,.0f}'
        },
        title: {
          text: 'ENROLLEES'
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
        name: 'Medicare-Medicaid plans',
        data: $.map( [ DATA[0].mmp_enroll,DATA[1].mmp_enroll,DATA[2].mmp_enroll,DATA[3].mmp_enroll,DATA[4].mmp_enroll ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Dual-eligible special needs plans',
        data: $.map( [ DATA[0].dsnp_enroll,DATA[1].dsnp_enroll,DATA[2].dsnp_enroll,DATA[3].dsnp_enroll,DATA[4].dsnp_enroll ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: '"Look-alike" Medicare Advantage plans',
        data: $.map( [ DATA[0].llma_enroll,DATA[1].llma_enroll,DATA[2].llma_enroll,DATA[3].llma_enroll,DATA[4].llma_enroll ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><small>Plan </small></td><td style="padding:2px; margin:2px;"><small><strong>Number</strong></small></td><td style="padding:2px; margin:2px;"><small><strong>&nbsp; Enrollment</strong></small></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Medicare-<br>Medicaid: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].mmp_plans + '</strong></td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].mmp_enrolltxt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Dual-eligible<br>special needs: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].dsnp_plans + '</strong></td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].dsnp_enrolltxt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; "Look-alike"<br>Medicare Advantage </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].llma_plans + '</strong></td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].llma_enrolltxt + '</strong></td></tr>' +
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
