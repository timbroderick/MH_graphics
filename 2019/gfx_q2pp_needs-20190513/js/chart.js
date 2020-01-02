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
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 1,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        title: {
          text: 'AVERAGE RANK'
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
        name: 'Average rank',
        data: [ {y:1.72, color:'#0067AC'},{y:2.38, color:'#b9e5fb'},{y:4.08, color:'#b9e5fb'},{y:4.35, color:'#b9e5fb'},{y:4.85, color:'#b9e5fb'},{y:5.15, color:'#b9e5fb'},{y:5.33, color:'#b9e5fb'} ]
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Average rank: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].rank + '</strong></td></tr>' +
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
          categories: [ DATA2[0].state,DATA2[1].state,DATA2[2].state,DATA2[3].state,DATA2[4].state,DATA2[5].state,DATA2[6].state ],
          title: {
            text: null
          }
        },
        yAxis: {
          tickInterval: 1,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0,
          title: {
            text: 'AVERAGE RANK'
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
          name: 'Average rank',
          data: [ {y:1.96, color:'#0067AC'},{y:3.12, color:'#b9e5fb'},{y:3.20, color:'#b9e5fb'},{y:4.04, color:'#b9e5fb'},{y:4.12, color:'#b9e5fb'},{y:5.52, color:'#b9e5fb'},{y:6.04, color:'#b9e5fb'} ]
        }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  DATA2[this.point.x].state + '</strong></h5>' +
                  '<table style="width:100%;"><tbody>' +
                  '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Average rank: </td><td style="padding:2px; margin:2px;"><strong>' + DATA2[this.point.x].rank + '</strong></td></tr>' +
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
