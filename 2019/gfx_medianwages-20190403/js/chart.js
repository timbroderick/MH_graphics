$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 400,
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
        categories: [ DATA[0].state,DATA[1].state,DATA[2].state,DATA[3].state,DATA[4].state,DATA[5].state ],
        labels: {
          staggerLines: 2
        },
        plotBands: [
          {
          from: -0.5,
          to: 2.5,
          color: '#e1e1e1'
        }],
        plotLines: [
          {
            color: '#aaa',
            value: 0.5,
            width: 1,
            zIndex: 100,
            dashStyle: 'dash'
          },{
            color: '#aaa',
            value: 1.5,
            width: 1,
            zIndex: 100,
            dashStyle: 'dash'
          },{
            color: '#aaa',
            value: 2.5,
            width: 1,
            zIndex: 100,
            dashStyle: 'dash'
          },{
            color: '#aaa',
            value: 3.5,
            width: 1,
            zIndex: 100,
            dashStyle: 'dash'
          },{
            color: '#aaa',
            value: 4.5,
            width: 1,
            zIndex: 100,
            dashStyle: 'dash'
          }],
        title: {
          text: null
        }
      },
      yAxis: {
        tickInterval: 2,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: -6,
        max: 6,
        labels: {
          format: '{value:,.0f}' + "%"
        },
        plotLines: [
          {
            color: '#aaa',
            value: 0,
            width: 1,
            zIndex: 100,
            dashStyle: 'solid'
          }],
        title: {
          text: 'PERCENTAGE CHANGE<br>2005-2015'
        }
      },
      legend: {
        reversed: false
      },
      credits: {
          enabled: false
      },
      plotOptions: {
      },
      series: [{
        name: 'Overall healthcare',
        data: $.map( [ DATA[0].overall,DATA[1].overall,DATA[2].overall,DATA[3].overall,DATA[4].overall,DATA[5].overall ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: 'Hospitals',
        data: $.map( [ DATA[0].hosp,DATA[1].hosp,DATA[2].hosp,DATA[3].hosp,DATA[4].hosp,DATA[5].hosp ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
       },{
         name: 'Outpatient care<br>centers',
         data: $.map( [ DATA[0].out,DATA[1].out,DATA[2].out,DATA[3].out,DATA[4].out,DATA[5].out ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
      tooltip: {
          crosshairs: true,
          useHTML: true,
          formatter: function() {
                return '<h5><small>Percentage change for</small><br><strong>' +  DATA[this.point.x].state + '</strong></h5>' +
                '<table style="width:100%;"><tbody>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar FIRST"></div>&nbsp;<strong> Overall healthcare: </strong><br>&nbsp; &nbsp; &nbsp; 2005 wage:<br>&nbsp; &nbsp; &nbsp; 2015 wage:</td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].overall + '%</strong><br>$' + DATA[this.point.x].overall2005 + '&nbsp; &nbsp;<br>$' + DATA[this.point.x].overall2015 + '&nbsp; &nbsp;</td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar SECOND"></div>&nbsp; Hospitals: </td><td style="padding:2px; margin:2px;"><strong>' + DATA[this.point.x].hosp + '%</strong></td></tr>' +
                '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;"><div class="mhbar THIRD"></div>&nbsp; Outpatient care<br>centers: </td><td style="padding:2px; margin:2px;"><strong><br>' + DATA[this.point.x].out + '%</strong></td></tr>' +
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
