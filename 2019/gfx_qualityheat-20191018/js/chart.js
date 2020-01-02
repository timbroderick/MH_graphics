
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}



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
        type: 'heatmap'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: ['2005', '2010', '2015', '2018'],
        title: {
          text: 'YEAR'
        }
      },
      yAxis: {
        categories: ["Heart attack (or chest pain)","Heart failure","Pneumonia","Surgical infection prevention","Children's asthma care","Surgical care improvement project","Stroke care","Preventive care","Pregnancy and delivery care","Emergency department","Blood clot prevention and treatment","Colonoscopy care","Cataract surgery outcome","Cancer care","Sepsis care"],
        title: {
          text: null
        }
      },
      colorAxis: {
        min: 0,
        minColor: '#ffffff',
        maxColor: '#8c1943'
    },
    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 180
    },
      credits: {
          enabled: false
      },
      series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: [
          [0, 0, 8], [0, 1, 4], [0, 2, 6], [0, 3, 2], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 0], [0, 12, 0], [0, 13, 0], [0, 14, 0],
          [1, 0, 7], [1, 1, 4], [1, 2, 6], [1, 3, 8], [1, 4, 3], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 0], [1, 11, 0], [1, 12, 0], [1, 13, 0], [1, 14, 0],
          [2, 0, 9], [2, 1, 3], [2, 2, 1], [2, 3, 0], [2, 4, 3], [2, 5, 10], [2, 6, 8], [2, 7, 2], [2, 8, 1], [2, 9, 7], [2, 10, 6], [2, 11, 0], [2, 12, 0], [2, 13, 0], [2, 14, 0],
          [3, 0, 5], [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 2], [3, 8, 1], [3, 9, 8], [3, 10, 1], [3, 11, 2], [3, 12, 1], [3, 13, 1], [3, 14, 1]
        ],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function () {
            return '<h5><strong>' + this.series.xAxis.categories[this.point.x] + '</strong></h5>' +
            '<table style="width:100%;"><tbody>' +
            '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">' + this.series.yAxis.categories[this.point.y] + ': <strong>' + this.point.value + '</strong></td></tr>' +
            '</tbody></table>';
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
          type: 'bar'
        },
        title: {
              text: null,
        },
        xAxis: {
          categories: ['2005','2010','2015','2018'],
          title: {
            text: null
          }
        },
        yAxis: {
          tickInterval: 5,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0,
          max: 55,
          labels: {
            format: '{value:,.0f}'
          },
          title: {
            text: null
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
              enabled: true,
              format: '{y:,.0f}',
              align: 'right'
              }
          }
        },
        series: [{
          name: 'total',
          color: '#8c1943',
          data: $.map( [20,28,50,22], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  this.x + '</strong></h5>' +
                  '<table style="width:100%;"><tbody>' +
                  '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Total: </td><td style="padding:2px; margin:2px;"><strong>' + this.point.y + '</strong></td></tr>' +
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
