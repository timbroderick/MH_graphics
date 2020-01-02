
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
var qui_tam = getCol(DATA, 'qui_tam');
var relator = getCol(DATA, 'relator');
var portion = getCol(DATA, 'portion');

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
        labels: {
          //staggerLines: 2,
          //rotation: 45,
          step: 5
        },
        title: {
          text: ''
        }
      },
      yAxis: {
        tickInterval: 50,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 550,
        labels: {
          format: '{value:,.0f}'
        },
        title: {
          text: 'NUMBER OF LAWSUITS'
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
        name: 'Qui tam lawsuits',
        color: '#37739A',
        states: {
                hover: {
                    color: '#AE1B1F'
                }
            },
        data: $.map( qui_tam, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Number of lawsuits: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].qui_tam + '</strong></td></tr>' +
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
          labels: {
            //staggerLines: 2,
            //rotation: 45,
            step: 5
          },
          title: {
            text: ''
          }
        },
        yAxis: {
          tickInterval: 500,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0,
          max: 3000,
          labels: {
            format: '$' + '{value:,.0f}'
          },
          title: {
            text: '$ IN MILLIONS'
          }
        },
        legend: {
          enabled: true
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
            stacking: 'normal'
          }
        },
        series: [{
          name: 'Total qui tam settlements',
          data: $.map( portion, function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: 'Share awarded to whistleblowers',
          data: $.map( relator, function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  DATA[this.point.x].year + ' settlements</strong></h5>' +
                  '<table style="width:100%;"><tbody>' +
                  '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Total: </td><td style="padding:2px; margin:2px;"><strong>$' + DATA[this.point.x].all_txt + ' million</strong></td></tr>' +
                  '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Share to<br>whistleblowers: </td><td style="padding:2px; margin:2px;"><br><strong>$' + DATA[this.point.x].relator_txt + ' million</strong></td></tr>' +
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
