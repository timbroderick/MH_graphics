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
        type: 'column'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ "Indian<br>Health<br>Service","Medicare","Medicaid","Veterans<br>Health<br>Administration" ],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 2000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        //max: 2000,
        labels: {
          format: '$' + '{value:,.0f}'
        },
        title: {
          text: 'PER CAPITA SPENDING'
        }
      },
      legend: {
        reversed: true
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: 'Per capita spending',
        data: $.map( [ 4078,10692,13185,8109 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].program + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><div class="mhbar FIRST"></div>&nbsp; Per capita<br>spending: </td><td style="padding:2px; margin:2px; background-color: #fff;"><br><strong>$' + DATA[this.point.x].spend + '</strong></td></tr>' +
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
