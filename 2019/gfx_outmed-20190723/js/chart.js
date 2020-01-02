
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
var in_chg = getCol(DATA, 'in_chg');
var in_sum = getCol(DATA, 'in_sum');
var out_chg = getCol(DATA, 'out_chg');
var out_sum = getCol(DATA, 'out_sum');


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
        categories: state,
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 1,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: -1,
        max: 11,
        labels: {
          format: '{value:,.0f}'+'%'
        },
        title: {
          text: 'PERCENTAGE CHANGE<br>FROM PREVIOUS YEAR'
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
        name: 'Total Medicare inpatient revenue',
        data: $.map( in_chg, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Total Medicare outpatient revenue',
        data: $.map( out_chg, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong><br>' +
                '<small>Percentage change from ' + (parseFloat(DATA[this.point.x].state)-1) + '</small></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Inpatient change: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].in_chg + '%</strong></td></tr>' +
                '<tr style="background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Total revenue: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].in_sum + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Outpatient change: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].out_chg + '%</strong></td></tr>' +
                '<tr style="background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">Total revenue: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].out_sum + '</strong></td></tr>' +
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
