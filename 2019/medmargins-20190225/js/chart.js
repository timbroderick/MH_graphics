$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });



          var chartRate = new Highcharts.Chart({
              chart: {
                renderTo: 'graphic',
                backgroundColor: '#fafafa',
                height: 325,
                spacingBottom: 15,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 10
                //type: 'bar'
              },
              title: {
                    text: null,
              },
              xAxis: {
                categories: [ DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year,DATA[5].year,DATA[6].year,DATA[7].year ],
                labels: {
                  staggerLines: 2
                },
                title: {
                  text: null
                }
              },
              yAxis: {
                tickInterval: 2,
                minorTickInterval: 'auto',
                overflow: 'justify',
                min: -10,
                max: 0.5,
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
                enabled: false
              },
              credits: {
                  enabled: false
              },
              plotOptions: {
              },
              series: [{
                type: 'column',
                name: 'Total Medicare margin',
                color: "#AE1B1F",
                data: $.map( [ DATA[0].med,DATA[1].med,DATA[2].med,DATA[3].med,DATA[4].med,DATA[5].med,DATA[6].med,DATA[7].med ], function(datavalue) {
                  return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
               }],
              tooltip: {
                  crosshairs: true,
                  useHTML: true,
                  formatter: function() {
                        return '<h5><strong>' +  DATA[this.point.x].year + '</strong></h5>' +
                        '<table style="width:100%;"><tbody>' +
                        '<tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><div class="mhbar FIFTH"></div>&nbsp; Overall<br>Medicare: </td><td style="padding:2px; margin:2px; background-color: #eee;"><strong><br>' + DATA[this.point.x].med + '%</strong></td></tr>' +
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
