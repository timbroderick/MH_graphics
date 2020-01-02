Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});


  // overrides getContrast function, as needed
  $(function(H) {
    H.Renderer.prototype.getContrast = function(rgba) {
      rgba = H.Color(rgba).rgba;
      return rgba[0] + rgba[1] + rgba[2] > 500 ? '#000000' : '#FFFFFF';
    };
  }(Highcharts));


  var chartRate = new Highcharts.Chart({
      chart: {
        renderTo: 'graphic',
        backgroundColor: '#fafafa',
        width: w,
        height: '80%',
        spacingBottom: 15,
        spacingTop: 10,
        spacingLeft: 10,
        spacingRight: 10,
        type: 'tilemap',
        inverted: true
      },
      title: {
            text: null,
      },
      credits: {
          enabled: false
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      },
      legend: {
        reversed: false
      },
      //#0067AC
      //#67B4A5
      //#EBAB38
      colorAxis: {
        dataClasses: [{
            from: 0,
            to: 2,
            color: '#0067AC',
            name: 'Legislation restricting abortions'
        }, {
            from: 2,
            to: 4,
            color: '#EBAB38',
            name: 'Legislation expanding<br>or protecting access'
        }, {
            from: -1,
            to: 0,
            color: "#DDDDDD",
            name: "No Data"
        }]
      },
      tooltip: {
        useHTML: true,
        //headerFormat: '<small><b>{point.key}</b></small><br>',
        //headerFormat: '{point.name}',
        headerFormat: null,
        pointFormat: '<h5><strong>{point.name}</strong></h5><table style="width:100%;"><tbody>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">{point.legend}</td></tr></table>'
      },
      plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.hc-a2}',
                //color: '#000000',
                style: {
                    textOutline: false,
                    fontWeight: 'bold',
                    color: "contrast"
                }
            }
        }
      },
      series: [{
        name: '',
        data: [{
            'hc-a2': 'AL',
            name: 'Alabama',
            region: 'South',
            x: 6,
            y: 7,
            value: parseFloat(DATA[0].value),
            legend: DATA[0].legend
        }, {
            'hc-a2': 'AK',
            name: 'Alaska',
            region: 'West',
            x: 0,
            y: 0,
            value: parseFloat(DATA[1].value),
            legend: DATA[1].legend
        }, {
            'hc-a2': 'AZ',
            name: 'Arizona',
            region: 'West',
            x: 5,
            y: 3,
            value: parseFloat(DATA[2].value),
            legend: DATA[2].legend
        }, {
            'hc-a2': 'AR',
            name: 'Arkansas',
            region: 'South',
            x: 5,
            y: 6,
            value: parseFloat(DATA[3].value),
            legend: DATA[3].legend
        }, {
            'hc-a2': 'CA',
            name: 'California',
            region: 'West',
            x: 5,
            y: 2,
            value: parseFloat(DATA[4].value),
            legend: DATA[4].legend
        }, {
            'hc-a2': 'CO',
            name: 'Colorado',
            region: 'West',
            x: 4,
            y: 3,
            value: parseFloat(DATA[5].value),
            legend: DATA[5].legend
        }, {
            'hc-a2': 'CT',
            name: 'Connecticut',
            region: 'Northeast',
            x: 3,
            y: 11,
            value: parseFloat(DATA[6].value),
            legend: DATA[6].legend
        }, {
            'hc-a2': 'DE',
            name: 'Delaware',
            region: 'South',
            x: 4,
            y: 9,
            value: parseFloat(DATA[7].value),
            legend: DATA[7].legend
        }, {
            'hc-a2': 'DC',
            name: 'District of Columbia',
            region: 'South',
            x: 4,
            y: 10,
            value: parseFloat(DATA[8].value),
            legend: DATA[8].legend
        }, {
            'hc-a2': 'FL',
            name: 'Florida',
            region: 'South',
            x: 8,
            y: 8,
            value: parseFloat(DATA[9].value),
            legend: DATA[9].legend
        }, {
            'hc-a2': 'GA',
            name: 'Georgia',
            region: 'South',
            x: 7,
            y: 8,
            value: parseFloat(DATA[10].value),
            legend: DATA[10].legend
        }, {
            'hc-a2': 'HI',
            name: 'Hawaii',
            region: 'West',
            x: 8,
            y: 0,
            value: parseFloat(DATA[11].value),
            legend: DATA[11].legend
        }, {
            'hc-a2': 'ID',
            name: 'Idaho',
            region: 'West',
            x: 3,
            y: 2,
            value: parseFloat(DATA[12].value),
            legend: DATA[12].legend
        }, {
            'hc-a2': 'IL',
            name: 'Illinois',
            region: 'Midwest',
            x: 3,
            y: 6,
            value: parseFloat(DATA[13].value),
            legend: DATA[13].legend
        }, {
            'hc-a2': 'IN',
            name: 'Indiana',
            region: 'Midwest',
            x: 3,
            y: 7,
            value: parseFloat(DATA[14].value),
            legend: DATA[14].legend
        }, {
            'hc-a2': 'IA',
            name: 'Iowa',
            region: 'Midwest',
            x: 3,
            y: 5,
            value: parseFloat(DATA[15].value),
            legend: DATA[15].legend
        }, {
            'hc-a2': 'KS',
            name: 'Kansas',
            region: 'Midwest',
            x: 5,
            y: 5,
            value: parseFloat(DATA[16].value),
            legend: DATA[16].legend
        }, {
            'hc-a2': 'KY',
            name: 'Kentucky',
            region: 'South',
            x: 4,
            y: 6,
            value: parseFloat(DATA[17].value),
            legend: DATA[17].legend
        }, {
            'hc-a2': 'LA',
            name: 'Louisiana',
            region: 'South',
            x: 6,
            y: 5,
            value: parseFloat(DATA[18].value),
            legend: DATA[18].legend
        }, {
            'hc-a2': 'ME',
            name: 'Maine',
            region: 'Northeast',
            x: 0,
            y: 11,
            value: parseFloat(DATA[19].value),
            legend: DATA[19].legend
        }, {
            'hc-a2': 'MD',
            name: 'Maryland',
            region: 'South',
            x: 4,
            y: 8,
            value: parseFloat(DATA[20].value),
            legend: DATA[20].legend
        }, {
            'hc-a2': 'MA',
            name: 'Massachusetts',
            region: 'Northeast',
            x: 2,
            y: 10,
            value: parseFloat(DATA[21].value),
            legend: DATA[21].legend
        }, {
            'hc-a2': 'MI',
            name: 'Michigan',
            region: 'Midwest',
            x: 2,
            y: 7,
            value: parseFloat(DATA[22].value),
            legend: DATA[22].legend
        }, {
            'hc-a2': 'MN',
            name: 'Minnesota',
            region: 'Midwest',
            x: 2,
            y: 4,
            value: parseFloat(DATA[23].value),
            legend: DATA[23].legend
        }, {
            'hc-a2': 'MS',
            name: 'Mississippi',
            region: 'South',
            x: 6,
            y: 6,
            value: parseFloat(DATA[24].value),
            legend: DATA[24].legend
        }, {
            'hc-a2': 'MO',
            name: 'Missouri',
            region: 'Midwest',
            x: 4,
            y: 5,
            value: parseFloat(DATA[25].value),
            legend: DATA[25].legend
        }, {
            'hc-a2': 'MT',
            name: 'Montana',
            region: 'West',
            x: 2,
            y: 2,
            value: parseFloat(DATA[26].value),
            legend: DATA[26].legend
        }, {
            'hc-a2': 'NE',
            name: 'Nebraska',
            region: 'Midwest',
            x: 4,
            y: 4,
            value: parseFloat(DATA[27].value),
            legend: DATA[27].legend
        }, {
            'hc-a2': 'NV',
            name: 'Nevada',
            region: 'West',
            x: 4,
            y: 2,
            value: parseFloat(DATA[28].value),
            legend: DATA[28].legend
        }, {
            'hc-a2': 'NH',
            name: 'New Hampshire',
            region: 'Northeast',
            x: 1,
            y: 11,
            value: parseFloat(DATA[29].value),
            legend: DATA[29].legend
        }, {
            'hc-a2': 'NJ',
            name: 'New Jersey',
            region: 'Northeast',
            x: 3,
            y: 10,
            value: parseFloat(DATA[30].value),
            legend: DATA[30].legend
        }, {
            'hc-a2': 'NM',
            name: 'New Mexico',
            region: 'West',
            x: 6,
            y: 3,
            value: parseFloat(DATA[31].value),
            legend: DATA[31].legend
        }, {
            'hc-a2': 'NY',
            name: 'New York',
            region: 'Northeast',
            x: 2,
            y: 9,
            value: parseFloat(DATA[32].value),
            legend: DATA[32].legend
        }, {
            'hc-a2': 'NC',
            name: 'North Carolina',
            region: 'South',
            x: 5,
            y: 9,
            value: parseFloat(DATA[33].value),
            legend: DATA[33].legend
        }, {
            'hc-a2': 'ND',
            name: 'North Dakota',
            region: 'Midwest',
            x: 2,
            y: 3,
            value: parseFloat(DATA[34].value),
            legend: DATA[34].legend
        }, {
            'hc-a2': 'OH',
            name: 'Ohio',
            region: 'Midwest',
            x: 3,
            y: 8,
            value: parseFloat(DATA[35].value),
            legend: DATA[35].legend
        }, {
            'hc-a2': 'OK',
            name: 'Oklahoma',
            region: 'South',
            x: 6,
            y: 4,
            value: parseFloat(DATA[36].value),
            legend: DATA[36].legend
        }, {
            'hc-a2': 'OR',
            name: 'Oregon',
            region: 'West',
            x: 4,
            y: 1,
            value: parseFloat(DATA[37].value),
            legend: DATA[37].legend
        }, {
            'hc-a2': 'PA',
            name: 'Pennsylvania',
            region: 'Northeast',
            x: 3,
            y: 9,
            value: parseFloat(DATA[38].value),
            legend: DATA[38].legend
        }, {
            'hc-a2': 'RI',
            name: 'Rhode Island',
            region: 'Northeast',
            x: 2,
            y: 11,
            value: parseFloat(DATA[39].value),
            legend: DATA[39].legend
        }, {
            'hc-a2': 'SC',
            name: 'South Carolina',
            region: 'South',
            x: 6,
            y: 8,
            value: parseFloat(DATA[40].value),
            legend: DATA[40].legend
        }, {
            'hc-a2': 'SD',
            name: 'South Dakota',
            region: 'Midwest',
            x: 3,
            y: 4,
            value: parseFloat(DATA[41].value),
            legend: DATA[41].legend
        }, {
            'hc-a2': 'TN',
            name: 'Tennessee',
            region: 'South',
            x: 5,
            y: 7,
            value: parseFloat(DATA[42].value),
            legend: DATA[42].legend
        }, {
            'hc-a2': 'TX',
            name: 'Texas',
            region: 'South',
            x: 7,
            y: 4,
            value: parseFloat(DATA[43].value),
            legend: DATA[43].legend
        }, {
            'hc-a2': 'UT',
            name: 'Utah',
            region: 'West',
            x: 5,
            y: 4,
            value: parseFloat(DATA[44].value),
            legend: DATA[44].legend
        }, {
            'hc-a2': 'VT',
            name: 'Vermont',
            region: 'Northeast',
            x: 1,
            y: 10,
            value: parseFloat(DATA[45].value),
            legend: DATA[45].legend
        }, {
            'hc-a2': 'VA',
            name: 'Virginia',
            region: 'South',
            x: 5,
            y: 8,
            value: parseFloat(DATA[46].value),
            legend: DATA[46].legend
        }, {
            'hc-a2': 'WA',
            name: 'Washington',
            region: 'West',
            x: 2,
            y: 1,
            value: parseFloat(DATA[47].value),
            legend: DATA[47].legend
        }, {
            'hc-a2': 'WV',
            name: 'West Virginia',
            region: 'South',
            x: 4,
            y: 7,
            value: parseFloat(DATA[48].value),
            legend: DATA[48].legend
        }, {
            'hc-a2': 'WI',
            name: 'Wisconsin',
            region: 'Midwest',
            x: 2,
            y: 5,
            value: parseFloat(DATA[49].value),
            legend: DATA[49].legend
        }, {
            'hc-a2': 'WY',
            name: 'Wyoming',
            region: 'West',
            x: 3,
            y: 3,
            value: parseFloat(DATA[50].value),
            legend: DATA[50].legend
        }]
      }]

//End
  });

// diverging Colors

// light green to red
// #67B4A5
// #b9e5fb
// #ffd388
// #f15b5b
// #AE1B1F

// dark green to brown
// #a6611a
// #dfc27d
// #ffedb3
// #80cdc1
// #018571

// scales

// light to dark red
// #ffedb3
// #FFD387 -quartile
// #EBAB38 -quartile
// #f15b5b -quartile
// #AE1B1F -quartile
// Nuetral: #DDDDDD

// light to dark blues
// #ffffcc
// #a1dab4
// #41b6c4
// #2c7fb8
// #253494
// Nuetral: #DDDDDD

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
