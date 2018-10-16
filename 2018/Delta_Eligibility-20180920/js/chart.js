

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
        categories: ["2002","2003","2004","2005","2006","2007","2008","2009*","2009*","2011","2012","2013","2014","2015","2016","2017","2018"],
              labels: {
                staggerLines: 2,
                step: 2
            },
            title: {
                text: null
            }
      },
      yAxis: {
        //tickInterval: 250,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'Percentage of federal poverty level'
              }
      },
      legend: {
        reversed: true
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          series: {
            dataLabels: {
                enabled: false,
                //format: '${y}',
                formatter: function() {
                  return DATA[this.point.x].share;
                },
                align: 'right'
                }
            }
      },
      series: [{
        name: 'U.S. median',
        data: $.map( [ DATA[0].us,DATA[1].us,DATA[2].us,DATA[3].us,DATA[4].us,DATA[5].us,DATA[6].us,DATA[7].us,DATA[8].us,DATA[9].us,DATA[10].us,DATA[11].us,DATA[12].us,DATA[13].us,DATA[14].us,DATA[15].us,DATA[16].us ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }, {
        name: 'Mississippi',
        data: $.map( [ DATA[0].miss,DATA[1].miss,DATA[2].miss,DATA[3].miss,DATA[4].miss,DATA[5].miss,DATA[6].miss,DATA[7].miss,DATA[8].miss,DATA[9].miss,DATA[10].miss,DATA[11].miss,DATA[12].miss,DATA[13].miss,DATA[14].miss,DATA[15].miss,DATA[16].miss ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<b>' + DATA[this.point.x].Year + '</b><br><table class="mapTable table-hover table-striped table-condensed"><tr><td class="tdLEFT"><span style="color:#0067AC"><strong>U.S. median: </strong></span></td><td>' + DATA[this.point.x].us + '</td></tr><tr><td class="tdLEFT"><strong><span style="color:#67B4A5">Mississippi: </strong></span></td><td>' + DATA[this.point.x].miss + '</td></tr></table>';
      },
    },
  });

//});
