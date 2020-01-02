
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
            type: 'pie'
          },
          title: {
                text: null,
          },
          xAxis: {
            categories: [ "Reluctant","Disagree" ],
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
                    distance: -30,
                    format: '{y:,.0f}' + '%',
                    color: 'white'
                },
                showInLegend: false
            }
          },
          series: [{
            name: 'Percentage',
            data: [{
              name: "Reluctant:",
              color: "#508ebc",
              y: parseFloat( 81 )
            },{
              name: "",
              color: "#3d505a",
              y: parseFloat( 19 )
            }]
          }],
          tooltip: {
              crosshairs: true,
              useHTML: true,
              formatter: function() {
                    return '<table style="width:100%;"><tbody>' +
                    '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">' + this.point.name + ' </td><td style="padding:2px; margin:2px;"><strong>' + this.point.y + '%</strong></td></tr>' +
                      '</table>';
              },
          },
      });


// ---------------------------


      var chartRate2 = new Highcharts.Chart({
          chart: {
            renderTo: 'graphic2',
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
            categories: [ "Agree","Disagree" ],
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
                    distance: -30,
                    format: '{y:,.0f}' + '%',
                    color: 'white'
                },
                showInLegend: false
            }
          },
          series: [{
            name: 'Percentage',
            data: [{
              name: "Agree:",
              color: "#508ebc",
              y: parseFloat( 83 )
            },{
              name: "",
              color: "#3d505a",
              y: parseFloat( 17 )
            }]
          }],
          tooltip: {
              crosshairs: true,
              useHTML: true,
              formatter: function() {
                    return '<table style="width:100%;"><tbody>' +
                    '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">' + this.point.name + ' </td><td style="padding:2px; margin:2px;"><strong>' + this.point.y + '%</strong></td></tr>' +
                      '</table>';
              },
          },
      });


      // ---------------------------


            var chartRate3 = new Highcharts.Chart({
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
                  categories: [ "More not<br>managed","Disagree" ],
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
                          distance: -30,
                          format: '{y:,.0f}' + '%',
                          color: 'white'
                      },
                      showInLegend: false
                  }
                },
                series: [{
                  name: 'Percentage',
                  data: [{
                    name: "More not<br>managed:",
                    color: "#508ebc",
                    y: parseFloat( 72 )
                  },{
                    name: "",
                    color: "#3d505a",
                    y: parseFloat( 28 )
                  }]
                }],
                tooltip: {
                    crosshairs: true,
                    useHTML: true,
                    formatter: function() {
                          return '<table style="width:100%;"><tbody>' +
                          '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">' + this.point.name + ' </td><td style="padding:2px; margin:2px;"><strong>' + this.point.y + '%</strong></td></tr>' +
                            '</table>';
                    },
                },
            });


                  // ---------------------------


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
                              categories: [ "New crisis","Disagree" ],
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
                                      distance: -30,
                                      format: '{y:,.0f}' + '%',
                                      color: 'white'
                                  },
                                  showInLegend: false
                              }
                            },
                            series: [{
                              name: 'Percentage',
                              data: [{
                                name: "New crisis:",
                                color: "#508ebc",
                                y: parseFloat( 62 )
                              },{
                                name: "",
                                color: "#3d505a",
                                y: parseFloat( 38 )
                              }]
                            }],
                            tooltip: {
                                crosshairs: true,
                                useHTML: true,
                                formatter: function() {
                                      return '<table style="width:100%;"><tbody>' +
                                      '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">' + this.point.name + ' </td><td style="padding:2px; margin:2px;"><strong>' + this.point.y + '%</strong></td></tr>' +
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
