Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});


  // override getContrast function
  $(function(H) {
    H.Renderer.prototype.getContrast = function(rgba) {
      rgba = H.Color(rgba).rgba;
      return rgba[0] + rgba[1] + rgba[2] > 400 ? '#000000' : '#FFFFFF';
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
      colorAxis: {
        dataClasses: [{
            //from: 0,
            to: 12,
            color: '#ffffcc',
            name: '0 to 11.9%'
        }, {
            from: 12,
            to: 24,
            color: '#a1dab4',
            name: '12% to 23.9%'
        }, {
            from: 24,
            to: 36,
            color: '#41b6c4',
            name: '24% to 35.9%'
        }, {
            from: 36,
            to: 48,
            color: '#2c7fb8',
            name: '36% to 47.9%'
        }, {
            from: 48,
            color: '#253494',
            name: '48% or more'
        }]
      },
      tooltip: {
        useHTML: true,
        //headerFormat: '<small><b>{point.key}</b></small><br>',
        //headerFormat: '{point.name}',
        headerFormat: null,
        pointFormat: '<h5><strong>{point.name}</strong></h5><table style="width:100%;"><tbody>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Percentage with<br>\'A\' rating: </td><td style="padding:2px; margin:2px;"><br><strong>{point.legend}</strong></td></tr>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">2019 rank: </td><td style="padding:2px; margin:2px;"><strong>{point.rank2019}</strong></td></tr>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">2018 rank: </td><td style="padding:2px; margin:2px;"><strong>{point.rank2018}</strong></td></tr></table>'
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
            legend: DATA[0].legend,
            rank2019: DATA[0].rank2019,
            rank2018: DATA[0].rank2018
        }, {
            'hc-a2': 'AK',
            name: 'Alaska',
            region: 'West',
            x: 0,
            y: 0,
            value: parseFloat(DATA[1].value),
            legend: DATA[1].legend,
            rank2019: DATA[1].rank2019,
            rank2018: DATA[1].rank2018
        }, {
            'hc-a2': 'AZ',
            name: 'Arizona',
            region: 'West',
            x: 5,
            y: 3,
            value: parseFloat(DATA[2].value),
            legend: DATA[2].legend,
            rank2019: DATA[2].rank2019,
            rank2018: DATA[2].rank2018
        }, {
            'hc-a2': 'AR',
            name: 'Arkansas',
            region: 'South',
            x: 5,
            y: 6,
            value: parseFloat(DATA[3].value),
            legend: DATA[3].legend,
            rank2019: DATA[3].rank2019,
            rank2018: DATA[3].rank2018
        }, {
            'hc-a2': 'CA',
            name: 'California',
            region: 'West',
            x: 5,
            y: 2,
            value: parseFloat(DATA[4].value),
            legend: DATA[4].legend,
            rank2019: DATA[4].rank2019,
            rank2018: DATA[4].rank2018
        }, {
            'hc-a2': 'CO',
            name: 'Colorado',
            region: 'West',
            x: 4,
            y: 3,
            value: parseFloat(DATA[5].value),
            legend: DATA[5].legend,
            rank2019: DATA[5].rank2019,
            rank2018: DATA[5].rank2018
        }, {
            'hc-a2': 'CT',
            name: 'Connecticut',
            region: 'Northeast',
            x: 3,
            y: 11,
            value: parseFloat(DATA[6].value),
            legend: DATA[6].legend,
            rank2019: DATA[6].rank2019,
            rank2018: DATA[6].rank2018
        }, {
            'hc-a2': 'DE',
            name: 'Delaware',
            region: 'South',
            x: 4,
            y: 9,
            value: parseFloat(DATA[7].value),
            legend: DATA[7].legend,
            rank2019: DATA[7].rank2019,
            rank2018: DATA[7].rank2018
        }, {
            'hc-a2': 'DC',
            name: 'District of Columbia',
            region: 'South',
            x: 4,
            y: 10,
            value: parseFloat(DATA[8].value),
            legend: DATA[8].legend,
            rank2019: DATA[8].rank2019,
            rank2018: DATA[8].rank2018
        }, {
            'hc-a2': 'FL',
            name: 'Florida',
            region: 'South',
            x: 8,
            y: 8,
            value: parseFloat(DATA[9].value),
            legend: DATA[9].legend,
            rank2019: DATA[9].rank2019,
            rank2018: DATA[9].rank2018
        }, {
            'hc-a2': 'GA',
            name: 'Georgia',
            region: 'South',
            x: 7,
            y: 8,
            value: parseFloat(DATA[10].value),
            legend: DATA[10].legend,
            rank2019: DATA[10].rank2019,
            rank2018: DATA[10].rank2018
        }, {
            'hc-a2': 'HI',
            name: 'Hawaii',
            region: 'West',
            x: 8,
            y: 0,
            value: parseFloat(DATA[11].value),
            legend: DATA[11].legend,
            rank2019: DATA[11].rank2019,
            rank2018: DATA[11].rank2018
        }, {
            'hc-a2': 'ID',
            name: 'Idaho',
            region: 'West',
            x: 3,
            y: 2,
            value: parseFloat(DATA[12].value),
            legend: DATA[12].legend,
            rank2019: DATA[12].rank2019,
            rank2018: DATA[12].rank2018
        }, {
            'hc-a2': 'IL',
            name: 'Illinois',
            region: 'Midwest',
            x: 3,
            y: 6,
            value: parseFloat(DATA[13].value),
            legend: DATA[13].legend,
            rank2019: DATA[13].rank2019,
            rank2018: DATA[13].rank2018
        }, {
            'hc-a2': 'IN',
            name: 'Indiana',
            region: 'Midwest',
            x: 3,
            y: 7,
            value: parseFloat(DATA[14].value),
            legend: DATA[14].legend,
            rank2019: DATA[14].rank2019,
            rank2018: DATA[14].rank2018
        }, {
            'hc-a2': 'IA',
            name: 'Iowa',
            region: 'Midwest',
            x: 3,
            y: 5,
            value: parseFloat(DATA[15].value),
            legend: DATA[15].legend,
            rank2019: DATA[15].rank2019,
            rank2018: DATA[15].rank2018
        }, {
            'hc-a2': 'KS',
            name: 'Kansas',
            region: 'Midwest',
            x: 5,
            y: 5,
            value: parseFloat(DATA[16].value),
            legend: DATA[16].legend,
            rank2019: DATA[16].rank2019,
            rank2018: DATA[16].rank2018
        }, {
            'hc-a2': 'KY',
            name: 'Kentucky',
            region: 'South',
            x: 4,
            y: 6,
            value: parseFloat(DATA[17].value),
            legend: DATA[17].legend,
            rank2019: DATA[17].rank2019,
            rank2018: DATA[17].rank2018
        }, {
            'hc-a2': 'LA',
            name: 'Louisiana',
            region: 'South',
            x: 6,
            y: 5,
            value: parseFloat(DATA[18].value),
            legend: DATA[18].legend,
            rank2019: DATA[18].rank2019,
            rank2018: DATA[18].rank2018
        }, {
            'hc-a2': 'ME',
            name: 'Maine',
            region: 'Northeast',
            x: 0,
            y: 11,
            value: parseFloat(DATA[19].value),
            legend: DATA[19].legend,
            rank2019: DATA[19].rank2019,
            rank2018: DATA[19].rank2018
        }, {
            'hc-a2': 'MD',
            name: 'Maryland',
            region: 'South',
            x: 4,
            y: 8,
            value: parseFloat(DATA[20].value),
            legend: DATA[20].legend,
            rank2019: DATA[20].rank2019,
            rank2018: DATA[20].rank2018
        }, {
            'hc-a2': 'MA',
            name: 'Massachusetts',
            region: 'Northeast',
            x: 2,
            y: 10,
            value: parseFloat(DATA[21].value),
            legend: DATA[21].legend,
            rank2019: DATA[21].rank2019,
            rank2018: DATA[21].rank2018
        }, {
            'hc-a2': 'MI',
            name: 'Michigan',
            region: 'Midwest',
            x: 2,
            y: 7,
            value: parseFloat(DATA[22].value),
            legend: DATA[22].legend,
            rank2019: DATA[22].rank2019,
            rank2018: DATA[22].rank2018
        }, {
            'hc-a2': 'MN',
            name: 'Minnesota',
            region: 'Midwest',
            x: 2,
            y: 4,
            value: parseFloat(DATA[23].value),
            legend: DATA[23].legend,
            rank2019: DATA[23].rank2019,
            rank2018: DATA[23].rank2018
        }, {
            'hc-a2': 'MS',
            name: 'Mississippi',
            region: 'South',
            x: 6,
            y: 6,
            value: parseFloat(DATA[24].value),
            legend: DATA[24].legend,
            rank2019: DATA[24].rank2019,
            rank2018: DATA[24].rank2018
        }, {
            'hc-a2': 'MO',
            name: 'Missouri',
            region: 'Midwest',
            x: 4,
            y: 5,
            value: parseFloat(DATA[25].value),
            legend: DATA[25].legend,
            rank2019: DATA[25].rank2019,
            rank2018: DATA[25].rank2018
        }, {
            'hc-a2': 'MT',
            name: 'Montana',
            region: 'West',
            x: 2,
            y: 2,
            value: parseFloat(DATA[26].value),
            legend: DATA[26].legend,
            rank2019: DATA[26].rank2019,
            rank2018: DATA[26].rank2018
        }, {
            'hc-a2': 'NE',
            name: 'Nebraska',
            region: 'Midwest',
            x: 4,
            y: 4,
            value: parseFloat(DATA[27].value),
            legend: DATA[27].legend,
            rank2019: DATA[27].rank2019,
            rank2018: DATA[27].rank2018
        }, {
            'hc-a2': 'NV',
            name: 'Nevada',
            region: 'West',
            x: 4,
            y: 2,
            value: parseFloat(DATA[28].value),
            legend: DATA[28].legend,
            rank2019: DATA[28].rank2019,
            rank2018: DATA[28].rank2018
        }, {
            'hc-a2': 'NH',
            name: 'New Hampshire',
            region: 'Northeast',
            x: 1,
            y: 11,
            value: parseFloat(DATA[29].value),
            legend: DATA[29].legend,
            rank2019: DATA[29].rank2019,
            rank2018: DATA[29].rank2018
        }, {
            'hc-a2': 'NJ',
            name: 'New Jersey',
            region: 'Northeast',
            x: 3,
            y: 10,
            value: parseFloat(DATA[30].value),
            legend: DATA[30].legend,
            rank2019: DATA[30].rank2019,
            rank2018: DATA[30].rank2018
        }, {
            'hc-a2': 'NM',
            name: 'New Mexico',
            region: 'West',
            x: 6,
            y: 3,
            value: parseFloat(DATA[31].value),
            legend: DATA[31].legend,
            rank2019: DATA[31].rank2019,
            rank2018: DATA[31].rank2018
        }, {
            'hc-a2': 'NY',
            name: 'New York',
            region: 'Northeast',
            x: 2,
            y: 9,
            value: parseFloat(DATA[32].value),
            legend: DATA[32].legend,
            rank2019: DATA[32].rank2019,
            rank2018: DATA[32].rank2018
        }, {
            'hc-a2': 'NC',
            name: 'North Carolina',
            region: 'South',
            x: 5,
            y: 9,
            value: parseFloat(DATA[33].value),
            legend: DATA[33].legend,
            rank2019: DATA[33].rank2019,
            rank2018: DATA[33].rank2018
        }, {
            'hc-a2': 'ND',
            name: 'North Dakota',
            region: 'Midwest',
            x: 2,
            y: 3,
            value: parseFloat(DATA[34].value),
            legend: DATA[34].legend,
            rank2019: DATA[34].rank2019,
            rank2018: DATA[34].rank2018
        }, {
            'hc-a2': 'OH',
            name: 'Ohio',
            region: 'Midwest',
            x: 3,
            y: 8,
            value: parseFloat(DATA[35].value),
            legend: DATA[35].legend,
            rank2019: DATA[35].rank2019,
            rank2018: DATA[35].rank2018
        }, {
            'hc-a2': 'OK',
            name: 'Oklahoma',
            region: 'South',
            x: 6,
            y: 4,
            value: parseFloat(DATA[36].value),
            legend: DATA[36].legend,
            rank2019: DATA[36].rank2019,
            rank2018: DATA[36].rank2018
        }, {
            'hc-a2': 'OR',
            name: 'Oregon',
            region: 'West',
            x: 4,
            y: 1,
            value: parseFloat(DATA[37].value),
            legend: DATA[37].legend,
            rank2019: DATA[37].rank2019,
            rank2018: DATA[37].rank2018
        }, {
            'hc-a2': 'PA',
            name: 'Pennsylvania',
            region: 'Northeast',
            x: 3,
            y: 9,
            value: parseFloat(DATA[38].value),
            legend: DATA[38].legend,
            rank2019: DATA[38].rank2019,
            rank2018: DATA[38].rank2018
        }, {
            'hc-a2': 'RI',
            name: 'Rhode Island',
            region: 'Northeast',
            x: 2,
            y: 11,
            value: parseFloat(DATA[39].value),
            legend: DATA[39].legend,
            rank2019: DATA[39].rank2019,
            rank2018: DATA[39].rank2018
        }, {
            'hc-a2': 'SC',
            name: 'South Carolina',
            region: 'South',
            x: 6,
            y: 8,
            value: parseFloat(DATA[40].value),
            legend: DATA[40].legend,
            rank2019: DATA[40].rank2019,
            rank2018: DATA[40].rank2018
        }, {
            'hc-a2': 'SD',
            name: 'South Dakota',
            region: 'Midwest',
            x: 3,
            y: 4,
            value: parseFloat(DATA[41].value),
            legend: DATA[41].legend,
            rank2019: DATA[41].rank2019,
            rank2018: DATA[41].rank2018
        }, {
            'hc-a2': 'TN',
            name: 'Tennessee',
            region: 'South',
            x: 5,
            y: 7,
            value: parseFloat(DATA[42].value),
            legend: DATA[42].legend,
            rank2019: DATA[42].rank2019,
            rank2018: DATA[42].rank2018
        }, {
            'hc-a2': 'TX',
            name: 'Texas',
            region: 'South',
            x: 7,
            y: 4,
            value: parseFloat(DATA[43].value),
            legend: DATA[43].legend,
            rank2019: DATA[43].rank2019,
            rank2018: DATA[43].rank2018
        }, {
            'hc-a2': 'UT',
            name: 'Utah',
            region: 'West',
            x: 5,
            y: 4,
            value: parseFloat(DATA[44].value),
            legend: DATA[44].legend,
            rank2019: DATA[44].rank2019,
            rank2018: DATA[44].rank2018
        }, {
            'hc-a2': 'VT',
            name: 'Vermont',
            region: 'Northeast',
            x: 1,
            y: 10,
            value: parseFloat(DATA[45].value),
            legend: DATA[45].legend,
            rank2019: DATA[45].rank2019,
            rank2018: DATA[45].rank2018
        }, {
            'hc-a2': 'VA',
            name: 'Virginia',
            region: 'South',
            x: 5,
            y: 8,
            value: parseFloat(DATA[46].value),
            legend: DATA[46].legend,
            rank2019: DATA[46].rank2019,
            rank2018: DATA[46].rank2018
        }, {
            'hc-a2': 'WA',
            name: 'Washington',
            region: 'West',
            x: 2,
            y: 1,
            value: parseFloat(DATA[47].value),
            legend: DATA[47].legend,
            rank2019: DATA[47].rank2019,
            rank2018: DATA[47].rank2018
        }, {
            'hc-a2': 'WV',
            name: 'West Virginia',
            region: 'South',
            x: 4,
            y: 7,
            value: parseFloat(DATA[48].value),
            legend: DATA[48].legend,
            rank2019: DATA[48].rank2019,
            rank2018: DATA[48].rank2018
        }, {
            'hc-a2': 'WI',
            name: 'Wisconsin',
            region: 'Midwest',
            x: 2,
            y: 5,
            value: parseFloat(DATA[49].value),
            legend: DATA[49].legend,
            rank2019: DATA[49].rank2019,
            rank2018: DATA[49].rank2018
        }, {
            'hc-a2': 'WY',
            name: 'Wyoming',
            region: 'West',
            x: 3,
            y: 3,
            value: parseFloat(DATA[50].value),
            legend: DATA[50].legend,
            rank2019: DATA[50].rank2019,
            rank2018: DATA[50].rank2018
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
