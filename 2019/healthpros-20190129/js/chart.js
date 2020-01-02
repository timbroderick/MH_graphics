

  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        height: 400,
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
        categories: [ "2010-2011", "2011-2012", "2012-2013", "2013-2014", "2014-2015", "2015-2016", "2016-2017", "2017-2018" ],
        labels: {
          staggerLines: 2
        },
        title: {
            text: "FLU SEASON"
        }
      },
      yAxis: {
        tickInterval: 10,
        minorTickInterval: 'auto',
        overflow: 'justify',
        min: 0,
        max: 100,
        labels: {
          formatter: function () {
              return this.value + '%';
          }
        },
        title: {
          text: 'PERCENTAGE VACCINATED'
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
        name: DATA[0].rates,
        data: $.map( [ DATA[0].y2010_2011, DATA[0].y2011_2012, DATA[0].y2012_2013, DATA[0].y2013_2014, DATA[0].y2014_2015, DATA[0].y2015_2016, DATA[0].y2016_2017, DATA[0].y2017_2018 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: DATA[1].rates,
        data: $.map( [ DATA[1].y2010_2011, DATA[1].y2011_2012, DATA[1].y2012_2013, DATA[1].y2013_2014, DATA[1].y2014_2015, DATA[1].y2015_2016, DATA[1].y2016_2017, DATA[1].y2017_2018 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
         name: DATA[2].rates,
         data: $.map( [ DATA[2].y2010_2011, DATA[2].y2011_2012, DATA[2].y2012_2013, DATA[2].y2013_2014, DATA[2].y2014_2015, DATA[2].y2015_2016, DATA[2].y2016_2017, DATA[2].y2017_2018 ], function(datavalue) {
           return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: DATA[3].rates,
        data: $.map( [ DATA[3].y2010_2011, DATA[3].y2011_2012, DATA[3].y2012_2013, DATA[3].y2013_2014, DATA[3].y2014_2015, DATA[3].y2015_2016, DATA[3].y2016_2017, DATA[3].y2017_2018 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      },{
        name: DATA[4].rates,
        data: $.map( [ DATA[4].y2010_2011, DATA[4].y2011_2012, DATA[4].y2012_2013, DATA[4].y2013_2014, DATA[4].y2014_2015, DATA[4].y2015_2016, DATA[4].y2016_2017, DATA[4].y2017_2018 ], function(datavalue) {
          return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
      }],
      tooltip: {
        //valueDecimals: 2,
        //valuePrefix: '$',
        //useHTML: true,
        valueSuffix: '%',
        crosshairs: true
    },
  });


    var chartRate = new Highcharts.Chart({
        chart: {
          renderTo: 'graphic2',
          backgroundColor: '#fafafa',
          height: 400,
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
          categories: [ "2010-2011", "2011-2012", "2012-2013", "2013-2014", "2014-2015", "2015-2016", "2016-2017", "2017-2018" ],
          labels: {
            staggerLines: 2
          },
          title: {
              text: "FLU SEASON"
          }
        },
        yAxis: {
          tickInterval: 10,
          minorTickInterval: 'auto',
          overflow: 'justify',
          min: 0,
          max: 100,
          labels: {
            formatter: function () {
                return this.value + '%';
            }
          },
          title: {
            text: 'PERCENTAGE VACCINATED'
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
          name: DATA2[0].rates,
          data: $.map( [ DATA2[0].y2010_2011, DATA2[0].y2011_2012, DATA2[0].y2012_2013, DATA2[0].y2013_2014, DATA2[0].y2014_2015, DATA2[0].y2015_2016, DATA2[0].y2016_2017, DATA2[0].y2017_2018 ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: DATA2[1].rates,
          data: $.map( [ DATA2[1].y2010_2011, DATA2[1].y2011_2012, DATA2[1].y2012_2013, DATA2[1].y2013_2014, DATA2[1].y2014_2015, DATA2[1].y2015_2016, DATA2[1].y2016_2017, DATA2[1].y2017_2018 ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
           name: DATA2[2].rates,
           data: $.map( [ DATA2[2].y2010_2011, DATA2[2].y2011_2012, DATA2[2].y2012_2013, DATA2[2].y2013_2014, DATA2[2].y2014_2015, DATA2[2].y2015_2016, DATA2[2].y2016_2017, DATA2[2].y2017_2018 ], function(datavalue) {
             return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        },{
          name: DATA2[3].rates,
          data: $.map( [ DATA2[3].y2010_2011, DATA2[3].y2011_2012, DATA2[3].y2012_2013, DATA2[3].y2013_2014, DATA2[3].y2014_2015, DATA2[3].y2015_2016, DATA2[3].y2016_2017, DATA2[3].y2017_2018 ], function(datavalue) {
            return isNaN(datavalue) ? {y:null} : parseFloat(datavalue); })
        }],
        tooltip: {
          //valueDecimals: 2,
          //valuePrefix: '$',
          //useHTML: true,
          valueSuffix: '%',
          crosshairs: true
      },
    });
//});
