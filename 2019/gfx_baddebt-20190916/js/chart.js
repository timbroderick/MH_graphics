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
        reversed: true
      },
      // #67B4A5
      // #b9e5fb
      // #ffd388
      // #f15b5b
      // #AE1B1F
      colorAxis: {
        dataClasses: [{
            from: 22,
            color: '#AE1B1F',
            name: 'More than<br>22% increase'
        }, {
            from: 9,
            to: 21,
            color: '#f15b5b',
            name: '9% to 21%'
        }, {
            from: 0,
            to: 8,
            color: '#ffd388',
            name: '0 to 8%'
        }, {
            from: -8,
            to: 0,
            color: '#b9e5fb',
            name: '-8% to 0'
        }, {
            from: -30,
            to: -8,
            color: '#67B4A5',
            name: "More than<br>-8% drop"
        }]
      },
      tooltip: {
        useHTML: true,
        //headerFormat: '<small><b>{point.key}</b></small><br>',
        //headerFormat: '{point.name}',
        headerFormat: null,
        pointFormat: '<h5><strong>{point.name}</strong><br><small>Median bad debt expense<br>per adjusted discharge</small></h5><table style="width:100%;"><tbody>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage change,<br>2017-2018: </td><td style="padding:2px; margin:2px;"><br><strong>{point.value}%</strong></td></tr>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">2017: </td><td style="padding:2px; margin:2px;"><strong>${point.bd_2017}</strong></td></tr>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">2018: </td><td style="padding:2px; margin:2px;"><strong>${point.bd_2018}</strong></td></tr></table>'
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
            bd_2017: DATA[0].bd_2017,
            bd_2018: DATA[0].bd_2018
        }, {
            'hc-a2': 'AK',
            name: 'Alaska',
            region: 'West',
            x: 0,
            y: 0,
            value: parseFloat(DATA[1].value),
            bd_2017: DATA[1].bd_2017,
            bd_2018: DATA[1].bd_2018
        }, {
            'hc-a2': 'AZ',
            name: 'Arizona',
            region: 'West',
            x: 5,
            y: 3,
            value: parseFloat(DATA[2].value),
            bd_2017: DATA[2].bd_2017,
            bd_2018: DATA[2].bd_2018
        }, {
            'hc-a2': 'AR',
            name: 'Arkansas',
            region: 'South',
            x: 5,
            y: 6,
            value: parseFloat(DATA[3].value),
            bd_2017: DATA[3].bd_2017,
            bd_2018: DATA[3].bd_2018
        }, {
            'hc-a2': 'CA',
            name: 'California',
            region: 'West',
            x: 5,
            y: 2,
            value: parseFloat(DATA[4].value),
            bd_2017: DATA[4].bd_2017,
            bd_2018: DATA[4].bd_2018
        }, {
            'hc-a2': 'CO',
            name: 'Colorado',
            region: 'West',
            x: 4,
            y: 3,
            value: parseFloat(DATA[5].value),
            bd_2017: DATA[5].bd_2017,
            bd_2018: DATA[5].bd_2018
        }, {
            'hc-a2': 'CT',
            name: 'Connecticut',
            region: 'Northeast',
            x: 3,
            y: 11,
            value: parseFloat(DATA[6].value),
            bd_2017: DATA[6].bd_2017,
            bd_2018: DATA[6].bd_2018
        }, {
            'hc-a2': 'DE',
            name: 'Delaware',
            region: 'South',
            x: 4,
            y: 9,
            value: parseFloat(DATA[7].value),
            bd_2017: DATA[7].bd_2017,
            bd_2018: DATA[7].bd_2018
        }, {
            'hc-a2': 'DC',
            name: 'District of Columbia',
            region: 'South',
            x: 4,
            y: 10,
            value: parseFloat(DATA[8].value),
            bd_2017: DATA[8].bd_2017,
            bd_2018: DATA[8].bd_2018
        }, {
            'hc-a2': 'FL',
            name: 'Florida',
            region: 'South',
            x: 8,
            y: 8,
            value: parseFloat(DATA[9].value),
            bd_2017: DATA[9].bd_2017,
            bd_2018: DATA[9].bd_2018
        }, {
            'hc-a2': 'GA',
            name: 'Georgia',
            region: 'South',
            x: 7,
            y: 8,
            value: parseFloat(DATA[10].value),
            bd_2017: DATA[10].bd_2017,
            bd_2018: DATA[10].bd_2018
        }, {
            'hc-a2': 'HI',
            name: 'Hawaii',
            region: 'West',
            x: 8,
            y: 0,
            value: parseFloat(DATA[11].value),
            bd_2017: DATA[11].bd_2017,
            bd_2018: DATA[11].bd_2018
        }, {
            'hc-a2': 'ID',
            name: 'Idaho',
            region: 'West',
            x: 3,
            y: 2,
            value: parseFloat(DATA[12].value),
            bd_2017: DATA[12].bd_2017,
            bd_2018: DATA[12].bd_2018
        }, {
            'hc-a2': 'IL',
            name: 'Illinois',
            region: 'Midwest',
            x: 3,
            y: 6,
            value: parseFloat(DATA[13].value),
            bd_2017: DATA[13].bd_2017,
            bd_2018: DATA[13].bd_2018
        }, {
            'hc-a2': 'IN',
            name: 'Indiana',
            region: 'Midwest',
            x: 3,
            y: 7,
            value: parseFloat(DATA[14].value),
            bd_2017: DATA[14].bd_2017,
            bd_2018: DATA[14].bd_2018
        }, {
            'hc-a2': 'IA',
            name: 'Iowa',
            region: 'Midwest',
            x: 3,
            y: 5,
            value: parseFloat(DATA[15].value),
            bd_2017: DATA[15].bd_2017,
            bd_2018: DATA[15].bd_2018
        }, {
            'hc-a2': 'KS',
            name: 'Kansas',
            region: 'Midwest',
            x: 5,
            y: 5,
            value: parseFloat(DATA[16].value),
            bd_2017: DATA[16].bd_2017,
            bd_2018: DATA[16].bd_2018
        }, {
            'hc-a2': 'KY',
            name: 'Kentucky',
            region: 'South',
            x: 4,
            y: 6,
            value: parseFloat(DATA[17].value),
            bd_2017: DATA[17].bd_2017,
            bd_2018: DATA[17].bd_2018
        }, {
            'hc-a2': 'LA',
            name: 'Louisiana',
            region: 'South',
            x: 6,
            y: 5,
            value: parseFloat(DATA[18].value),
            bd_2017: DATA[18].bd_2017,
            bd_2018: DATA[18].bd_2018
        }, {
            'hc-a2': 'ME',
            name: 'Maine',
            region: 'Northeast',
            x: 0,
            y: 11,
            value: parseFloat(DATA[19].value),
            bd_2017: DATA[19].bd_2017,
            bd_2018: DATA[19].bd_2018
        }, {
            'hc-a2': 'MD',
            name: 'Maryland',
            region: 'South',
            x: 4,
            y: 8,
            value: parseFloat(DATA[20].value),
            bd_2017: DATA[20].bd_2017,
            bd_2018: DATA[20].bd_2018
        }, {
            'hc-a2': 'MA',
            name: 'Massachusetts',
            region: 'Northeast',
            x: 2,
            y: 10,
            value: parseFloat(DATA[21].value),
            bd_2017: DATA[21].bd_2017,
            bd_2018: DATA[21].bd_2018
        }, {
            'hc-a2': 'MI',
            name: 'Michigan',
            region: 'Midwest',
            x: 2,
            y: 7,
            value: parseFloat(DATA[22].value),
            bd_2017: DATA[22].bd_2017,
            bd_2018: DATA[22].bd_2018
        }, {
            'hc-a2': 'MN',
            name: 'Minnesota',
            region: 'Midwest',
            x: 2,
            y: 4,
            value: parseFloat(DATA[23].value),
            bd_2017: DATA[23].bd_2017,
            bd_2018: DATA[23].bd_2018
        }, {
            'hc-a2': 'MS',
            name: 'Mississippi',
            region: 'South',
            x: 6,
            y: 6,
            value: parseFloat(DATA[24].value),
            bd_2017: DATA[24].bd_2017,
            bd_2018: DATA[24].bd_2018
        }, {
            'hc-a2': 'MO',
            name: 'Missouri',
            region: 'Midwest',
            x: 4,
            y: 5,
            value: parseFloat(DATA[25].value),
            bd_2017: DATA[25].bd_2017,
            bd_2018: DATA[25].bd_2018
        }, {
            'hc-a2': 'MT',
            name: 'Montana',
            region: 'West',
            x: 2,
            y: 2,
            value: parseFloat(DATA[26].value),
            bd_2017: DATA[26].bd_2017,
            bd_2018: DATA[26].bd_2018
        }, {
            'hc-a2': 'NE',
            name: 'Nebraska',
            region: 'Midwest',
            x: 4,
            y: 4,
            value: parseFloat(DATA[27].value),
            bd_2017: DATA[27].bd_2017,
            bd_2018: DATA[27].bd_2018
        }, {
            'hc-a2': 'NV',
            name: 'Nevada',
            region: 'West',
            x: 4,
            y: 2,
            value: parseFloat(DATA[28].value),
            bd_2017: DATA[28].bd_2017,
            bd_2018: DATA[28].bd_2018
        }, {
            'hc-a2': 'NH',
            name: 'New Hampshire',
            region: 'Northeast',
            x: 1,
            y: 11,
            value: parseFloat(DATA[29].value),
            bd_2017: DATA[29].bd_2017,
            bd_2018: DATA[29].bd_2018
        }, {
            'hc-a2': 'NJ',
            name: 'New Jersey',
            region: 'Northeast',
            x: 3,
            y: 10,
            value: parseFloat(DATA[30].value),
            bd_2017: DATA[30].bd_2017,
            bd_2018: DATA[30].bd_2018
        }, {
            'hc-a2': 'NM',
            name: 'New Mexico',
            region: 'West',
            x: 6,
            y: 3,
            value: parseFloat(DATA[31].value),
            bd_2017: DATA[31].bd_2017,
            bd_2018: DATA[31].bd_2018
        }, {
            'hc-a2': 'NY',
            name: 'New York',
            region: 'Northeast',
            x: 2,
            y: 9,
            value: parseFloat(DATA[32].value),
            bd_2017: DATA[32].bd_2017,
            bd_2018: DATA[32].bd_2018
        }, {
            'hc-a2': 'NC',
            name: 'North Carolina',
            region: 'South',
            x: 5,
            y: 9,
            value: parseFloat(DATA[33].value),
            bd_2017: DATA[33].bd_2017,
            bd_2018: DATA[33].bd_2018
        }, {
            'hc-a2': 'ND',
            name: 'North Dakota',
            region: 'Midwest',
            x: 2,
            y: 3,
            value: parseFloat(DATA[34].value),
            bd_2017: DATA[34].bd_2017,
            bd_2018: DATA[34].bd_2018
        }, {
            'hc-a2': 'OH',
            name: 'Ohio',
            region: 'Midwest',
            x: 3,
            y: 8,
            value: parseFloat(DATA[35].value),
            bd_2017: DATA[35].bd_2017,
            bd_2018: DATA[35].bd_2018
        }, {
            'hc-a2': 'OK',
            name: 'Oklahoma',
            region: 'South',
            x: 6,
            y: 4,
            value: parseFloat(DATA[36].value),
            bd_2017: DATA[36].bd_2017,
            bd_2018: DATA[36].bd_2018
        }, {
            'hc-a2': 'OR',
            name: 'Oregon',
            region: 'West',
            x: 4,
            y: 1,
            value: parseFloat(DATA[37].value),
            bd_2017: DATA[37].bd_2017,
            bd_2018: DATA[37].bd_2018
        }, {
            'hc-a2': 'PA',
            name: 'Pennsylvania',
            region: 'Northeast',
            x: 3,
            y: 9,
            value: parseFloat(DATA[38].value),
            bd_2017: DATA[38].bd_2017,
            bd_2018: DATA[38].bd_2018
        }, {
            'hc-a2': 'RI',
            name: 'Rhode Island',
            region: 'Northeast',
            x: 2,
            y: 11,
            value: parseFloat(DATA[39].value),
            bd_2017: DATA[39].bd_2017,
            bd_2018: DATA[39].bd_2018
        }, {
            'hc-a2': 'SC',
            name: 'South Carolina',
            region: 'South',
            x: 6,
            y: 8,
            value: parseFloat(DATA[40].value),
            bd_2017: DATA[40].bd_2017,
            bd_2018: DATA[40].bd_2018
        }, {
            'hc-a2': 'SD',
            name: 'South Dakota',
            region: 'Midwest',
            x: 3,
            y: 4,
            value: parseFloat(DATA[41].value),
            bd_2017: DATA[41].bd_2017,
            bd_2018: DATA[41].bd_2018
        }, {
            'hc-a2': 'TN',
            name: 'Tennessee',
            region: 'South',
            x: 5,
            y: 7,
            value: parseFloat(DATA[42].value),
            bd_2017: DATA[42].bd_2017,
            bd_2018: DATA[42].bd_2018
        }, {
            'hc-a2': 'TX',
            name: 'Texas',
            region: 'South',
            x: 7,
            y: 4,
            value: parseFloat(DATA[43].value),
            bd_2017: DATA[43].bd_2017,
            bd_2018: DATA[43].bd_2018
        }, {
            'hc-a2': 'UT',
            name: 'Utah',
            region: 'West',
            x: 5,
            y: 4,
            value: parseFloat(DATA[44].value),
            bd_2017: DATA[44].bd_2017,
            bd_2018: DATA[44].bd_2018
        }, {
            'hc-a2': 'VT',
            name: 'Vermont',
            region: 'Northeast',
            x: 1,
            y: 10,
            value: parseFloat(DATA[45].value),
            bd_2017: DATA[45].bd_2017,
            bd_2018: DATA[45].bd_2018
        }, {
            'hc-a2': 'VA',
            name: 'Virginia',
            region: 'South',
            x: 5,
            y: 8,
            value: parseFloat(DATA[46].value),
            bd_2017: DATA[46].bd_2017,
            bd_2018: DATA[46].bd_2018
        }, {
            'hc-a2': 'WA',
            name: 'Washington',
            region: 'West',
            x: 2,
            y: 1,
            value: parseFloat(DATA[47].value),
            bd_2017: DATA[47].bd_2017,
            bd_2018: DATA[47].bd_2018
        }, {
            'hc-a2': 'WV',
            name: 'West Virginia',
            region: 'South',
            x: 4,
            y: 7,
            value: parseFloat(DATA[48].value),
            bd_2017: DATA[48].bd_2017,
            bd_2018: DATA[48].bd_2018
        }, {
            'hc-a2': 'WI',
            name: 'Wisconsin',
            region: 'Midwest',
            x: 2,
            y: 5,
            value: parseFloat(DATA[49].value),
            bd_2017: DATA[49].bd_2017,
            bd_2018: DATA[49].bd_2018
        }, {
            'hc-a2': 'WY',
            name: 'Wyoming',
            region: 'West',
            x: 3,
            y: 3,
            value: parseFloat(DATA[50].value),
            bd_2017: DATA[50].bd_2017,
            bd_2018: DATA[50].bd_2018
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
