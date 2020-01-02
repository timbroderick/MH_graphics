
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var month = getCol(DATA, 'month');
var hosp = getCol(DATA, 'hosp');
var rate = getCol(DATA, 'rate');
var center = getCol(DATA, 'center');

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
        type: 'line'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: month,
        labels: {
          rotation: -45,
          step: 6
        },
        plotBands: [
          {
          from: -0.5,
          to: 11.5,
          color: '#e1e1e1'
        },{
          from: 23.5,
          to: 35.5,
          color: '#e1e1e1'
        },{
          from: 47.5,
          to: 59.5,
          color: '#e1e1e1'
        },{
          from: 71.5,
          to: 83.5,
          color: '#e1e1e1'
        },{
          from: 95.5,
          to: 102.5,
          color: '#e1e1e1'
        }],
        title: {
          text: 'Month-year'
        }
      },
      yAxis: {
        tickInterval: 0.5,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 4,
        labels: {
          format: '{value:,.1f}'
        },
        title: {
          text: 'Infection rate'
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
            format: '$' + '{y:,.0f}',
            align: 'right'
          }
        }
      },
      series: [{
        name: 'Centerline',
        color: "#f05236",
        data: $.map( center, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Monthly rate',
        color: "#6d6e71",
        data: $.map( rate, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].month + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Rate: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].rate + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Centerline: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].center + '</strong></td></tr>' +
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
          categories: month,
          labels: {
            rotation: -45,
            step: 6
          },
          plotBands: [
            {
            from: -0.5,
            to: 11.5,
            color: '#e1e1e1'
          },{
            from: 23.5,
            to: 35.5,
            color: '#e1e1e1'
          },{
            from: 47.5,
            to: 59.5,
            color: '#e1e1e1'
          },{
            from: 71.5,
            to: 83.5,
            color: '#e1e1e1'
          },{
            from: 95.5,
            to: 102.5,
            color: '#e1e1e1'
          }],
          title: {
            text: 'Month-year'
          }
        },
        yAxis: {
          tickInterval: 15,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0,
          max: 145,
          labels: {
            format: '{value:,.0f}'
          },
          title: {
            text: 'Number of hospitals'
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
              format: '$' + '{y:,.0f}',
              align: 'right'
            }
          }
        },
        series: [{
          name: 'Number of hospitals',
          color: "#f05236",
          data: $.map( hosp, function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
        tooltip: {
            crosshairs: true,
            useHTML: true,
            formatter: function() {
                  return '<h5><strong>' +  DATA[this.point.x].month + '</strong></h5>' +
                  '<table style="width:100%;"><tbody>' +
                  '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Number of<br>hospitals: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].hosp + '</strong></td></tr>' +
                  '</table>';
            },
        },
    });

});

//Current
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

//Mashup
//#508ebc - News blue
//#6D6E71 - News gray
//#f05236 - Zazou orange
//#FFCD67 - Gold
//#22366B - Darkest blue
//#ae1b1f - News red
//#006aa6 - News darker blue
//#b4c8df - News light blue
//#3d505a - News dark gray
//#7f919b - News light gray
//#6a1240 - Conf deep purple

//MHBlues
//#508ebc - News blue
//#3d505a - News dark gray
//#b4c8df - News light blue
//#7f919b - News light gray
//#006aa6 - News darker blue
