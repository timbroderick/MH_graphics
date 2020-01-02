var aID = 0;

$(function () {
    Highcharts.setOptions({
		    lang: { thousandsSep: ','}
      });

      $('#searchSUBMIT').click(function() {

          var aID = $('#AFORMlist').val();

          var chartRate = new Highcharts.Chart({
              chart: {
                renderTo: 'graphic',
                backgroundColor: '#fafafa',
                height: 350,
                spacingBottom: 15,
                spacingTop: 10,
                spacingLeft: 10,
                spacingRight: 10,
                type: 'columnrange'
              },
              title: {
                    text: null,
              },
              xAxis: {
                categories: [ 2014,2015,2016,2017 ],
                title: {
                  text: 'X AXIS TITLE'
                }
              },
              yAxis: {
                tickInterval: 10,
                minorTickInterval: 'auto',
                overflow: 'justify',
                min: 40,
                max: 100,
                labels: {
                  format: '{value:,.0f}' + '%'
                },
                title: {
                  text: 'Y AXIS TITLE'
                }
              },
              legend: {
                reversed: true
              },
              credits: {
                  enabled: false
              },
              plotOptions: {
              },
              series: [{
                name: 'Lowest percent reponse',
                color: "#EBAB38",
                stacking: 'normal',
                data: [
                  $.map([DATA[aID].min2014,DATA[aID].med2014], function(MARGINvalue) {
                    return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
                  $.map([DATA[aID].min2015,DATA[aID].med2015], function(MARGINvalue) {
                    return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
                  $.map([DATA[aID].min2016,DATA[aID].med2016], function(MARGINvalue) {
                    return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
                  $.map([DATA[aID].min2017,DATA[aID].med2017], function(MARGINvalue) {
                    return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); })
                ]},{
                name: 'Highest percent response',
                color: "#67B4A5",
                type: 'columnrange',
                stacking: 'normal',
                data: [
                  $.map([DATA[aID].med2014,DATA[aID].max2014], function(MARGINvalue) {
                    return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
                  $.map([DATA[aID].med2015,DATA[aID].max2015], function(MARGINvalue) {
                    return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
                  $.map([DATA[aID].med2016,DATA[aID].max2016], function(MARGINvalue) {
                    return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); }),
                  $.map([DATA[aID].med2017,DATA[aID].max2017], function(MARGINvalue) {
                    return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); })
                ]},{
                 name: 'Median percent response',
                 type: 'line',
                 color: "#AE1B1F",
                 data: $.map( [ DATA[aID].med2014,DATA[aID].med2015,DATA[aID].med2016,DATA[aID].med2017 ], function(MARGINvalue) {
                   return isNaN(MARGINvalue) ? {y:null} : parseFloat(MARGINvalue); })
                }],
              tooltip: {
                  crosshairs: true
              },
          });

      });
});

//Colors
//#0067AC
//#67B4A5
//#EBAB38
//#AE1B1F
//#3D505A
//#ABE1FA
//#CEE5B7
//#FFCE7B
//#DF896E
//#9D85BE
