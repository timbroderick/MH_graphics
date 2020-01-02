
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}


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
            type: 'pie'
          },
          title: {
                text: null,
          },
          xAxis: {
            categories: [ DATA[0].q1,DATA[1].q1,DATA[2].q1,DATA[3].q1 ],
            title: {
              text: null
            }
          },
          yAxis: {
            tickInterval: 10,
            minorTickInterval: 'auto',
            overflow: 'justify',
            title: {
              text: null
            }
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
            }
          },
          series: [{
            name: 'Percentage',
            data: [{
              name: DATA[0].q1,
              color: "#508ebc",
              y: parseFloat( DATA[0].a1 )
            },{
              name: DATA[1].q1,
              color: "#3d505a",
              y: parseFloat( DATA[1].a1 )
            },{
              name: DATA[2].q1,
              color: "#b4c8df",
              y: parseFloat( DATA[2].a1 )
            },{
              name: DATA[3].q1,
              color: "#7f919b",
              y: parseFloat( DATA[3].a1 )
            }]
          }],
          tooltip: {
              crosshairs: true,
              useHTML: true,
              formatter: function() {
                    return '<h5><strong>' +  DATA[this.point.x].q1 + '</strong></h5>' +
                    '<table style="width:100%;"><tbody>' +
                    '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a1 + '%</strong></td></tr>' +
                      '</table>';
              },
          },
      });


      var chartRate = new Highcharts.Chart({
          chart: {
            renderTo: 'graphic2',
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
            categories: [ DATA[0].q2,DATA[1].q2,DATA[2].q2 ],
            title: {
              text: null
            }
          },
          yAxis: {
            tickInterval: 10,
            minorTickInterval: 'auto',
            overflow: 'justify',
            title: {
              text: null
            }
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
            }
          },
          series: [{
            name: 'Percentage',
            data: [{
              name: DATA[0].q2,
              color: "#508ebc",
              y: parseFloat( DATA[0].a2 )
            },{
              name: DATA[1].q2,
              color: "#3d505a",
              y: parseFloat( DATA[1].a2 )
            },{
              name: DATA[2].q2,
              color: "#b4c8df",
              y: parseFloat( DATA[2].a2 )
            }]
          }],
          tooltip: {
              crosshairs: true,
              useHTML: true,
              formatter: function() {
                    return '<h5><strong>' +  DATA[this.point.x].q2 + '</strong></h5>' +
                    '<table style="width:100%;"><tbody>' +
                    '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a2 + '%</strong></td></tr>' +
                      '</table>';
              },
          },
      });

      var chartRate = new Highcharts.Chart({
          chart: {
            renderTo: 'graphic3',
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
            categories: [ "Very","Somewhat" ],
            title: {
              text: null
            }
          },
          yAxis: {
            tickInterval: 10,
            minorTickInterval: 'auto',
            overflow: 'justify',
            title: {
              text: null
            }
          },
          credits: {
            enabled: false
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
            }
          },
          series: [{
            name: 'Percentage',
            data: [{
              name: "Very",
              color: "#508ebc",
              y: parseFloat( DATA[0].a3 )
            },{
              name: "Did not answer",
              color: "#3d505a",
              y: parseFloat( DATA[1].a3 )
            },{
              name: "Somewhat",
              color: "#b4c8df",
              y: parseFloat( DATA[2].a3 )
            }]
          }],
          tooltip: {
              crosshairs: true,
              useHTML: true,
              formatter: function() {
                    return '<h5><strong>' +  DATA[this.point.x].q3 + '</strong></h5>' +
                    '<table style="width:100%;"><tbody>' +
                    '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].a3 + '%</strong></td></tr>' +
                      '</table>';
              },
          },
      });
});



// PP Colors
// #508ebc
// #b4c8df
// #508ebc
// #7f919b
// #3d505a

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
