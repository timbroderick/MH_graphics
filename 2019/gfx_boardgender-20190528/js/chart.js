$(function () {

    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


    var chartRate1 = new Highcharts.Chart({
        chart: {
          renderTo: 'graphic',
          backgroundColor: '#fafafa',
          height: 350,
          spacingBottom: 15,
          spacingTop: 10,
          spacingLeft: 10,
          spacingRight: 10,
          type: 'pie'
        },
        title: {
              text: null,
        },
        xAxis: {
          categories: [ DATA2[0].state,DATA2[1].state,DATA2[2].state,DATA2[3].state,DATA2[4].state ],
          title: {
            text: null
          }
        },
        yAxis: {
          tickInterval: 10,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0,
          max: 100,
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
          series: {
            dataLabels: {
                enabled: false,
                },
            showInLegend: true
          }
        },
        series: [{
          name: 'Percentage',
          data: [{
            name: DATA2[0].state,
            //color: "#AE1B1F",
            y: parseFloat( DATA2[0].percent )
          },{
            name: DATA2[1].state,
            //color: "#AE1B1F",
            y: parseFloat( DATA2[1].percent )
          },{
            name: DATA2[2].state,
            //color: "#AE1B1F",
            y: parseFloat( DATA2[2].percent )
          },{
            name: DATA2[3].state,
            //color: "#AE1B1F",
            y: parseFloat( DATA2[3].percent )
          },{
            name: DATA2[4].state,
            //color: "#AE1B1F",
            y: parseFloat( DATA2[4].percent )
          }]
         }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  this.point.name + '</strong></h5>' +
                  '<table style="width:100%;"><tbody>' +
                  '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + this.point.y + '%</strong></td></tr>' +
                  '</table>';
            },
        },
    });


  var chartRate2 = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic2',
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
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 100,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: null
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
          stacking: 'normal' // THIS IS THE STACKING COMMAND. REMOVE IF NOT STACKING
        }
      },
      series: [{
        name: 'Female trustees',
        data: $.map( [ DATA[0].female,DATA[1].female,DATA[2].female,DATA[3].female ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: 'Male trustees',
        data: $.map( [ DATA[0].male,DATA[1].male,DATA[2].male,DATA[3].male ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Female trustees: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].female + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Male trustees: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].male + '%</strong></td></tr>' +
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
