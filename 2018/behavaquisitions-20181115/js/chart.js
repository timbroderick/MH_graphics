

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 300,
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        type: 'line'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018*"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null,
            }
      },
      yAxis: {
        tickInterval: 5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'Deals closed'
              }
      },
      legend: {
        enabled: false
      },
      credits: {
          enabled: false
      },
      series: [{
          name: ' acquisitions',
          data: [ {
            y : parseFloat(DATA[0].deals),
            more : DATA[0].value
          },{
            y : parseFloat(DATA[1].deals),
            more : DATA[1].value
          },{
            y : parseFloat(DATA[2].deals),
            more : DATA[2].value
          },{
            y : parseFloat(DATA[3].deals),
            more : DATA[3].value
          },{
            y : parseFloat(DATA[4].deals),
            more : DATA[4].value
          },{
            y : parseFloat(DATA[5].deals),
            more : DATA[5].value
          },{
            y : parseFloat(DATA[6].deals),
            more : DATA[6].value
          },{
            y : parseFloat(DATA[7].deals),
            more : DATA[7].value
          },{
            y : parseFloat(DATA[8].deals),
            more : DATA[8].value
          },{
            y : parseFloat(DATA[9].deals),
            more : DATA[9].value
          },{
            y : parseFloat(DATA[10].deals),
            more : DATA[10].value
          } ]
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' + this.x +  this.series.name + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><strong># of deals closed: </strong></td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + this.y + '</strong></td></tr></td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;">Deal value:<br>(in $ millions) </td><td style="padding:2px; margin:2px; background-color: #fff;">' + this.point.more + '</td></tr></table>';
      },
    },
  });


    var chartdeals = new Highcharts.Chart({
        chart: {
          renderTo: 'graphic1',
          backgroundColor: '#fafafa',
          height: 300,
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
          categories: ["2009","2010","2011","2012","2013","2014","2015","2016","2017","2018*"],
                labels: {
                  staggerLines: 2
              },
              title: {
                  text: null,
              }
        },
        yAxis: {
          tickInterval: 50,
          minorTickInterval: 'auto',
          overflow: 'justify',
          labels: {
                  formatter: function () {
                      return '$' + this.value;
                  }
              },
          min: 0,
                title: {
                    text: 'Deal value ($ in millions)'
                }
        },
        legend: {
          enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: ' acquisitions',
            data: [ {
              more : parseFloat(DATA[1].deals),
              y : parseFloat(DATA[1].value1)
            },{
              more : parseFloat(DATA[2].deals),
              y : parseFloat(DATA[2].value1)
            },{
              more : parseFloat(DATA[3].deals),
              y : parseFloat(DATA[3].value1)
            },{
              more : parseFloat(DATA[4].deals),
              y : parseFloat(DATA[4].value1)
            },{
              more : parseFloat(DATA[5].deals),
              y : parseFloat(DATA[5].value1)
            },{
              more : parseFloat(DATA[6].deals),
              y : parseFloat(DATA[6].value1)
            },{
              more : parseFloat(DATA[7].deals),
              y : parseFloat(DATA[7].value1)
            },{
              more : parseFloat(DATA[8].deals),
              y : parseFloat(DATA[8].value1)
            },{
              more : parseFloat(DATA[9].deals),
              y : parseFloat(DATA[9].value1)
            },{
              more : parseFloat(DATA[10].deals),
              y : parseFloat(DATA[10].value1)
            } ]
         }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' + this.x +  this.series.name + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><strong>Deal value:<br>(in $ millions)</strong></td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>$' + this.y + ' million</strong></td></tr></td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"># of deals closed: </td><td style="padding:2px; margin:2px; background-color: #fff;">' + this.point.more + '</td></tr></table>';
        },
      },
    });

//});
