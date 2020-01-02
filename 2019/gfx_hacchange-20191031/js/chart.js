
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var hacs = getCol(DATA, 'hacs');
var change = getCol(DATA, 'change');
var costs = getCol(DATA, 'costs');
var deaths = getCol(DATA, 'deaths');


$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 450,
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
        categories: hacs,
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 500,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: -3500,
        max: 2000,
        labels: {
          format: '$' + '{value:,.0f}'
        },
        title: {
          text: '($ IN MILLIONS)'
        },
        plotLines: [
          {
            color: 'black',
            value: 0,
            width: 1,
            zIndex: 100,
            dashStyle: 'solid'
          }]
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: false,
            format: '{y:,.0f}',
            align: 'right'
            }
        }
      },
      series: [{
        name: 'Estimated savings',
        data: [ {y:1720, color:'#6d6e71'},{y:170, color:'#6d6e71'},
        {y:0, color:'#7F919B'},{y:-10, color:'#ae1b1f'},{y:-290, color:'#ae1b1f'},
        {y:-390, color:'#ae1b1f'},{y:-420, color:'#ae1b1f'},{y:-920, color:'#ae1b1f'},
        {y:-1100, color:'#ae1b1f'},{y:-3130, color:'#ae1b1f'},{y:-3360, color:'#ae1b1f'}]
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].hacs + '</strong><br><small>Estimated change in ...</small></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">... costs: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].costs_txt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">... deaths: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].deaths + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">... number: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].change + '</strong></td></tr>' +
                '</table>';
          },
      },
  });

});

//Current
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

//Mashup
//#508ebc - News blue
//#6D6E71 - News gray
//#f05236 - Zazou orange
//#FFCD67 - Gold
//#22366B - Darkest blue
//#ae1b1f - News red
//#006aa6 - News darker blue
//#b4c8df - News light blue
//#3d505a - News dark gray
//#7f919b - News light gray
//#6a1240 - Conf deep purple

//MHBlues
//#508ebc - News blue
//#3d505a - News dark gray
//#b4c8df - News light blue
//#7f919b - News light gray
//#006aa6 - News darker blue
