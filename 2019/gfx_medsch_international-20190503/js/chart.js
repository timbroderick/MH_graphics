$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 300,
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
        categories: [ DATA[0].state,DATA[1].state ],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 500,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 7500,
        labels: {
          format: '{value:,.0f}'
        },
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
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
        name: 'International graduates',
        data: $.map( [ DATA[0].int,DATA[1].int ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: 'U.S. medical graduates',
         data: $.map( [ DATA[0].us,DATA[1].us ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Total 2018 positions: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].total + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">Fill rate: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].rate + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Percentage U.S.<br>medical graduates: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].perc + '%</strong></td></tr>' +
                '</table>';
          },
      },
  });

});

//Colors
//#0067AC
//#67B4A5
//#EBAB38
//#AE1B1F
//#3D505A
//#ABE1FA
//#CEE5B7
//#FFCE7B
//#DF896E
//#9D85BE
