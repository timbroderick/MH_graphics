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
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state ],
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
          name: DATA[0].state,
          y: parseFloat( DATA[0].rank )
        },{
          name: DATA[1].state,
          y: parseFloat( DATA[1].rank )
        },{
          name: DATA[2].state,
          y: parseFloat( DATA[2].rank )
        },{
          name: DATA[3].state,
          y: parseFloat( DATA[3].rank )
        },{
          name: DATA[4].state,
          y: parseFloat( DATA[4].rank )
        }]
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].rank + '%</strong></td></tr>' +
                  '</table>';
          },
      },
  });



    var chartRate = new Highcharts.Chart({
        chart: {
          renderTo: 'graphic2',
          backgroundColor: '#fafafa',
          height: 370,
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
          categories: [ DATA2[0].state,DATA2[1].state,DATA2[2].state,DATA2[3].state,DATA2[4].state ],
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
            name: DATA2[0].state,
            y: parseFloat( DATA2[0].rank )
          },{
            name: DATA2[1].state,
            y: parseFloat( DATA2[1].rank )
          },{
            name: DATA2[2].state,
            y: parseFloat( DATA2[2].rank )
          },{
            name: DATA2[3].state,
            y: parseFloat( DATA2[3].rank )
          },{
            name: DATA2[4].state,
            y: parseFloat( DATA2[4].rank )
          }]
        }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  DATA2[this.point.x].state2 + '</strong></h5>' +
                  '<table style="width:100%;"><tbody>' +
                  '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA2[this.point.x].rank + '%</strong></td></tr>' +
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
          type: 'bar'
        },
        title: {
              text: null,
        },
        xAxis: {
          categories: [ DATA3[0].state,DATA3[1].state,DATA3[2].state,DATA3[3].state,DATA3[4].state,DATA3[5].state ],
          title: {
            text: null
          }
        },
        yAxis: {
          tickInterval: 10,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0,
          max: 80,
          title: {
            text: null
          },
          labels: {
            format: '{value:,.0f}' + "%"
          }
        },
        legend: {
          enabled: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
        },
        series: [{
          name: 'Percentage',
          data: [ {y:73.1, color:'#0067AC'},{y:53.9, color:'#b9e5fb'},{y:34.6, color:'#b9e5fb'},{y:30.8, color:'#b9e5fb'},{y:19.2, color:'#b9e5fb'},{y:26.9, color:'#b9e5fb'} ]
        }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  DATA3[this.point.x].state + '</strong></h5>' +
                  '<table style="width:100%;"><tbody>' +
                  '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA3[this.point.x].rank + '%</strong></td></tr>' +
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
            categories: [ DATA4[0].state,DATA4[1].state,DATA4[2].state,DATA4[3].state ],
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
              name: DATA4[0].state,
              y: parseFloat( DATA4[0].rank )
            },{
              name: DATA4[1].state,
              y: parseFloat( DATA4[1].rank )
            },{
              name: DATA4[2].state,
              y: parseFloat( DATA4[2].rank )
            },{
              name: DATA4[3].state,
              y: parseFloat( DATA4[3].rank )
            }]
          }],
          tooltip: {
              crosshairs: true,
              useHTML: true,
              formatter: function() {
                    return '<h5><strong>' +  DATA4[this.point.x].state2 + '</strong></h5>' +
                    '<table style="width:100%;"><tbody>' +
                    '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA4[this.point.x].rank + '%</strong></td></tr>' +
                      '</table>';
              },
          },
      });



        var chartRate = new Highcharts.Chart({
            chart: {
              renderTo: 'graphic5',
              backgroundColor: '#fafafa',
              height: 310,
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
              categories: [ DATA5[0].state,DATA5[1].state ],
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
                name: DATA5[0].state,
                y: parseFloat( DATA5[0].rank )
              },{
                name: DATA5[1].state,
                y: parseFloat( DATA5[1].rank )
              }]
            }],
            tooltip: {
                crosshairs: true,
                useHTML: true,
                formatter: function() {
                      return '<h5><strong>' +  DATA5[this.point.x].state + '</strong></h5>' +
                      '<table style="width:100%;"><tbody>' +
                      '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA5[this.point.x].rank + '%</strong></td></tr>' +
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
