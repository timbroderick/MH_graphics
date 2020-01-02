
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
var over4 = getCol(DATA, 'over4');
var stars_34 = getCol(DATA, 'stars_34');
var below3 = getCol(DATA, 'below3');
var over4_ct = getCol(DATA, 'over4_ct');
var stars_34_ct = getCol(DATA, 'stars_34_ct');
var below3_ct = getCol(DATA, 'below3_ct');
var stars3 = getCol(DATA, 'stars3');
var stars3_5 = getCol(DATA, 'stars3_5');
var stars3_ct = getCol(DATA, 'stars3_ct');
var stars3_5_ct = getCol(DATA, 'stars3_5_ct');
var stars4 = getCol(DATA, 'stars4');
var stars4_ct = getCol(DATA, 'stars4_ct');
var stars45 = getCol(DATA, 'stars45');
var stars45_ct = getCol(DATA, 'stars45_ct');



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
        type: 'area'
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
        tickInterval: 25,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 100,
        labels: {
          format: '{value:,.0f}'+'%'
        },
        title: {
          text: 'PERCENTAGE OF<br>TOTAL ENROLLMENT'
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
            format: '$' + '{y:,.0f}',
            align: 'right'
            },
          stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
        }
      },
      series: [{
        name: '4.5 stars<br>or more',
        //color: '#508ebc',
        data: $.map( stars45, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: '4 stars',
         //color: '#22366B',
         data: $.map( stars4, function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
         name: '3.5 stars',
         //color: '#f05236',
         data: $.map( stars3_5, function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: '3 stars',
          //color: '#FFCD67',
          data: $.map( stars3, function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
         },{
          name: 'Below 3 stars',
          //color: '#6D6E71',
          data: $.map( below3, function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
         }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong> <small>As percentage of total:</small></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"></td><td class="tdLEFT" style="padding:2px; margin:2px;"><strong>Enrollment</td><td style="padding:2px; margin:2px;">Contracts</td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; 4.5 or more</td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].stars45 + '%</strong></td><td style="padding:2px; margin:2px;">' + DATA[this.point.x].stars45_ct + '%</td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; 4 stars</td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].stars4 + '%</strong></td><td style="padding:2px; margin:2px;">' + DATA[this.point.x].stars4_ct + '%</td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; 3.5 stars</td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].stars3_5 + '%</strong></td><td style="padding:2px; margin:2px;">' + DATA[this.point.x].stars3_5_ct + '%</td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FOURTH"></div>&nbsp; 3 stars</td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].stars3 + '%</strong></td><td style="padding:2px; margin:2px;">' + DATA[this.point.x].stars3_ct + '%</td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIFTH"></div>&nbsp; Below 3 stars</td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].below3 + '%</strong></td><td style="padding:2px; margin:2px;">' + DATA[this.point.x].below3_ct + '%</td></tr>' +
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
