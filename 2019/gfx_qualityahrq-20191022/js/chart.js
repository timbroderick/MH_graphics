
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}


$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });

      Highcharts.wrap(Highcharts.Axis.prototype, 'getPlotLinePath', function(proceed) {
          var path = proceed.apply(this, Array.prototype.slice.call(arguments, 1));
          if (path) {
              path.flat = false;
          }
          return path;
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
        categories: ['2014','2015','2016','2017*'],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 70,
        max: 110,
        title: {
          text: null
        },
        plotLines: [
          {
            color: '#AE1B1F',
            value: 79,
            width: 1,
            dashStyle: 'solid',
            label: {
              text: '2019 GOAL: 79 PER 1,000'
            },
            zIndex: 100
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
            enabled: true,
            format: '{y:,.0f}',
            align: 'right'
          }
        }
      },
      series: [{
        name: 'HACs per 1,000',
        data: $.map( [98.7,92.3,87.6,85.9], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  this.x + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td style="padding:2px; margin:2px;"><strong>' + this.point.y + '</strong> per 1,000 discharges</td></tr>' +
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
