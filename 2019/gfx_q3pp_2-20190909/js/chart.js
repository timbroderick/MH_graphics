
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
        renderTo: 'graphic1',
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
        categories:  [ DATA[0].q1,DATA[1].q1,DATA[2].q1,DATA[3].q1,DATA[4].q1 ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 50,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: 'Percentage'
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
            }
        }
      },
      series: [{
        name: "Now",
        color: '#3d505a',
        data: $.map( [DATA[0].a1a,DATA[1].a1a,DATA[2].a1a,DATA[3].a1a,DATA[4].a1a], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: "In 3-5 years",
        color:'#508ebc',
        data:  $.map( [DATA[0].a1b,DATA[1].a1b,DATA[2].a1b,DATA[3].a1b,DATA[4].a1b], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].q1 + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Now: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a1a + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; In 3-5 years: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a1b + '%</strong></td></tr>' +
                '</table>';
          },
      },
  });

  var chartRate = new Highcharts.Chart({
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
        categories:  [ DATA[0].q2,DATA[1].q2,DATA[2].q2,DATA[3].q2,DATA[4].q2,DATA[5].q2 ],
        labels: {
          staggerLines: 2
        },
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
          text: 'Percentage'
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
        color: '#508ebc',
        data: $.map( [DATA[0].a2,DATA[1].a2,DATA[2].a2,DATA[3].a2,DATA[4].a2,DATA[5].a2], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].q2 + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a2 + '%</strong></td></tr>' +
                '</table>';
          },
        },
      });

        var chartRate = new Highcharts.Chart({
            chart: {
              renderTo: 'graphic3',
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
              categories: [ DATA[0].q3,DATA[1].q3 ],
              title: {
                text: null
              }
            },
            yAxis: {
              tickInterval: 10,
              minorTickInterval: 'auto',
              overflow: 'justify',
              title: {
                text: null
              }
            },
            credits: {
              enabled: false
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
              }
            },
            series: [{
              name: 'Percentage',
              data: [{
                name: DATA[0].q3,
                color: "#508ebc",
                y: parseFloat( DATA[0].a3 )
              },{
                name: DATA[1].q3,
                color: "#3d505a",
                y: parseFloat( DATA[1].a3 )
              }]
            }],
            tooltip: {
                crosshairs: true,
                useHTML: true,
                formatter: function() {
                      return '<h5><strong>' +  DATA[this.point.x].q3 + '</strong></h5>' +
                      '<table style="width:100%;"><tbody>' +
                      '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a3 + '%</strong></td></tr>' +
                        '</table>';
                },
            },
        });


        var chartRate = new Highcharts.Chart({
            chart: {
              renderTo: 'graphic4',
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
              categories: [ DATA[0].q4,DATA[1].q4 ],
              title: {
                text: null
              }
            },
            yAxis: {
              tickInterval: 10,
              minorTickInterval: 'auto',
              overflow: 'justify',
              title: {
                text: null
              }
            },
            credits: {
              enabled: false
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
              }
            },
            series: [{
              name: 'Percentage',
              data: [{
                name: DATA[0].q4,
                color: "#508ebc",
                y: parseFloat( DATA[0].a4 )
              },{
                name: DATA[1].q4,
                color: "#3d505a",
                y: parseFloat( DATA[1].a4 )
              },{
                name: DATA[2].q4,
                color: "#b4c8df",
                y: parseFloat( DATA[2].a4 )
              }]
            }],
            tooltip: {
                crosshairs: true,
                useHTML: true,
                formatter: function() {
                      return '<h5><strong>' +  DATA[this.point.x].q4 + '</strong></h5>' +
                      '<table style="width:100%;"><tbody>' +
                      '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a4 + '%</strong></td></tr>' +
                        '</table>';
                },
            },
        });


          var chartRate = new Highcharts.Chart({
              chart: {
                renderTo: 'graphic5',
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
                categories:  [ DATA[0].q5,DATA[1].q5,DATA[2].q5,DATA[3].q5 ],
                labels: {
                  staggerLines: 2
                },
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
                  text: 'Percentage'
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
                color: '#508ebc',
                data: $.map( [DATA[0].a5,DATA[1].a5,DATA[2].a5,DATA[3].a5], function(datavalue) {
                  return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
              }],
              tooltip: {
                  crosshairs: true,
                  useHTML: true,
                  formatter: function() {
                        return '<h5><strong>' +  DATA[this.point.x].q5 + '</strong></h5>' +
                        '<table style="width:100%;"><tbody>' +
                        '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a5 + '%</strong></td></tr>' +
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
