

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 400,
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
        categories: [ "Jan-2007","Feb-2007","Mar-2007","Apr-2007","May-2007","Jun-2007","Jul-2007","Aug-2007","Sep-2007","Oct-2007","Nov-2007","Dec-2007","Jan-2008","Feb-2008","Mar-2008","Apr-2008","May-2008","Jun-2008","Jul-2008","Aug-2008","Sep-2008","Oct-2008","Nov-2008","Dec-2008","Jan-2009","Feb-2009","Mar-2009","Apr-2009","May-2009","Jun-2009","Jul-2009","Aug-2009","Sep-2009","Oct-2009","Nov-2009","Dec-2009","Jan-2010","Feb-2010","Mar-2010","Apr-2010","May-2010","Jun-2010","Jul-2010","Aug-2010","Sep-2010","Oct-2010","Nov-2010","Dec-2010","Jan-2011","Feb-2011","Mar-2011","Apr-2011","May-2011","Jun-2011","Jul-2011","Aug-2011","Sep-2011","Oct-2011","Nov-2011","Dec-2011","Jan-2012","Feb-2012","Mar-2012","Apr-2012","May-2012","Jun-2012","Jul-2012","Aug-2012","Sep-2012","Oct-2012","Nov-2012","Dec-2012","Jan-2013","Feb-2013","Mar-2013","Apr-2013","May-2013","Jun-2013","Jul-2013","Aug-2013","Sep-2013","Oct-2013","Nov-2013","Dec-2013","Jan-2014","Feb-2014","Mar-2014","Apr-2014","May-2014","Jun-2014","Jul-2014","Aug-2014","Sep-2014","Oct-2014","Nov-2014" ],
        labels: {
                step: 12,
                rotation: 45
            },
        title: {
                text: 'MONTH OF ADMISSION'
            },
        plotLines: [
          {color: 'red',
          value: 48,
          width: 1,
          zIndex: 100}
              ]
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max:100,
              title: {
                  text: 'PERCENTAGE OF ADMISSIONS'
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
                },
              stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
            }
      },
      series: [{
        name: '11 or more',
        data: $.map( [ DATA[0].share_11to25,DATA[1].share_11to25,DATA[2].share_11to25,DATA[3].share_11to25,DATA[4].share_11to25,DATA[5].share_11to25,DATA[6].share_11to25,DATA[7].share_11to25,DATA[8].share_11to25,DATA[9].share_11to25,DATA[10].share_11to25,DATA[11].share_11to25,DATA[12].share_11to25,DATA[13].share_11to25,DATA[14].share_11to25,DATA[15].share_11to25,DATA[16].share_11to25,DATA[17].share_11to25,DATA[18].share_11to25,DATA[19].share_11to25,DATA[20].share_11to25,DATA[21].share_11to25,DATA[22].share_11to25,DATA[23].share_11to25,DATA[24].share_11to25,DATA[25].share_11to25,DATA[26].share_11to25,DATA[27].share_11to25,DATA[28].share_11to25,DATA[29].share_11to25,DATA[30].share_11to25,DATA[31].share_11to25,DATA[32].share_11to25,DATA[33].share_11to25,DATA[34].share_11to25,DATA[35].share_11to25,DATA[36].share_11to25,DATA[37].share_11to25,DATA[38].share_11to25,DATA[39].share_11to25,DATA[40].share_11to25,DATA[41].share_11to25,DATA[42].share_11to25,DATA[43].share_11to25,DATA[44].share_11to25,DATA[45].share_11to25,DATA[46].share_11to25,DATA[47].share_11to25,DATA[48].share_11to25,DATA[49].share_11to25,DATA[50].share_11to25,DATA[51].share_11to25,DATA[52].share_11to25,DATA[53].share_11to25,DATA[54].share_11to25,DATA[55].share_11to25,DATA[56].share_11to25,DATA[57].share_11to25,DATA[58].share_11to25,DATA[59].share_11to25,DATA[60].share_11to25,DATA[61].share_11to25,DATA[62].share_11to25,DATA[63].share_11to25,DATA[64].share_11to25,DATA[65].share_11to25,DATA[66].share_11to25,DATA[67].share_11to25,DATA[68].share_11to25,DATA[69].share_11to25,DATA[70].share_11to25,DATA[71].share_11to25,DATA[72].share_11to25,DATA[73].share_11to25,DATA[74].share_11to25,DATA[75].share_11to25,DATA[76].share_11to25,DATA[77].share_11to25,DATA[78].share_11to25,DATA[79].share_11to25,DATA[80].share_11to25,DATA[81].share_11to25,DATA[82].share_11to25,DATA[83].share_11to25,DATA[84].share_11to25,DATA[85].share_11to25,DATA[86].share_11to25,DATA[87].share_11to25,DATA[88].share_11to25,DATA[89].share_11to25,DATA[90].share_11to25,DATA[91].share_11to25,DATA[92].share_11to25,DATA[93].share_11to25,DATA[94].share_11to25 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: '9 to 10',
        data: $.map( [ DATA[0].share_9to10,DATA[1].share_9to10,DATA[2].share_9to10,DATA[3].share_9to10,DATA[4].share_9to10,DATA[5].share_9to10,DATA[6].share_9to10,DATA[7].share_9to10,DATA[8].share_9to10,DATA[9].share_9to10,DATA[10].share_9to10,DATA[11].share_9to10,DATA[12].share_9to10,DATA[13].share_9to10,DATA[14].share_9to10,DATA[15].share_9to10,DATA[16].share_9to10,DATA[17].share_9to10,DATA[18].share_9to10,DATA[19].share_9to10,DATA[20].share_9to10,DATA[21].share_9to10,DATA[22].share_9to10,DATA[23].share_9to10,DATA[24].share_9to10,DATA[25].share_9to10,DATA[26].share_9to10,DATA[27].share_9to10,DATA[28].share_9to10,DATA[29].share_9to10,DATA[30].share_9to10,DATA[31].share_9to10,DATA[32].share_9to10,DATA[33].share_9to10,DATA[34].share_9to10,DATA[35].share_9to10,DATA[36].share_9to10,DATA[37].share_9to10,DATA[38].share_9to10,DATA[39].share_9to10,DATA[40].share_9to10,DATA[41].share_9to10,DATA[42].share_9to10,DATA[43].share_9to10,DATA[44].share_9to10,DATA[45].share_9to10,DATA[46].share_9to10,DATA[47].share_9to10,DATA[48].share_9to10,DATA[49].share_9to10,DATA[50].share_9to10,DATA[51].share_9to10,DATA[52].share_9to10,DATA[53].share_9to10,DATA[54].share_9to10,DATA[55].share_9to10,DATA[56].share_9to10,DATA[57].share_9to10,DATA[58].share_9to10,DATA[59].share_9to10,DATA[60].share_9to10,DATA[61].share_9to10,DATA[62].share_9to10,DATA[63].share_9to10,DATA[64].share_9to10,DATA[65].share_9to10,DATA[66].share_9to10,DATA[67].share_9to10,DATA[68].share_9to10,DATA[69].share_9to10,DATA[70].share_9to10,DATA[71].share_9to10,DATA[72].share_9to10,DATA[73].share_9to10,DATA[74].share_9to10,DATA[75].share_9to10,DATA[76].share_9to10,DATA[77].share_9to10,DATA[78].share_9to10,DATA[79].share_9to10,DATA[80].share_9to10,DATA[81].share_9to10,DATA[82].share_9to10,DATA[83].share_9to10,DATA[84].share_9to10,DATA[85].share_9to10,DATA[86].share_9to10,DATA[87].share_9to10,DATA[88].share_9to10,DATA[89].share_9to10,DATA[90].share_9to10,DATA[91].share_9to10,DATA[92].share_9to10,DATA[93].share_9to10,DATA[94].share_9to10 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: '1 to 8',
         data: $.map( [ DATA[0].share_1to8,DATA[1].share_1to8,DATA[2].share_1to8,DATA[3].share_1to8,DATA[4].share_1to8,DATA[5].share_1to8,DATA[6].share_1to8,DATA[7].share_1to8,DATA[8].share_1to8,DATA[9].share_1to8,DATA[10].share_1to8,DATA[11].share_1to8,DATA[12].share_1to8,DATA[13].share_1to8,DATA[14].share_1to8,DATA[15].share_1to8,DATA[16].share_1to8,DATA[17].share_1to8,DATA[18].share_1to8,DATA[19].share_1to8,DATA[20].share_1to8,DATA[21].share_1to8,DATA[22].share_1to8,DATA[23].share_1to8,DATA[24].share_1to8,DATA[25].share_1to8,DATA[26].share_1to8,DATA[27].share_1to8,DATA[28].share_1to8,DATA[29].share_1to8,DATA[30].share_1to8,DATA[31].share_1to8,DATA[32].share_1to8,DATA[33].share_1to8,DATA[34].share_1to8,DATA[35].share_1to8,DATA[36].share_1to8,DATA[37].share_1to8,DATA[38].share_1to8,DATA[39].share_1to8,DATA[40].share_1to8,DATA[41].share_1to8,DATA[42].share_1to8,DATA[43].share_1to8,DATA[44].share_1to8,DATA[45].share_1to8,DATA[46].share_1to8,DATA[47].share_1to8,DATA[48].share_1to8,DATA[49].share_1to8,DATA[50].share_1to8,DATA[51].share_1to8,DATA[52].share_1to8,DATA[53].share_1to8,DATA[54].share_1to8,DATA[55].share_1to8,DATA[56].share_1to8,DATA[57].share_1to8,DATA[58].share_1to8,DATA[59].share_1to8,DATA[60].share_1to8,DATA[61].share_1to8,DATA[62].share_1to8,DATA[63].share_1to8,DATA[64].share_1to8,DATA[65].share_1to8,DATA[66].share_1to8,DATA[67].share_1to8,DATA[68].share_1to8,DATA[69].share_1to8,DATA[70].share_1to8,DATA[71].share_1to8,DATA[72].share_1to8,DATA[73].share_1to8,DATA[74].share_1to8,DATA[75].share_1to8,DATA[76].share_1to8,DATA[77].share_1to8,DATA[78].share_1to8,DATA[79].share_1to8,DATA[80].share_1to8,DATA[81].share_1to8,DATA[82].share_1to8,DATA[83].share_1to8,DATA[84].share_1to8,DATA[85].share_1to8,DATA[86].share_1to8,DATA[87].share_1to8,DATA[88].share_1to8,DATA[89].share_1to8,DATA[90].share_1to8,DATA[91].share_1to8,DATA[92].share_1to8,DATA[93].share_1to8,DATA[94].share_1to8 ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].date + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#EBAB38"><strong>8 or fewer diagnoses: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].share_1to8 + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#67B4A5">9 or 10 diagnoses: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].share_9to10 + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>11 or more diagnoses: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].share_11to25 + '%</td></tr></table>';
      },
    },
  });

//});
