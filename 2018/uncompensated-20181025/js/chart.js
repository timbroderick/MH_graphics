

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
        categories: ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016" ],
              labels: {
                staggerLines: 2,
                step:2
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
                  text: 'IN BILLIONS'
              }
      },
      legend: {
        reversed: true
      },
      credits: {
          enabled: false
      },
      series: [{
        name: 'Uncompensated care cost',
        data: $.map( [ DATA[0].uncompensated,DATA[1].uncompensated,DATA[2].uncompensated,DATA[3].uncompensated,DATA[4].uncompensated,DATA[5].uncompensated,DATA[6].uncompensated,DATA[7].uncompensated,DATA[8].uncompensated,DATA[9].uncompensated,DATA[10].uncompensated,DATA[11].uncompensated,DATA[12].uncompensated,DATA[13].uncompensated,DATA[14].uncompensated,DATA[15].uncompensated,DATA[16].uncompensated,DATA[17].uncompensated,DATA[18].uncompensated,DATA[19].uncompensated,DATA[20].uncompensated,DATA[21].uncompensated,DATA[22].uncompensated,DATA[23].uncompensated,DATA[24].uncompensated,DATA[25].uncompensated,DATA[26].uncompensated ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].Year + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>Uncompensated<br>care cost: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">$' + DATA[this.point.x].uncompensated + ' billion</td></tr></td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"># of<br>hospitals: </td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].Hospitals + '</td></tr></table>';
      },
    },
  });

//});
