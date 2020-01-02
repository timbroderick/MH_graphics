
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var month = getCol(DATA, 'month');
var percent = getCol(DATA, 'percent');


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
        polar: true
      },
      pane: {
        startAngle: 0,
        endAngle: 360
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: month,
        tickInterval: 1,
        min: 0,
        max: 12,
        labels: {
            format: '{value}°'
        }
      },
      yAxis: {
        //tickInterval: 250,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 70,
        labels: {
          format: '{value:,.0f}'
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
            pointStart: 0,
            pointInterval: 1
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
      },
      series: [{
        name: 'Percent',
        type: 'column',
        data: $.map( percent, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].month + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Something: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].percent + '%</strong></td></tr>' +
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
