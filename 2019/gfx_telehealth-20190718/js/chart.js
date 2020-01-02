
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
var provider = getCol(DATA, 'provider');
var patient1 = getCol(DATA, 'patient1');
var patient2 = getCol(DATA, 'patient2');
var physician = getCol(DATA, 'physician');


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
        type: 'area'
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
        tickInterval: 0.05,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 0.15,
        labels: {
          format: '{value:,.2f}' + '%'
        },
        title: {
          text: 'Y AXIS TITLE'
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
            format: '{y:,.3f}' + '%',
            align: 'center'
            },
          stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
        }
      },
      series: [{
        name: 'Provider to provider',
        data: $.map( provider, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Provider to patient,<br>non-hospital based',
        data: $.map( patient1, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Provider to patient,<br>discharge',
        data: $.map( patient2, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Physician to patient,<br>ER/inpatient',
        data: $.map( physician, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Provider to provider: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].provider + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Provider to patient,<br>non-hospital based: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].patient1 + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Provider to patient,<br>discharge: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].patient2 + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FOURTH"></div>&nbsp; Physician to patient,<br>ER/inpatient: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].physician + '%</strong></td></tr>' +
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
