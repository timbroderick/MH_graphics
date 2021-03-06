
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
var any = getCol(DATA, 'any');
var other = getCol(DATA, 'other');
var common = getCol(DATA, 'common');
var heroin = getCol(DATA, 'heroin');


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
        tickInterval: 5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 15,
        labels: {
          format: '{value:,.0f}'
        },
        title: {
          text: 'Death rates per 100,000'
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
        name: 'Any opioid',
        color: '#508ebc',
        data: $.map( any, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Other synthetic opioids*',
        color: '#6D6E71',
        data: $.map( other, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: 'Commonly prescribed opioids**',
         color: '#f05236',
         data: $.map( common, function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: 'Heroin',
          color: '#FFCD67',
          data: $.map( heroin, function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
         }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Any opioid </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].any + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Other<br>synthetic opioids* </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].other + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Commonly<br>prescribed opioids** </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].common + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FOURTH"></div>&nbsp; Heroin: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].heroin + '</strong></td></tr>' +
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
