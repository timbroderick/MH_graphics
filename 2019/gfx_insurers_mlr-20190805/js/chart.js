
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var company = getCol(LIST, 'company');
var loss_ratio = getCol(LIST, 'loss_ratio');
var avg = getCol(LIST, 'avg');

$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 375,
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
        categories: company,
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 80,
        labels: {
          format: '{value:,.0f}'+'%'
        },
        title: {
          text: 'Loss ratio'
        }
      },
      legend: {
        enabled: true
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
            }
        }
      },
      series: [{
        name: 'Loss ratio',
        data: $.map( loss_ratio, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Average loss ratio of<br>comprehensive major<br>medical insurance plans',
        type: 'line',
        color: "#AE1B1F",
        data: $.map( avg, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  LIST[this.point.x].company + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Loss ratio: </td><td style="padding:2px; margin:2px;"><strong>' + LIST[this.point.x].loss_ratio + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIFTH"></div>&nbsp; Average loss ratio of<br>comprehensive major<br>medical insurance plans: </td><td style="padding:2px; margin:2px;"><strong><br><br>72.57%</strong></td></tr>' +
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
