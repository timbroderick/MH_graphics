

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 450,
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
        categories: [ DATA[0].sector,DATA[1].sector,DATA[2].sector,DATA[3].sector,DATA[4].sector,DATA[5].sector,DATA[6].sector,DATA[7].sector,DATA[8].sector,DATA[9].sector,DATA[10].sector ],
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
        labels: {
                formatter: function () {
                    return this.value + '%';
                }
            },
        min: 0,
              title: {
                  text: 'PERCENTAGE INDICATING INTEREST'
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
        name: 'Americas',
        data: $.map( [ DATA[0].Americas,DATA[1].Americas,DATA[2].Americas,DATA[3].Americas,DATA[4].Americas,DATA[5].Americas,DATA[6].Americas,DATA[7].Americas,DATA[8].Americas,DATA[9].Americas,DATA[10].Americas ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); }), index: 2
       }, {
         name: 'Asia-Pacific (APAC)',
         data: $.map( [ DATA[0].APAC,DATA[1].APAC,DATA[2].APAC,DATA[3].APAC,DATA[4].APAC,DATA[5].APAC,DATA[6].APAC,DATA[7].APAC,DATA[8].APAC,DATA[9].APAC,DATA[10].APAC ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); }), index: 1
        },{
          name: 'Europe, Middle East and Africa (EMEA)',
          data: $.map( [ DATA[0].EMEA,DATA[1].EMEA,DATA[2].EMEA,DATA[3].EMEA,DATA[4].EMEA,DATA[5].EMEA,DATA[6].EMEA,DATA[7].EMEA,DATA[8].EMEA,DATA[9].EMEA,DATA[10].EMEA ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); }), index: 0
        }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].sector + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#0067AC"><strong>Americas: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].Americas + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><span style="color:#67B4A5"><strong>APAC: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">' + DATA[this.point.x].APAC + '%</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><span style="color:#EBAB38"><strong>EMEA: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].EMEA + '%</td></tr></table>';
      },
    },
  });
