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
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state,DATA[5].state,DATA[6].state,DATA[7].state,DATA[8].state,DATA[9].state,DATA[10].state ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 0.5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 3,
        labels: {
          format: '{value:,.0f}' + "%"
        },
        title: {
          text: 'Percentage of all<br>medical claim lines'
        }
      },
      legend: {
        reversed: false
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
        name: 'Mental health',
        data: $.map( [ DATA[0].mental,DATA[1].mental,DATA[2].mental,DATA[3].mental,DATA[4].mental,DATA[5].mental,DATA[6].mental,DATA[7].mental,DATA[8].mental,DATA[9].mental,DATA[10].mental ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Substance abuse<br>and/or dependence',
        data: $.map( [ DATA[0].subst,DATA[1].subst,DATA[2].subst,DATA[3].subst,DATA[4].subst,DATA[5].subst,DATA[6].subst,DATA[7].subst,DATA[8].subst,DATA[9].subst,DATA[10].subst ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Total behavioral health: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].behave + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Mental health: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].mental + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Substance abuse<br>and/or dependence: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].subst + '%</strong></td></tr>' +
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
