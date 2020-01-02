
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var year = getCol(DATA, 'year');
var pprivate = getCol(DATA, 'pprivate');
var medicare = getCol(DATA, 'medicare');
var medicaid = getCol(DATA, 'medicaid');



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
        categories: year,
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
        min: 0,
        max: 8,
        labels: {
          format: '{value:,.0f}%'
        },
        title: {
          text: 'Annual growth'
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
          dataLabels: {
            enabled: false,
            format: '$' + '{y:,.0f}',
            align: 'right'
            }
        }
      },
      series: [{
        name: 'Medicare',
        data: $.map( medicare, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: 'Medicaid',
          data: $.map( medicaid, function(datavalue) {
              return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
          },{
        name: 'Private health insurance',
        data: $.map( pprivate, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Private health<br>insurance: </td><td style="padding:2px; margin:2px;"><br><strong>' + DATA[this.point.x].pprivate + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Medicare: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].medicare + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Medicaid: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].medicaid + '%</strong></td></tr>' +
                '</table>';
          },
      },
  });

});

// mh schemes
//#237a82 - bluegreen
//#99c2cb - bluegreen lite
//#de6427 - orange
//#fbc854 - orange lite
//#5e152d - deep purple
//#ae1b1f - red
//#508ebc - News blue
//#3d505a - News dark gray
//#b4c8df - News light blue
//#7f919b - News light gray
//#006aa6 - News darker blue
//#22366B - Darkest blue

//#237a82 #99c2cb #de6427 #fbc854 #5e152d #ae1b1f #508ebc #3d505a #b4c8df #7f919b #006aa6 #22366B

//previous
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
