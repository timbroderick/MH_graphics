
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var sector = getCol(DATA, 'Sector');
var margin = getCol(DATA, 'margin');


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
        categories: sector,
        labels: {
          staggerLines: 2
        },
        title: {
          text: 'SECTOR'
        }
      },
      yAxis: {
        tickInterval: 2,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 20,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: 'Cumulative profit margin'
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
            format: '{y:,.1f}' + "%",
            align: 'center'
            }
        }
      },
      series: [{
        name: 'margin',
        data: $.map( margin, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].Sector + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Margin: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].margin + '%</strong></td></tr>' +
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
