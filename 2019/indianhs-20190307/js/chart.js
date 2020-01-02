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
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state,DATA[5].state,DATA[6].state,DATA[7].state ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: 'INDIAN SERVICE AREAS'
        }
      },
      yAxis: {
        tickInterval: 100,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 1600,
        labels: {
          format: '{value:,.0f}'
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
          dataLabels: {
            enabled: false,
            format: '$' + '{y:,.0f}',
            align: 'right'
            },
          stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
        }
      },
      series: [{
        name: 'Vacancies',
        data: $.map( [ DATA[0].vaca,DATA[1].vaca,DATA[2].vaca,DATA[3].vaca,DATA[4].vaca,DATA[5].vaca,DATA[6].vaca,DATA[7].vaca ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Filled positions',
        data: $.map( [ DATA[0].fill,DATA[1].fill,DATA[2].fill,DATA[3].fill,DATA[4].fill,DATA[5].fill,DATA[6].fill,DATA[7].fill ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; Vacancies: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].vaca + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;">As percentage<br>of total positions: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong><br>' + DATA[this.point.x].perc + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar SECOND"></div>&nbsp; Filled postions: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].fill + '</strong></td></tr>' +
                '</table>';
          },
      },
  });


    var chartRate = new Highcharts.Chart({
        chart: {
          renderTo: 'graphic2',
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
          categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state,DATA[5].state,DATA[6].state,DATA[7].state ],
          labels: {
            staggerLines: 2
          },
          title: {
            text: 'INDIAN SERVICE AREAS'
          }
        },
        yAxis: {
          tickInterval: 50,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0,
          max: 300,
          labels: {
            format: '{value:,.0f}'
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
            dataLabels: {
              enabled: false,
              format: '$' + '{y:,.0f}',
              align: 'right'
              },
            stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
          }
        },
        series: [{
          name: 'Physician vacancies',
          color: '#AE1B1F',
          data: $.map( [ DATA[0].ph_vaca,DATA[1].ph_vaca,DATA[2].ph_vaca,DATA[3].ph_vaca,DATA[4].ph_vaca,DATA[5].ph_vaca,DATA[6].ph_vaca,DATA[7].vaca ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: 'Filled physician positions',
          color: '#EBAB38',
          data: $.map( [ DATA[0].ph_fill,DATA[1].ph_fill,DATA[2].ph_fill,DATA[3].ph_fill,DATA[4].ph_fill,DATA[5].ph_fill,DATA[6].ph_fill,DATA[7].ph_fill ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
         }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                  '<table style="width:100%;"><tbody>' +
                  '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIFTH"></div>&nbsp; Physician vacancies: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].ph_vaca + '</strong></td></tr>' +
                  '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;">As percentage<br>of physician positions: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong><br>' + DATA[this.point.x].ph_perc + '%</strong></td></tr>' +
                  '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar THIRD"></div>&nbsp; Filled physician<br>postions: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong><br>' + DATA[this.point.x].ph_fill + '</strong></td></tr>' +
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