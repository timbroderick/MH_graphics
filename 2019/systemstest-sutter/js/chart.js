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
        type: 'columnrange'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ DATA[0].fyear,DATA[1].fyear,DATA[2].fyear,DATA[3].fyear,DATA[4].fyear,DATA[5].fyear ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        //min: 0,
        //max: 2000,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: null
        },
        plotLines: [
          {
            color: '#aaa',
            value: 0,
            width: 1,
            zIndex: 100,
            dashStyle: 'solid'
          }],
      },
      legend: {
        enabled: true
      },
      credits: {
          enabled: false
      },
      series: [{
        name: 'Lowest total margin',
        color: "#EBAB38",
        stacking: 'normal',
        data: [
          [-6.2,6.86],
          [-13.36,9.06],
          [-10.96,14.27],
          [-20.31,7.58],
          [-23.7,7.69],
          [-28.52,7.65]
        ]},{
        name: 'Highest total margin',
        color: "#67B4A5",
        type: 'columnrange',
        stacking: 'normal',
        data: [
          [6.86,55.42],
          [9.06,37.81],
          [14.27,39.71],
          [7.58,44.28],
          [7.69,50.57],
          [7.65,57.29]
        ]},{
         name: 'Median total margin',
         type: 'line',
         color: "#AE1B1F",
         data: $.map( [ DATA[0].median,DATA[1].median,DATA[2].median,DATA[3].median,DATA[4].median,DATA[5].median ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
         name: 'System\'s total margin',
         type: 'line',
         color: "#0067AC",
         data: $.map( [ DATA[0].sys,DATA[1].sys,DATA[2].sys,DATA[3].sys,DATA[4].sys,DATA[5].sys ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].fyear + ' total<br>profit(loss) margin</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar SECOND"></div>&nbsp; Highest margin: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].high + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar FIFTH"></div>&nbsp; Median margin: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].median + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar THIRD"></div>&nbsp; Lowest margin: </td><td style="padding:2px; margin:2px; background-color: #fff;"><strong>' + DATA[this.point.x].low + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar FIRST"></div>&nbsp; Total system margin: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].sys + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;">Number of reports: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>' + DATA[this.point.x].reports + '</strong></td></tr>' +
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
