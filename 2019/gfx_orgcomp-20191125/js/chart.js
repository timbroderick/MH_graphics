
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var place = getCol(DATA, 'place');
var totalw = getCol(DATA, 'totalw');
var totalm = getCol(DATA, 'totalm');


$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 450,
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
        categories: place,
        labels: {
          staggerLines: 2
        },
        title: {
          text: 'Organization'
        }
      },
      yAxis: {
        tickInterval: 250000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 1750000,
        labels: {
          format: '$' + '{value:,.0f}'
        },
        title: {
          text: 'Average Total* Compensation'
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
            }
        }
      },
      series: [{
       name: 'Top female executives',
       data: $.map( totalw, function(datavalue) {
         return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
     },{
        name: 'Top male executives',
        data: $.map( totalm, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>Average total*<br>compensation, ' +  DATA[this.point.x].place + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Top female<br>executives: </td><td style="padding:2px; margin:2px;"><strong><br>$' + DATA[this.point.x].totalw_txt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Top male<br>executives: </td><td style="padding:2px; margin:2px;"><strong><br>$' + DATA[this.point.x].totalm_txt + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"># women/men: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].women + '/' + DATA[this.point.x].men + '</strong></td></tr>' +
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
