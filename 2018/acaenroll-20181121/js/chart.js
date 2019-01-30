Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

console.log(DATA);

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 350,
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
        categories: ["Week 1","Week 2", "Week 3", "Week 4","Week 5","Week 6","Week 7","Final count"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: null
            }
      },
      yAxis: {
        tickInterval: 1000000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'Number of sign-ups'
              }
      },
      legend: {
        reversed: true
      },
      credits: {
          enabled: false
      },
      series: [{
        name: '2019',
        //step: true,
        data: [ {
          y : 371676,
          ystr: '371,676',
          more : DATA[0].y2019
        },{
          y : 1176232,
          ystr: '1,176,232',
          more : '804,556'
        },{
          y : 1924476,
          ystr: '1,924,476',
          more : '748,244'
        },{
          y : 2424913,
          ystr: '2,424,913',
          more : '500,437'
        },{
          y : 3198163,
          ystr: '3,198,163',
          more : '773,250'
        },{
          y : 4132432,
          ystr: '4,132,432',
          more : '934,269'
        },{
          y : 8454882,
          ystr: '8,454,882',
          more : '4,322,450'
        },{
          y : 8411614,
          ystr: '8,411,614',
          more : ''
        }]
      },{
        name: '2018',
        //step: true,
        data: [ {
          y : 601462,
          ystr: '601,462',
          more : '601,462'
        },{
          y : 1478250,
          ystr: '1,478,250',
          more : '876,788'
        },{
          y : 2277079,
          ystr: '2,277,079',
          more : '798,829'
        },{
          y : 2781260,
          ystr: '2,781,260',
          more : '504,181'
        },{
          y : 3604440,
          ystr: '3,604,440',
          more : '823,180'
        },{
          y : 4678361,
          ystr: '4,678,361',
          more : '1,073,921'
        },{
          y : 8822329,
          ystr: '8,822,329',
          more : '4,143,968'
        },{
          y : 8743642,
          ystr: '8,743,642',
          more : ''
        } ]
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  this.series.name + ' ' + DATA[this.point.x].week + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong>Aggregate<br>total:</strong></td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + this.point.ystr + '</strong></td></tr></table>';
      },
    },
  });

//});
