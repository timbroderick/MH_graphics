
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var predict = getCol(DATA, 'predict');
var outcome = getCol(DATA, 'outcome');
var boutcome = getCol(DATA, 'boutcome');


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
        categories: predict,
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 30,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: 'PERCENTAGE OF BLACK PATIENTS<br>IN HIGHEST-RISK GROUP'
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
            enabled: false,
            format: '$' + '{y:,.0f}',
            align: 'right'
            }
        }
      },
      series: [{
        name: '% for all black patients',
        color: "#508ebc",
        data: $.map( boutcome, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp;<strong>' + DATA[this.point.x].boutcome + '%</strong> of patients<br>in the highest-risk<br>group are black.</td></tr>' +
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
