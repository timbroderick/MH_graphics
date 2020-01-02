$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 800,
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        type: 'bar'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state,DATA[5].state,DATA[6].state,DATA[7].state,DATA[8].state,DATA[9].state,DATA[10].state,DATA[11].state,DATA[12].state,DATA[13].state,DATA[14].state,DATA[15].state,DATA[16].state,DATA[17].state,DATA[18].state,DATA[19].state,DATA[20].state,DATA[21].state,DATA[22].state,DATA[23].state,DATA[24].state,DATA[25].state,DATA[26].state,DATA[27].state,DATA[28].state,DATA[29].state,DATA[30].state,DATA[31].state,DATA[32].state,DATA[33].state,DATA[34].state,DATA[35].state,DATA[36].state,DATA[37].state,DATA[38].state,DATA[39].state,DATA[40].state,DATA[41].state,DATA[42].state,DATA[43].state,DATA[44].state,DATA[45].state,DATA[46].state,DATA[47].state,DATA[48].state,DATA[49].state,DATA[50].state ],
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
          text: 'Percentage change from 2018'
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
        name: 'Percentage change<br>from 2018',
        color: '#67B4A5',
        negativeColor: '#AE1B1F',
        states: {
                hover: {
                    color: '#a4edba'//,
                    //borderColor: 'gray'
                }
            },
        data: $.map( [ DATA[0].change,DATA[1].change,DATA[2].change,DATA[3].change,DATA[4].change,DATA[5].change,DATA[6].change,DATA[7].change,DATA[8].change,DATA[9].change,DATA[10].change,DATA[11].change,DATA[12].change,DATA[13].change,DATA[14].change,DATA[15].change,DATA[16].change,DATA[17].change,DATA[18].change,DATA[19].change,DATA[20].change,DATA[21].change,DATA[22].change,DATA[23].change,DATA[24].change,DATA[25].change,DATA[26].change,DATA[27].change,DATA[28].change,DATA[29].change,DATA[30].change,DATA[31].change,DATA[32].change,DATA[33].change,DATA[34].change,DATA[35].change,DATA[36].change,DATA[37].change,DATA[38].change,DATA[39].change,DATA[40].change,DATA[41].change,DATA[42].change,DATA[43].change,DATA[44].change,DATA[45].change,DATA[46].change,DATA[47].change,DATA[48].change,DATA[49].change,DATA[50].change ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">2018 avg. premium: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].avg2018 + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">2019 avg. premium: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].avg2019 + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage change: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].change_txt + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">Exchange type: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].platform + '</strong></td></tr>' +
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
