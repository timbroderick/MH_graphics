Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 450,
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        type: 'area'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: ["1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],
              labels: {
                staggerLines: 2,
                step: 2
            },
            title: {
                text: 'YEAR'
            }
      },
      yAxis: {
        tickInterval: 5000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
              title: {
                  text: 'NUMBER OF ENTITIES WITHIN EACH'
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
            marker: {
                enabled: false
            },
            stacking: 'normal'//,
            //step: 'left'
          }
      },
      series: [ {
        name: 'All other',
        data: $.map( [ DATA[0].nonch,DATA[1].nonch,DATA[2].nonch,DATA[3].nonch,DATA[4].nonch,DATA[5].nonch,DATA[6].nonch,DATA[7].nonch,DATA[8].nonch,DATA[9].nonch,DATA[10].nonch,DATA[11].nonch,DATA[12].nonch,DATA[13].nonch,DATA[14].nonch,DATA[15].nonch,DATA[16].nonch,DATA[17].nonch,DATA[18].nonch,DATA[19].nonch,DATA[20].nonch,DATA[21].nonch,DATA[22].nonch,DATA[23].nonch,DATA[24].nonch,DATA[25].nonch,DATA[26].nonch ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: 'Community<br>health centers',
        data: $.map( [ DATA[0].ch,DATA[1].ch,DATA[2].ch,DATA[3].ch,DATA[4].ch,DATA[5].ch,DATA[6].ch,DATA[7].ch,DATA[8].ch,DATA[9].ch,DATA[10].ch,DATA[11].ch,DATA[12].ch,DATA[13].ch,DATA[14].ch,DATA[15].ch,DATA[16].ch,DATA[17].ch,DATA[18].ch,DATA[19].ch,DATA[20].ch,DATA[21].ch,DATA[22].ch,DATA[23].ch,DATA[24].ch,DATA[25].ch,DATA[26].ch ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: 'Other hospitals',
        data: $.map( [ DATA[0].nondsh,DATA[1].nondsh,DATA[2].nondsh,DATA[3].nondsh,DATA[4].nondsh,DATA[5].nondsh,DATA[6].nondsh,DATA[7].nondsh,DATA[8].nondsh,DATA[9].nondsh,DATA[10].nondsh,DATA[11].nondsh,DATA[12].nondsh,DATA[13].nondsh,DATA[14].nondsh,DATA[15].nondsh,DATA[16].nondsh,DATA[17].nondsh,DATA[18].nondsh,DATA[19].nondsh,DATA[20].nondsh,DATA[21].nondsh,DATA[22].nondsh,DATA[23].nondsh,DATA[24].nondsh,DATA[25].nondsh,DATA[26].nondsh ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: 'Disproportionate-<br>share hospitals',
         data: $.map( [ DATA[0].dsh,DATA[1].dsh,DATA[2].dsh,DATA[3].dsh,DATA[4].dsh,DATA[5].dsh,DATA[6].dsh,DATA[7].dsh,DATA[8].dsh,DATA[9].dsh,DATA[10].dsh,DATA[11].dsh,DATA[12].dsh,DATA[13].dsh,DATA[14].dsh,DATA[15].dsh,DATA[16].dsh,DATA[17].dsh,DATA[18].dsh,DATA[19].dsh,DATA[20].dsh,DATA[21].dsh,DATA[22].dsh,DATA[23].dsh,DATA[24].dsh,DATA[25].dsh,DATA[26].dsh ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#9D85BE"><strong>Disproportionate-<br>share hospitals: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].dshtxt + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#EBAB38">Other hospitals: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].nondshtxt + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#67B4A5"><strong>Community<br>health centers: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].chtxt + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#0067AC">All other: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].nonchtxt + '</td></tr></table>';
      },
    },
  });

//});
