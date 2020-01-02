
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var state = getCol(DATA, 'state');
var sp = getCol(DATA, 'sp');
var hfri = getCol(DATA, 'hfri');


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
        type: 'line'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: state,
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
        min: -5,
        max: 35,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: 'Percentage return, year'
        },
        plotLines: [
          {
            color: '#AE1B1F',
            value: 0,
            width: 1,
            zIndex: 100,
            dashStyle: 'solid'
          }]
      },
      legend: {
        reversed: true
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
        name: 'S&P 500 stock index<br>with dividends',
        data: $.map( sp, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'HFRI Fund Weighted<br>Composite Index',
        data: $.map( hfri, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; HFRI Fund Weighted<br>Composite Index: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].hfri + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; S&P 500 stock index<br>with dividends: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].sp + '%</strong></td></tr>' +
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
