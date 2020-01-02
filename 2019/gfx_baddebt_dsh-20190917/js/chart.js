
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var hospital = getCol(DATA, 'hospital');
var all = getCol(DATA, 'all');
var dsh = getCol(DATA, 'dsh');


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
        categories: hospital,
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 2,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 16,
        labels: {
          format: '{value:,.0f}'+'%'
        },
        title: {
          text: 'Total bad-debt expense<br>as percentage of net patient revenue'
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
          dataLabels: {
            enabled: false,
            format: '{y:,.0f}',
            align: 'right'
            }
        }
      },
      series: [{
        name: 'All',
        data: $.map( all, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Disproportionate-<br>share hospitals',
        color: '#3d505a',
        data: $.map( dsh, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].hospital + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; All: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].all + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; DSH: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].dsh + '%</strong></td></tr>' +
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
