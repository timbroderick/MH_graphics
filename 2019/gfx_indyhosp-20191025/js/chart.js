
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
var idn_npr = getCol(DATA, 'idn_npr');
var indy_npr = getCol(DATA, 'indy_npr');
var idn_opexp = getCol(DATA, 'idn_opexp');
var indy_opexp = getCol(DATA, 'indy_opexp');


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
        tickInterval: 1,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 7,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: null
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
        name: 'System-owned',
        color: "#508ebc",
        data: $.map( idn_npr, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Independent',
        color: "#6d6e71",
        data: $.map( indy_npr, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; System-owned: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].idn_npr + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Independent: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].indy_npr + '%</strong></td></tr>' +
                '</table>';
          },
      },
  });


    var chartRate2 = new Highcharts.Chart({
        chart: {
          renderTo: 'graphic2',
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
          tickInterval: 1,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0,
          max: 7,
          labels: {
            format: '{value:,.0f}' + '%'
          },
          title: {
            text: null
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
          name: 'System-owned',
          color: "#508ebc",
          data: $.map( idn_opexp, function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: 'Independent',
          color: "#6d6e71",
          data: $.map( indy_opexp, function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
         }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                  '<table style="width:100%;"><tbody>' +
                  '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; System-owned: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].idn_opexp + '%</strong></td></tr>' +
                  '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Independent: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].indy_opexp + '%</strong></td></tr>' +
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
