
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
var gen_bn = getCol(DATA, 'gen_bn');
var gen_b = getCol(DATA, 'gen_b');
var brand_bn = getCol(DATA, 'brand_bn');


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
        categories: year,
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 100,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: 'Percentage of plans requiring prior authorization'
        }
      },
      credits: {
          enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: false,
            format: '{y:,.0f}' + '%',
            align: 'right'
            }        }
      },
      series: [{
        name: 'Generic<br>buprenorphine-<br>naloxone',
        data: $.map( gen_bn, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Generic<br>buprenorphine',
        data: $.map( gen_b, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: 'Brand-name<br>buprenorphine-<br>naloxone',
         data: $.map( brand_bn, function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Generic<br>buprenorphine-<br>naloxone: </td><td style="padding:2px; margin:2px;"><br><br><strong>' + DATA[this.point.x].gen_bn + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Generic<br>buprenorphine: </td><td style="padding:2px; margin:2px;"><br><strong>' + DATA[this.point.x].gen_b + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Brand-name<br>buprenorphine-<br>naloxone: </td><td style="padding:2px; margin:2px;"><br><br><strong>' + DATA[this.point.x].brand_bn + '%</strong></td></tr>' +
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
