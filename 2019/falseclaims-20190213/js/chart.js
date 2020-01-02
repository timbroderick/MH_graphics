

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 400,
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
        categories: ["1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],
              labels: {
                staggerLines: 2
            },
            title: {
                text: 'YEAR'
            }
      },
      yAxis: {
        tickInterval: 50,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 600,
        title: {
            text: 'Number of cases'
        }
      },
      legend: {
        reversed: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          series: {
              stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
            }
      },
      series: [{
        name: 'Cases brought<br>by government',
        data: $.map( [ DATA[0].non,DATA[1].non,DATA[2].non,DATA[3].non,DATA[4].non,DATA[5].non,DATA[6].non,DATA[7].non,DATA[8].non,DATA[9].non,DATA[10].non,DATA[11].non,DATA[12].non,DATA[13].non,DATA[14].non,DATA[15].non,DATA[16].non,DATA[17].non,DATA[18].non,DATA[19].non,DATA[20].non,DATA[21].non,DATA[22].non,DATA[23].non,DATA[24].non,DATA[25].non,DATA[26].non,DATA[27].non,DATA[28].non ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: 'Cases brought<br>by whistleblowers',
        data: $.map( [ DATA[0].indv,DATA[1].indv,DATA[2].indv,DATA[3].indv,DATA[4].indv,DATA[5].indv,DATA[6].indv,DATA[7].indv,DATA[8].indv,DATA[9].indv,DATA[10].indv,DATA[11].indv,DATA[12].indv,DATA[13].indv,DATA[14].indv,DATA[15].indv,DATA[16].indv,DATA[17].indv,DATA[18].indv,DATA[19].indv,DATA[20].indv,DATA[21].indv,DATA[22].indv,DATA[23].indv,DATA[24].indv,DATA[25].indv,DATA[26].indv,DATA[27].indv,DATA[28].indv ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong>Total healthcare-<br>related cases: </strong></td><td style="padding:2px; margin:2px; background-color: #fff;"><br>' + DATA[this.point.x].claims + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#0067AC"><strong>Brought by<br>government: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;"><br>' + DATA[this.point.x].non_perc + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#67B4A5"><strong>Brought by<br>whistleblowers: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;"><br>' + DATA[this.point.x].indv_perc + '</td></tr></table>';
      },
    },
  });

//});
