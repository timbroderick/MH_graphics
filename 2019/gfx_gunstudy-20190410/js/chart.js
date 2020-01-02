$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 750,
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
        categories: [ DATA[0].death,DATA[1].death,DATA[2].death,DATA[3].death,DATA[4].death,DATA[5].death,DATA[6].death,DATA[7].death,DATA[8].death,DATA[9].death,DATA[10].death,DATA[11].death,DATA[12].death,DATA[13].death,DATA[14].death,DATA[15].death,DATA[16].death,DATA[17].death,DATA[18].death,DATA[19].death,DATA[20].death,DATA[21].death,DATA[22].death,DATA[23].death,DATA[24].death,DATA[25].death,DATA[26].death,DATA[27].death ],
        labels: {
          staggerLines: 2
        },
        title: {
          text: 'CAUSE OF DEATH'
        },
        plotBands: [
          {
          from: 22.5,
          to: 23.5,
          color: '#e1e1e1'
        }]
      },
      yAxis: {
        tickInterval: 25000,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        //max: 2000,
        labels: {
          format: '$' + '{value:,.0f}'
        },
        title: {
          text: 'Average funding per publication'
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
        name: 'Average funding per publication',
        data: [ {y:413916.87, color:'#7F919B'},{y:185837.35, color:'#7F919B'},{y:154110.92, color:'#7F919B'},{y:147486.89, color:'#7F919B'},{y:114205.46, color:'#7F919B'},{y:93420.75, color:'#7F919B'},{y:90351.61, color:'#7F919B'},{y:69679.17, color:'#7F919B'},{y:68512.89, color:'#7F919B'},{y:58268.55, color:'#7F919B'},{y:55509.84, color:'#7F919B'},{y:47957.75, color:'#7F919B'},{y:41981.31, color:'#7F919B'},{y:35972.1, color:'#7F919B'},{y:30514.73, color:'#7F919B'},{y:30491.36, color:'#7F919B'},{y:29575.27, color:'#7F919B'},{y:28403.23, color:'#7F919B'},{y:27389.39, color:'#7F919B'},{y:21014.42, color:'#7F919B'},{y:19103.77, color:'#7F919B'},{y:14747.29, color:'#7F919B'},{y:14162.9, color:'#7F919B'},{y:12734.13, color:'#AE1B1F'},{y:9417.12, color:'#7F919B'},{y:7697.19, color:'#7F919B'},{y:6070.5, color:'#7F919B'},{y:4099.69, color:'#7F919B'} ]
      }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].death + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Number of publications: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].pub + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">Total funding: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].funding + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Average funding<br>per publication: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].avg_txt + '</strong></td></tr>' +
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
