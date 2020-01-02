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
        categories: [ DATA[0].state,DATA[1].state ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 1000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 10000,
        labels: {
          format: '$' + '{value:,.0f}'
        },
        title: {
          text: '<strong>Average Part A and B spending</strong><br><strong>in 2015</strong>'
        }
      },
      legend: {
        enabled: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: 'Something',
        data: [ {y:9632, color:'#0067AC'},{y:8109, color:'#67B4A5'}]
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Average spending<br>in 2015: </td><td style="padding:2px; margin:2px;"><strong><br>$' + DATA[this.point.x].spendtxt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">Number of people: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].people + '</strong></td></tr>' +
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
