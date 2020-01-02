
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


        var chartRate1 = new Highcharts.Chart({
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
              categories:  [ DATA[0].q1,DATA[1].q1,DATA[2].q1,DATA[3].q1 ],
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
                  enabled: true,
                  format: '{y:,.1f}%',
                  align: 'right'
                  }
              }
            },
            series: [{
              name: "Now",
              color: '#508ebc',
              data: $.map( [DATA[0].a1,DATA[1].a1,DATA[2].a1,DATA[3].a1], function(datavalue) {
                return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
            }],
            tooltip: {
                crosshairs: true,
                useHTML: true,
                formatter: function() {
                      return '<table style="width:100%;"><tbody>' +
                      '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a1 + '%</strong></td></tr>' +
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
              type: 'bar'
            },
            title: {
                  text: null,
            },
            xAxis: {
              categories:  [ DATA[0].q2,DATA[1].q2,DATA[2].q2,DATA[3].q2,DATA[4].q2 ],
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
                  enabled: true,
                  format: '{y:,.1f}%',
                  align: 'right'
                  }
              }
            },
            series: [{
              color: '#508ebc',
              data: $.map( [DATA[0].a2,DATA[1].a2,DATA[2].a2,DATA[3].a2,DATA[4].a2], function(datavalue) {
                return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
            }],
            tooltip: {
                crosshairs: true,
                useHTML: true,
                formatter: function() {
                      return '<table style="width:100%;"><tbody>' +
                      '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a2 + '%</strong></td></tr>' +
                      '</table>';
                },
              },
            });

            var chartRate3 = new Highcharts.Chart({
                chart: {
                  renderTo: 'graphic3',
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
                  categories:  [ DATA[0].q3,DATA[1].q3,DATA[2].q3,DATA[3].q3,DATA[4].q3 ],
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
                      enabled: true,
                      format: '{y:,.1f}%',
                      align: 'right'
                      }
                  }
                },
                series: [{
                  color: '#508ebc',
                  data: $.map( [DATA[0].a3,DATA[1].a3,DATA[2].a3,DATA[3].a3,DATA[4].a3], function(datavalue) {
                    return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
                }],
                tooltip: {
                    crosshairs: true,
                    useHTML: true,
                    formatter: function() {
                          return '<table style="width:100%;"><tbody>' +
                          '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a3 + '%</strong></td></tr>' +
                          '</table>';
                    },
                  },
                });


              var chartRate4 = new Highcharts.Chart({
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
                    categories: [ DATA[0].q4,DATA[1].q4,DATA[2].q4,DATA[3].q4 ],
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
                    },{
                      name: DATA[3].q4,
                      color: "#7f919b",
                      y: parseFloat( DATA[3].a4 )
                    }]
                  }],
                  tooltip: {
                      crosshairs: true,
                      useHTML: true,
                      formatter: function() {
                            return '<table style="width:100%;"><tbody>' +
                            '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">' +  DATA[this.point.x].q4 + ': </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a4 + '%</strong></td></tr>' +
                              '</table>';
                      },
                  },
              });


              var chartRate5 = new Highcharts.Chart({
                  chart: {
                    renderTo: 'graphic5',
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
                    categories: [ DATA[0].q5,DATA[1].q5,DATA[2].q5 ],
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
                      name: DATA[0].q5,
                      color: "#508ebc",
                      y: parseFloat( DATA[0].a5 )
                    },{
                      name: DATA[1].q5,
                      color: "#3d505a",
                      y: parseFloat( DATA[1].a5 )
                    },{
                      name: DATA[2].q5,
                      color: "#b4c8df",
                      y: parseFloat( DATA[2].a5 )
                    }]
                  }],
                  tooltip: {
                      crosshairs: true,
                      useHTML: true,
                      formatter: function() {
                            return '<table style="width:100%;"><tbody>' +
                            '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">' +  DATA[this.point.x].q5 + ': </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a5 + '%</strong></td></tr>' +
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
