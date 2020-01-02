
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


      var chartexpgen = new Highcharts.Chart({
          chart: {
            renderTo: 'expgen',
            backgroundColor: '#fafafa',
            height: 250,
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
            categories: [ "Experienced","Did not experience" ],
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
            pie: {
                dataLabels: {
                    distance: -30,
                    format: '{y:,.1f}' + '%',
                    color: 'white'
                }
            }
          },
          series: [{
            name: 'Something',
            data: [
              {name:"Experienced",
              y:32.4,
              color:'#6a1240'},
              {name:"Did not<br>experience",
              y:67.6,
              color:'#cccccc'}
            ]
          }],
          tooltip: {
              crosshairs: true,
              useHTML: true,
              formatter: function() {
                    return '<h5>' + this.point.name + ': <strong>' +  this.y + '%</strong></h5>';
              },
          },
      });

      var chartwitgen = new Highcharts.Chart({
          chart: {
            renderTo: 'witgen',
            backgroundColor: '#fafafa',
            height: 250,
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
            categories: [ "Witnessed","Did not witness" ],
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
            pie: {
                dataLabels: {
                    distance: -30,
                    format: '{y:,.1f}' + '%',
                    color: 'white'
                }
            }
          },
          series: [{
            name: 'Something',
            data: [
              {name:"Witnessed",
              y:38.3,
              color:'#6a1240'},
              {name:"Did not<br>witness",
              y:61.7,
              color:'#cccccc'}
            ]
          }],
          tooltip: {
              crosshairs: true,
              useHTML: true,
              formatter: function() {
                    return '<h5>' + this.point.name + ': <strong>' +  this.y + '%</strong></h5>';
              },
          },
      });

      var chartexphar = new Highcharts.Chart({
          chart: {
            renderTo: 'exphar',
            backgroundColor: '#fafafa',
            height: 250,
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
            categories: [ "Experienced","Did not experience" ],
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
            pie: {
                dataLabels: {
                    distance: -30,
                    format: '{y:,.1f}' + '%',
                    color: 'white'
                }
            }
          },
          series: [{
            name: 'Something',
            data: [
              {name:"Experienced",
              y:26.4,
              color:'#6a1240'},
              {name:"Did not<br>experience",
              y:73.6,
              color:'#cccccc'}
            ]
          }],
          tooltip: {
              crosshairs: true,
              useHTML: true,
              formatter: function() {
                    return '<h5>' + this.point.name + ': <strong>' +  this.y + '%</strong></h5>';
              },
          },
      });


            var chartwithar = new Highcharts.Chart({
                chart: {
                  renderTo: 'withar',
                  backgroundColor: '#fafafa',
                  height: 250,
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
                  categories: [ "Witnessed","Did not witness" ],
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
                  pie: {
                      dataLabels: {
                          distance: -30,
                          format: '{y:,.1f}' + '%',
                          color: 'white'
                      }
                  }
                },
                series: [{
                  name: 'Something',
                  data: [
                    {name:"Witnessed",
                    y:32.6,
                    color:'#6a1240'},
                    {name:"Did not<br>witness",
                    y:67.4,
                    color:'#cccccc'}
                  ]
                }],
                tooltip: {
                    crosshairs: true,
                    useHTML: true,
                    formatter: function() {
                          return '<h5>' + this.point.name + ': <strong>' +  this.y + '%</strong></h5>';
                    },
                },
            });


                  var chartdone = new Highcharts.Chart({
                      chart: {
                        renderTo: 'done',
                        backgroundColor: '#fafafa',
                        height: 250,
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
                        categories: [ "Said nothing was done","Some action was taken" ],
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
                        pie: {
                            dataLabels: {
                                distance: -30,
                                format: '{y:,.1f}' + '%',
                                color: 'white'
                            }
                        }
                      },
                      series: [{
                        name: 'Something',
                        data: [
                          {name:"Said nothing<br>was done",
                          y:35,
                          color:'#6a1240'},
                          {name:"Some action<br>was taken",
                          y:65,
                          color:'#cccccc'}
                        ]
                      }],
                      tooltip: {
                          crosshairs: true,
                          useHTML: true,
                          formatter: function() {
                                return '<h5>' + this.point.name + ': <strong>' +  this.y + '%</strong></h5>';
                          },
                      },
                  });


                        var chartreport = new Highcharts.Chart({
                            chart: {
                              renderTo: 'report',
                              backgroundColor: '#fafafa',
                              height: 250,
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
                              categories: [ "Said they did not report it","Reported" ],
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
                              pie: {
                                  dataLabels: {
                                      distance: -30,
                                      format: '{y:,.1f}' + '%',
                                      color: 'white'
                                  }
                              }
                            },
                            series: [{
                              name: 'Something',
                              data: [
                                {name:"Did not<br>report",
                                y:11,
                                color:'#6a1240'},
                                {name:"Reported",
                                y:89,
                                color:'#cccccc'}
                              ]
                            }],
                            tooltip: {
                                crosshairs: true,
                                useHTML: true,
                                formatter: function() {
                                      return '<h5>' + this.point.name + ': <strong>' +  this.y + '%</strong></h5>';
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
