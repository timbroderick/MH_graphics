
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var length = getCol(DATA, 'length');
var percent = getCol(DATA, 'percent');


$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic1',
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
        categories: length,
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 50,
        labels: {
          format: '{value:,.0f}'+'%'
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
          dataLabels: {
            enabled: true,
            format: '{y:,.1f}'+'%',
            align: 'left'
            }
          }
      },
      series: [{
        name: 'Percentage',
        color: '#6a1240',
        data: $.map( percent, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5>' +  DATA[this.point.x].length + ': <strong>' +  DATA[this.point.x].percent + '%</strong></h5>';
          },
      },
  });

  var charttwo = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic2',
        backgroundColor: '#fafafa',
        height: 200,
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
        categories: [ "Organization's<br>leadership team","Organization's<br>board of directors" ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 50,
        labels: {
          format: '{value:,.0f}'+'%'
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
          dataLabels: {
            enabled: true,
            format: '{y:,.1f}'+'%',
            align: 'left'
            }
          }
      },
      series: [{
        name: 'Percentage',
        color: '#6a1240',
        data: [43.42,30.98]
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5>Estimated percentage<br>of women leaders: <strong>' +  this.y + '%</strong></h5>';
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
