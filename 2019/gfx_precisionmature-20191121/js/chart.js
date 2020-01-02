
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
var something = getCol(DATA, 'something');
var another_thing = getCol(DATA, 'another_thing');


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
        type: 'pie'
      },
      title: {
            text: null,
      },
      xAxis: {
        title: {
          text: null
        }
      },
      yAxis: {
        title: {
          text: null
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
            enabled: true,
            format: 'MATURITY<br>{point.name}: {y:,.0f}%'
            }
        }
      },
      series: [{
        name: 'Maturity',
        data: [{
          name: DATA[0].state,
          y: parseFloat( DATA[0].percent )
        },{
          name: DATA[1].state,
          y: parseFloat( DATA[1].percent )
        },{
          name: DATA[2].state,
          y: parseFloat( DATA[2].percent )
        },{
          name: DATA[3].state,
          y: parseFloat( DATA[3].percent )
        }]
      }],
       tooltip: {
         useHTML: true,
         formatter: function() {
           return '<small>' + this.series.name + '</small><br><p>' + this.point.name + ': <strong>' + this.point.y + '%</strong></p>';
         }
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
