$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


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
        categories: [ '2013','2014','2015','2016','2017*' ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 1,
        minorTickInterval: 'auto',
        overflow: 'justify',
        //min: -50,
        //max: 125,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: null
        }
      },
      legend: {
        enabled: true
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: 'Operating margin',
        data: $.map( [ DATA[0].op_margin,DATA[1].op_margin,DATA[2].op_margin,DATA[3].op_margin,DATA[4].op_margin ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Total margin',
        data: $.map( [ DATA[0].total_margin,DATA[1].total_margin,DATA[2].total_margin,DATA[3].total_margin,DATA[4].total_margin ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: 'Charity care',
         data: $.map( [ DATA[0].charity,DATA[1].charity,DATA[2].charity,DATA[3].charity,DATA[4].charity ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: 'Total community benefit',
          data: $.map( [ DATA[0].total_ben,DATA[1].total_ben,DATA[2].total_ben,DATA[3].total_ben,DATA[4].total_ben ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
         }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                  '<table style="width:100%;"><tbody>' +
                  '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; Median<br>operating margin: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong><br>' + DATA[this.point.x].op_margin + '%</strong></td></tr>' +
                  '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar SECOND"></div>&nbsp; Median total margin: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].total_margin + '%</strong></td></tr>' +
                  '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar THIRD"></div>&nbsp; Median charity care: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].charity + '%</strong></td></tr>' +
                  '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar FOURTH"></div>&nbsp; Median total<br>community benefit: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong><br>' + DATA[this.point.x].total_ben + '%</strong></td></tr>' +
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
