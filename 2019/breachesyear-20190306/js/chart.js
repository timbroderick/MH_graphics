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
        type: 'area'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: [ DATA[0].year,DATA[1].year,DATA[2].year,DATA[3].year,DATA[4].year,DATA[5].year,DATA[6].year,DATA[7].year,DATA[8].year ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 50,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        //max: 2000,
        labels: {
          format: '{value:,.0f}'
        },
        title: {
          text: 'NUMBER OF BREACHES'
        }
      },
      legend: {
        reversed: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: false,
            format: '{y:,.0f}',
            align: 'right'
            },
          stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
        }
      },
      series: [{
        name: 'Hacking/IT Incident',
        data: $.map( [ DATA[0].hack,DATA[1].hack,DATA[2].hack,DATA[3].hack,DATA[4].hack,DATA[5].hack,DATA[6].hack,DATA[7].hack,DATA[8].hack ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: 'Theft',
        data: $.map( [ DATA[0].theft,DATA[1].theft,DATA[2].theft,DATA[3].theft,DATA[4].theft,DATA[5].theft,DATA[6].theft,DATA[7].theft,DATA[8].theft ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: 'Unauthorized<br>Access/Disclosure',
         data: $.map( [ DATA[0].unauth,DATA[1].unauth,DATA[2].unauth,DATA[3].unauth,DATA[4].unauth,DATA[5].unauth,DATA[6].unauth,DATA[7].unauth,DATA[8].unauth ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
         name: 'Other',
         data: $.map( [ DATA[0].other,DATA[1].other,DATA[2].other,DATA[3].other,DATA[4].other,DATA[5].other,DATA[6].other,DATA[7].other,DATA[8].other ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5>Total databreaches<br>for ' +  DATA[this.point.x].year + ': <strong>' +  DATA[this.point.x].breaches + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Hacking/IT<br>incident: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].hack + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Theft: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].theft + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Unauthorized<br>Access/Disclosure: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].unauth + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FOURTH"></div>&nbsp; Other: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].other + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Individuals affected: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].indiv + '</strong></td></tr>' +
                '</table>' ;
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
