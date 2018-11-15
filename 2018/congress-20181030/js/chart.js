
  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 150,
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10
      },
      title: {
            text: null,
      },
      legend: {
        reversed: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          pie: {
            dataLabels: {
              enabled: false
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '125%'],
            size: '200%'
          }
      },
      series: [{
          type: 'pie',
          name: '',
          innerSize: '50%',
          data: [
              { name: 'Dem - no race',
                color: "#9ddcf9",
                y: parseFloat( DATA[0].result )
              },{
                name: 'Dem win',
                color: "#0067ac",
                y: parseFloat( DATA[1].result )
              },{
                name: 'Other',
                color: "#faa634",
                y: parseFloat( DATA[2].result )
              },{
                name: 'Too close to call',
                color: "#989898",
                y: parseFloat( DATA[3].result )
              },{
                name: 'GOP win',
                color: "#ae1b1f",
                y: parseFloat( DATA[4].result )
              },{
                name: 'GOP - no race',
                color: "#f8abad",
                y: parseFloat( DATA[5].result )
              }
          ]
      }],
       tooltip: {
           crosshairs: true,
           useHTML: true,
           valueDecimals: 0,
           formatter: function() {
             return this.point.name + ': <b>' + this.point.y + '</b>';
           }
       }
  });



    var chartRate = new Highcharts.Chart({
        chart: {
          renderTo: 'graphic1',
          backgroundColor: '#fafafa',
          height: 150,
          spacingBottom: 15,
          spacingTop: 10,
          spacingLeft: 10,
          spacingRight: 10
        },
        title: {
              text: null,
        },
        legend: {
          reversed: false
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
              dataLabels: {
                enabled: false
              },
              startAngle: -90,
              endAngle: 90,
              center: ['50%', '125%'],
              size: '200%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                { name: 'Dem win',
                  color: "#0067ac",
                  y: parseFloat( DATA2[0].result )
                },{
                  name: 'Too close to call',
                  color: "#989898",
                  y: parseFloat( DATA2[1].result )
                },{
                  name: 'GOP win',
                  color: "#ae1b1f",
                  y: parseFloat( DATA2[2].result )
                }
            ]
        }],
         tooltip: {
             crosshairs: true,
             useHTML: true,
             valueDecimals: 0,
             formatter: function() {
               return this.point.name + ': <b>' + this.point.y + '</b>';
             }
         }
    });
