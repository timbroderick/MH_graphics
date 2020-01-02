$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
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
        type: 'column'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ 'Total FTE<br>resident cap<br>for direct GME','Total Medicare<br>payments<br>for GMEs','<strong>Total federal</strong><br><strong>Medicare</strong><br><strong>spending</strong>' ],
        title: {
          text: null
        },
        plotBands: [
          {
          from: 1.5,
          to: 2.5,
          color: '#e1e1e1'
        }],
      },
      yAxis: {
        tickInterval: 20,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 180,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: 'PERCENTAGE CHANGE, 2001-16'
        }
      },
      legend: {
        enabled: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: 'Percentage change',
        data: $.map( [ DATA[0].change,DATA[1].change,DATA[2].change ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">FY 2001: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].y2001 + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">FY2016: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].y2016 + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage change: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].change + '%</strong></td></tr>' +
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
