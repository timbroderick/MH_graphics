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
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state,DATA[5].state,DATA[6].state ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: 'X AXIS TITLE'
        }
      },
      yAxis: {
        tickInterval: 250,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 2000,
        labels: {
          format: '$' + '{value:,.0f}'
        },
        title: {
          text: 'Y AXIS TITLE'
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
        name: 'Something',
        data: $.map( [ DATA[0].something,DATA[1].something,DATA[2].something,DATA[3].something,DATA[4].something,DATA[5].something,DATA[6].something ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Another thing',
        data: $.map( [ DATA[0].another_thing,DATA[1].another_thing,DATA[2].another_thing,DATA[3].another_thing,DATA[4].another_thing,DATA[5].another_thing,DATA[6].another_thing ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; Something: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>$' + DATA[this.point.x].something + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar SECOND"></div>&nbsp; Another<br>&nbsp;&nbsp;&nbsp;&nbsp;thing: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong><br>$' + DATA[this.point.x].another_thing_txt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;">Third thing: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].third_thing + '</strong></td></tr>' +
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
