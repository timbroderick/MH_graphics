console.log(DATA)

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 400,
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
        categories: ["2016","2017","2018","2019"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'YEAR'
            }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'PERCENT OF ENROLLEES'
              }
      },
      legend: {
        reversed: false
      },
      credits: {
          enabled: false
      },
      series: [{
        name: '4 or<br>more stars',
        data: [ {
          y : parseFloat(DATA[0].weight2016),
          more : DATA[0].percent2016
        },{
          y : parseFloat(DATA[0].weight2017),
          more : DATA[0].percent2017
        },{
          y : parseFloat(DATA[0].weight2018),
          more : DATA[0].percent2018
        },{
          y : parseFloat(DATA[0].weight2019),
          more : DATA[0].percent2019
        }]
      }, {
        name: '3.5 stars',
        data: [ {
          y : parseFloat(DATA[1].weight2016),
          more : DATA[1].percent2016
        },{
          y : parseFloat(DATA[1].weight2017),
          more : DATA[1].percent2017
        },{
          y : parseFloat(DATA[0].weight2018),
          more : DATA[1].percent2018
        },{
          y : parseFloat(DATA[1].weight2019),
          more : DATA[1].percent2019
        } ]
      }, {
        name: '3 stars',
        data: [ {
          y : parseFloat(DATA[2].weight2016),
          more : DATA[2].percent2016
        },{
          y : parseFloat(DATA[2].weight2017),
          more : DATA[2].percent2017
        },{
          y : parseFloat(DATA[2].weight2018),
          more : DATA[2].percent2018
        },{
          y : parseFloat(DATA[2].weight2019),
          more : DATA[2].percent2019
        } ]
      }, {
        name: 'Fewer than<br>3 stars',
        data: [ {
          y : parseFloat(DATA[3].weight2016),
          more : DATA[3].percent2016
        },{
          y : parseFloat(DATA[3].weight2017),
          more : DATA[3].percent2017
        },{
          y : parseFloat(DATA[3].weight2018),
          more : DATA[3].percent2018
        },{
          y : parseFloat(DATA[3].weight2019),
          more : DATA[3].percent2019
        } ]
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  this.series.name + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><strong>As percent of<br>total enrollment: </strong></td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + this.y + '%</strong></td></tr></td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;">As percent of<br>total contracts: </td><td style="padding:2px; margin:2px; background-color: #fff;">' + this.point.more + '%</td></tr></table>';
      },
    },
  });

//});
