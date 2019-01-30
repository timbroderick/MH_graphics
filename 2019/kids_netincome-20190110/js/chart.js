

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 400,
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
        categories: [DATA[0].facility,DATA[1].facility,DATA[2].facility,DATA[3].facility,DATA[4].facility,DATA[5].facility,DATA[6].facility,DATA[7].facility,DATA[8].facility,DATA[9].facility],
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
        max: 170,
        labels: {
            formatter: function () {
                return '$' + this.value;
            }
        },
        title: {
            text: '$ IN MILLIONS'
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
        name: 'Net income',
        color: "#67B4A5",
        data: $.map( [ DATA[0].diff,DATA[1].diff,DATA[2].diff,DATA[3].diff,DATA[4].diff,DATA[5].diff,DATA[6].diff,DATA[7].diff,DATA[8].diff,DATA[9].diff ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
        name: 'Contributions',
        color: "#0067AC",
        data: $.map( [ DATA[0].contrib,DATA[1].contrib,DATA[2].contrib,DATA[3].contrib,DATA[4].contrib,DATA[5].contrib,DATA[6].contrib,DATA[7].contrib,DATA[8].contrib,DATA[9].contrib ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          style: {
            width: '200px',
          },
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].facility + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>Contributions: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">$' + DATA[this.point.x].contrib + '</td></tr><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #fff;"><strong><span style="color:#67B4A5">Net income: </strong></span></td><td style="padding:2px; margin:2px; background-color: #fff;">$' + DATA[this.point.x].net + '</td></tr></table>';
      },
    },
  });

//------


  var oprev = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic2',
        backgroundColor: '#fafafa',
        height: 400,
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
        categories: [DATA[0].facility,DATA[1].facility,DATA[2].facility,DATA[3].facility,DATA[4].facility,DATA[5].facility,DATA[6].facility,DATA[7].facility,DATA[8].facility,DATA[9].facility],
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
        min: 0,
        max: 10,
        labels: {
            formatter: function () {
                return this.value + '%';
            }
        },
        title: {
            text: 'PERCENTAGE'
        }
      },
      legend: {
        enabled: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          series: {
            dataLabels: {
                enabled: false,
                //format: '${y}',
                formatter: function() {
                  return DATA[this.point.x].share;
                },
                align: 'right'
                },
            }
      },
      series: [{
        name: 'Percentage',
        data: $.map( [ DATA[0].perc,DATA[1].perc,DATA[2].perc,DATA[3].perc,DATA[4].perc,DATA[5].perc,DATA[6].perc,DATA[7].perc,DATA[8].perc,DATA[9].perc ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          style: {
            width: '200px',
          },
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].facility + '</strong></h5><table style="width:100%;"><tbody><tr style="border-top: 1px solid #ddd;"><td class="tdLEFT" style="padding:2px; margin:2px; background-color: #eee;"><strong><span style="color:#0067AC"><strong>Percentage: </strong></span></td><td style="padding:2px; margin:2px; background-color: #eee;">' + DATA[this.point.x].perc + '%</td></tr></table>';
      },
    },
  });
