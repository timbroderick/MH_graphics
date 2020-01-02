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
        categories: [ 2014,2015,2016,2017 ],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 30,
        max: 70,
        labels: {
          format: '{value:,.0f}' + "%"
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
        name: 'Highest percentage<br>response',
        color: "#67B4A5",
        type: 'columnrange',
        stacking: 'normal',
        data: [
          $.map([DATA[0].med,DATA[0].max], function(MARGINvalue) {
            return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
          $.map([DATA[1].med,DATA[1].max], function(MARGINvalue) {
            return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
          $.map([DATA[2].med,DATA[2].max], function(MARGINvalue) {
            return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
          $.map([DATA[3].med,DATA[3].max], function(MARGINvalue) {
            return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); })
        ]},{
          name: 'Lowest percentage<br>reponse',
          color: "#EBAB38",
          stacking: 'normal',
          data: [
            $.map([DATA[0].min,DATA[0].med], function(MARGINvalue) {
              return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
            $.map([DATA[1].min,DATA[1].med], function(MARGINvalue) {
              return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
            $.map([DATA[2].min,DATA[2].med], function(MARGINvalue) {
              return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
            $.map([DATA[3].min,DATA[3].med], function(MARGINvalue) {
              return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); })
          ]},{
           name: 'Median percentage<br>response',
           type: 'line',
           color: "#AE1B1F",
           data: $.map( [ DATA[0].med,DATA[1].med,DATA[2].med,DATA[3].med ], function(MARGINvalue) {
             return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); })
          }],
      tooltip: {
        crosshairs: true,
        useHTML: true,
        formatter: function() {
              return '<h5><strong>' +  DATA[this.point.x].year + ' <br><small>Patients who reported that the area<br>around their room was "always" quiet at night</strong></h5>' +
              '<table style="width:100%;"><tbody>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Highest percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].max + '%</strong></td></tr>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIFTH"></div>&nbsp; Median percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].med + '%</strong></td></tr>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Lowest percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].min + '%</strong></td></tr>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">Number of reports: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong>12</strong></td></tr>' +
              '</table>';
        },
      },
  });

});

//Colors
//#0067AC
//#67B4A5
//#EBAB38
//#9fa7d4
//#AE1B1F
//#5d7683
//#b9e5fb
//#CEE5B7
//#fbf6b4
//#FFE17F
//#f15b5b
