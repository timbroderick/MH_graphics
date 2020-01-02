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
        type: 'line'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year,DATA[5].year,DATA[6].year,DATA[7].year,DATA[8].year,DATA[9].year,DATA[10].year,DATA[11].year,DATA[12].year,DATA[13].year,DATA[14].year,DATA[15].year,DATA[16].year,DATA[17].year ],
        labels: {
          //staggerLines: 2,
          step: 2,
          rotation: 45
        },
        title: {
          text: 'National health expenditures<br>as a percentage of GDP'
        }
      },
      yAxis: {
        tickInterval: 1,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 15,
        max: 21,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: null
        }
      },
      legend: {
        reversed: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: '2010 projection',
        data: $.map( [ DATA[0].p2010,DATA[1].p2010,DATA[2].p2010,DATA[3].p2010,DATA[4].p2010,DATA[5].p2010,DATA[6].p2010,DATA[7].p2010,DATA[8].p2010,DATA[9].p2010,DATA[10].p2010,DATA[11].p2010,DATA[12].p2010,DATA[13].p2010,DATA[14].p2010,DATA[15].p2010,DATA[16].p2010,DATA[17].p2010  ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: '2015 projection',
        data: $.map( [ DATA[0].p2015,DATA[1].p2015,DATA[2].p2015,DATA[3].p2015,DATA[4].p2015,DATA[5].p2015,DATA[6].p2015,DATA[7].p2015,DATA[8].p2015,DATA[9].p2015,DATA[10].p2015,DATA[11].p2015,DATA[12].p2015,DATA[13].p2015,DATA[14].p2015,DATA[15].p2015,DATA[16].p2015,DATA[17].p2015 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: '2017 projection',
         data: $.map( [ DATA[0].p2017,DATA[1].p2017,DATA[2].p2017,DATA[3].p2017,DATA[4].p2017,DATA[5].p2017,DATA[6].p2017,DATA[7].p2017,DATA[8].p2017,DATA[9].p2017,DATA[10].p2017,DATA[11].p2017,DATA[12].p2017,DATA[13].p2017,DATA[14].p2017,DATA[15].p2017,DATA[16].p2017,DATA[17].p2017 ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: '2018 projection',
          data: $.map( [ DATA[0].p2015,DATA[1].p2018,DATA[2].p2018,DATA[3].p2018,DATA[4].p2018,DATA[5].p2018,DATA[6].p2018,DATA[7].p2018,DATA[8].p2018,DATA[9].p2018,DATA[10].p2018,DATA[11].p2018,DATA[12].p2018,DATA[13].p2018,DATA[14].p2018,DATA[15].p2018,DATA[16].p2018,DATA[17].p2018 ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
         }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; 2010 projection: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].p2010 + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar SECOND"></div>&nbsp; 2015 projection: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].p2015 + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar THIRD"></div>&nbsp; 2017 projection: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].p2017 + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar FOURTH"></div>&nbsp; 2018 projection: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].p2018 + '%</strong></td></tr>' +
                '</table>';
          },
      },
  });

});

//Colors
//#0067AC
//#67B4A5
//#EBAB38
//#9D85BE
//#AE1B1F
//#FECF8D
//#51247f
//#394e4b
