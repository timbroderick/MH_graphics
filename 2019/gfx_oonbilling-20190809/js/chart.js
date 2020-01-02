
// function to iterate over the data and select specific columns
function getCol(matrix, col){
   var column = [];
   for(var i=0; i<matrix.length; i++){
      column.push(matrix[i][col]);
   }
   return column;
}

// grab the individual columns and populate them into a list for the chart
var state = getCol(DATA, 'state');
var avged = getCol(DATA, 'avged');
var avginp = getCol(DATA, 'avginp');
var edperc = getCol(DATA, 'edperc');
var inpperc = getCol(DATA, 'inpperc');


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
        type: 'column'
      },
      title: {
            text: null,
      },
      xAxis: {
        categories: state,
        labels: {
          staggerLines: 2
        },
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 100,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 2200,
        labels: {
          format: '$' + '{value:,.0f}'
        },
        title: {
          text: null
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
            align: 'center'
            }
        }
      },
      series: [{
        name: 'Emergency department visits',
        data: $.map( avged, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Inpatient admissions',
        data: $.map( avginp, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong><small><br>Average potential out-of-network costs</small></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Emergency<br>department vists: </td><td style="padding:2px; margin:2px;"><strong><br>$' + DATA[this.point.x].avged + '</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Inpatient<br>admissions: </td><td style="padding:2px; margin:2px;"><strong><br>$' + DATA[this.point.x].avginp_txt + '</strong></td></tr>' +
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
        categories: state,
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
        max: 50,
        labels: {
          format: '{value:,.0f}' + '%'
        },
        title: {
          text: null
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
            allowOverlap: true,
            format: '{y:,.1f}' + '%',
            align: 'center'
            }
        }
      },
      series: [{
        name: 'Emergency department visits',
        data: $.map( edperc, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Inpatient admissions',
        data: $.map( inpperc, function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><strong>' +  DATA[this.point.x].state + '</strong><small><br>Percentage of visits/admissions<br>with out-of-network billing</small></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp; Emergency<br>department vists: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].edperc + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Inpatient<br>admissions: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].inpperc + '%</strong></td></tr>' +
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
