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
      colorAxis: {
        dataClasses: [{
            from: 0,
            to: 1.5,
            color: '#AE1B1F',
            name: '26.5 or more'
        }, {
            from: 1.5,
            to: 2.5,
            color: '#f15b5b',
            name: '20.6 up to 26.5'
        }, {
            from: 2.5,
            to: 3.5,
            color: '#EBAB38',
            name: '17.7 up to 20.6'
        }, {
            from: 3.5,
            to: 4.5,
            color: '#FFD387',
            name: '14 up to 17.7'
        }, {
            from: 4.5,
            to: 5.5,
            color: '#ffedb3',
            name: 'Less than 14'
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
              '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Maternal mortality<br>rate <small>(per 100,000)</small>: </td><td style="padding:2px; margin:2px;"><br><strong>{point.legend}</strong></td></tr>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #eee;"><td class="tdLEFT" style="padding:2px; margin:2px;">Infant mortality<br>rate <small>(per 1,000)</small>: </td><td style="padding:2px; margin:2px;"><br><strong>{point.infant}</strong></td></tr>' +
              '<tr style="border-top: 1px solid #ddd; background-color: #fff;"><td class="tdLEFT" style="padding:2px; margin:2px;">Number of<br>abortion clinics: </td><td style="padding:2px; margin:2px;"><br><strong>{point.clinic}</strong></td></tr></table>'
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
            'hc-a2': '<i>AL*</i>',
            name: 'Alabama*',
            region: 'South',
            x: 6,
            y: 7,
            value: parseFloat(DATA[0].value),
            legend: DATA[0].legend,
            infant: DATA[0].infant,
            clinic: DATA[0].clinic
        }, {
            'hc-a2': 'AK',
            name: 'Alaska',
            region: 'West',
            x: 0,
            y: 0,
            value: parseFloat(DATA[1].value),
            legend: DATA[1].legend,
            infant: DATA[1].infant,
            clinic: DATA[1].clinic
        }, {
            'hc-a2': 'AZ',
            name: 'Arizona',
            region: 'West',
            x: 5,
            y: 3,
            value: parseFloat(DATA[2].value),
            legend: DATA[2].legend,
            infant: DATA[2].infant,
            clinic: DATA[2].clinic
        }, {
            'hc-a2': '<i>AR*</i>',
            name: 'Arkansas*',
            region: 'South',
            x: 5,
            y: 6,
            value: parseFloat(DATA[3].value),
            legend: DATA[3].legend,
            infant: DATA[3].infant,
            clinic: DATA[3].clinic
        }, {
            'hc-a2': 'CA',
            name: 'California',
            region: 'West',
            x: 5,
            y: 2,
            value: parseFloat(DATA[4].value),
            legend: DATA[4].legend,
            infant: DATA[4].infant,
            clinic: DATA[4].clinic
        }, {
            'hc-a2': 'CO',
            name: 'Colorado',
            region: 'West',
            x: 4,
            y: 3,
            value: parseFloat(DATA[5].value),
            legend: DATA[5].legend,
            infant: DATA[5].infant,
            clinic: DATA[5].clinic
        }, {
            'hc-a2': 'CT',
            name: 'Connecticut',
            region: 'Northeast',
            x: 3,
            y: 11,
            value: parseFloat(DATA[6].value),
            legend: DATA[6].legend,
            infant: DATA[6].infant,
            clinic: DATA[6].clinic
        }, {
            'hc-a2': 'DE',
            name: 'Delaware',
            region: 'South',
            x: 4,
            y: 9,
            value: parseFloat(DATA[7].value),
            legend: DATA[7].legend,
            infant: DATA[7].infant,
            clinic: DATA[7].clinic
        }, {
            'hc-a2': 'DC',
            name: 'District of Columbia',
            region: 'South',
            x: 4,
            y: 10,
            value: parseFloat(DATA[8].value),
            legend: DATA[8].legend,
            infant: DATA[8].infant,
            clinic: DATA[8].clinic
        }, {
            'hc-a2': 'FL',
            name: 'Florida',
            region: 'South',
            x: 8,
            y: 8,
            value: parseFloat(DATA[9].value),
            legend: DATA[9].legend,
            infant: DATA[9].infant,
            clinic: DATA[9].clinic
        }, {
            'hc-a2': '<i>GA*</i>',
            name: 'Georgia*',
            region: 'South',
            x: 7,
            y: 8,
            value: parseFloat(DATA[10].value),
            legend: DATA[10].legend,
            infant: DATA[10].infant,
            clinic: DATA[10].clinic
        }, {
            'hc-a2': 'HI',
            name: 'Hawaii',
            region: 'West',
            x: 8,
            y: 0,
            value: parseFloat(DATA[11].value),
            legend: DATA[11].legend,
            infant: DATA[11].infant,
            clinic: DATA[11].clinic
        }, {
            'hc-a2': 'ID',
            name: 'Idaho',
            region: 'West',
            x: 3,
            y: 2,
            value: parseFloat(DATA[12].value),
            legend: DATA[12].legend,
            infant: DATA[12].infant,
            clinic: DATA[12].clinic
        }, {
            'hc-a2': 'IL',
            name: 'Illinois',
            region: 'Midwest',
            x: 3,
            y: 6,
            value: parseFloat(DATA[13].value),
            legend: DATA[13].legend,
            infant: DATA[13].infant,
            clinic: DATA[13].clinic
        }, {
            'hc-a2': 'IN',
            name: 'Indiana',
            region: 'Midwest',
            x: 3,
            y: 7,
            value: parseFloat(DATA[14].value),
            legend: DATA[14].legend,
            infant: DATA[14].infant,
            clinic: DATA[14].clinic
        }, {
            'hc-a2': 'IA',
            name: 'Iowa',
            region: 'Midwest',
            x: 3,
            y: 5,
            value: parseFloat(DATA[15].value),
            legend: DATA[15].legend,
            infant: DATA[15].infant,
            clinic: DATA[15].clinic
        }, {
            'hc-a2': 'KS',
            name: 'Kansas',
            region: 'Midwest',
            x: 5,
            y: 5,
            value: parseFloat(DATA[16].value),
            legend: DATA[16].legend,
            infant: DATA[16].infant,
            clinic: DATA[16].clinic
        }, {
            'hc-a2': '<i>KY*</i>',
            name: 'Kentucky*',
            region: 'South',
            x: 4,
            y: 6,
            value: parseFloat(DATA[17].value),
            legend: DATA[17].legend,
            infant: DATA[17].infant,
            clinic: DATA[17].clinic
        }, {
            'hc-a2': '<i>LA*</i>',
            name: 'Louisiana*',
            region: 'South',
            x: 6,
            y: 5,
            value: parseFloat(DATA[18].value),
            legend: DATA[18].legend,
            infant: DATA[18].infant,
            clinic: DATA[18].clinic
        }, {
            'hc-a2': 'ME',
            name: 'Maine',
            region: 'Northeast',
            x: 0,
            y: 11,
            value: parseFloat(DATA[19].value),
            legend: DATA[19].legend,
            infant: DATA[19].infant,
            clinic: DATA[19].clinic
        }, {
            'hc-a2': 'MD',
            name: 'Maryland',
            region: 'South',
            x: 4,
            y: 8,
            value: parseFloat(DATA[20].value),
            legend: DATA[20].legend,
            infant: DATA[20].infant,
            clinic: DATA[20].clinic
        }, {
            'hc-a2': 'MA',
            name: 'Massachusetts',
            region: 'Northeast',
            x: 2,
            y: 10,
            value: parseFloat(DATA[21].value),
            legend: DATA[21].legend,
            infant: DATA[21].infant,
            clinic: DATA[21].clinic
        }, {
            'hc-a2': 'MI',
            name: 'Michigan',
            region: 'Midwest',
            x: 2,
            y: 7,
            value: parseFloat(DATA[22].value),
            legend: DATA[22].legend,
            infant: DATA[22].infant,
            clinic: DATA[22].clinic
        }, {
            'hc-a2': 'MN',
            name: 'Minnesota',
            region: 'Midwest',
            x: 2,
            y: 4,
            value: parseFloat(DATA[23].value),
            legend: DATA[23].legend,
            infant: DATA[23].infant,
            clinic: DATA[23].clinic
        }, {
            'hc-a2': '<i>MS*</i>',
            name: 'Mississippi*',
            region: 'South',
            x: 6,
            y: 6,
            value: parseFloat(DATA[24].value),
            legend: DATA[24].legend,
            infant: DATA[24].infant,
            clinic: DATA[24].clinic
        }, {
            'hc-a2': '<i>MO*</i>',
            name: 'Missouri*',
            region: 'Midwest',
            x: 4,
            y: 5,
            value: parseFloat(DATA[25].value),
            legend: DATA[25].legend,
            infant: DATA[25].infant,
            clinic: DATA[25].clinic
        }, {
            'hc-a2': 'MT',
            name: 'Montana',
            region: 'West',
            x: 2,
            y: 2,
            value: parseFloat(DATA[26].value),
            legend: DATA[26].legend,
            infant: DATA[26].infant,
            clinic: DATA[26].clinic
        }, {
            'hc-a2': 'NE',
            name: 'Nebraska',
            region: 'Midwest',
            x: 4,
            y: 4,
            value: parseFloat(DATA[27].value),
            legend: DATA[27].legend,
            infant: DATA[27].infant,
            clinic: DATA[27].clinic
        }, {
            'hc-a2': 'NV',
            name: 'Nevada',
            region: 'West',
            x: 4,
            y: 2,
            value: parseFloat(DATA[28].value),
            legend: DATA[28].legend,
            infant: DATA[28].infant,
            clinic: DATA[28].clinic
        }, {
            'hc-a2': 'NH',
            name: 'New Hampshire',
            region: 'Northeast',
            x: 1,
            y: 11,
            value: parseFloat(DATA[29].value),
            legend: DATA[29].legend,
            infant: DATA[29].infant,
            clinic: DATA[29].clinic
        }, {
            'hc-a2': 'NJ',
            name: 'New Jersey',
            region: 'Northeast',
            x: 3,
            y: 10,
            value: parseFloat(DATA[30].value),
            legend: DATA[30].legend,
            infant: DATA[30].infant,
            clinic: DATA[30].clinic
        }, {
            'hc-a2': 'NM',
            name: 'New Mexico',
            region: 'West',
            x: 6,
            y: 3,
            value: parseFloat(DATA[31].value),
            legend: DATA[31].legend,
            infant: DATA[31].infant,
            clinic: DATA[31].clinic
        }, {
            'hc-a2': 'NY',
            name: 'New York',
            region: 'Northeast',
            x: 2,
            y: 9,
            value: parseFloat(DATA[32].value),
            legend: DATA[32].legend,
            infant: DATA[32].infant,
            clinic: DATA[32].clinic
        }, {
            'hc-a2': 'NC',
            name: 'North Carolina',
            region: 'South',
            x: 5,
            y: 9,
            value: parseFloat(DATA[33].value),
            legend: DATA[33].legend,
            infant: DATA[33].infant,
            clinic: DATA[33].clinic
        }, {
            'hc-a2': 'ND',
            name: 'North Dakota',
            region: 'Midwest',
            x: 2,
            y: 3,
            value: parseFloat(DATA[34].value),
            legend: DATA[34].legend,
            infant: DATA[34].infant,
            clinic: DATA[34].clinic
        }, {
            'hc-a2': '<i>OH*</i>',
            name: 'Ohio*',
            region: 'Midwest',
            x: 3,
            y: 8,
            value: parseFloat(DATA[35].value),
            legend: DATA[35].legend,
            infant: DATA[35].infant,
            clinic: DATA[35].clinic
        }, {
            'hc-a2': 'OK',
            name: 'Oklahoma',
            region: 'South',
            x: 6,
            y: 4,
            value: parseFloat(DATA[36].value),
            legend: DATA[36].legend,
            infant: DATA[36].infant,
            clinic: DATA[36].clinic
        }, {
            'hc-a2': 'OR',
            name: 'Oregon',
            region: 'West',
            x: 4,
            y: 1,
            value: parseFloat(DATA[37].value),
            legend: DATA[37].legend,
            infant: DATA[37].infant,
            clinic: DATA[37].clinic
        }, {
            'hc-a2': 'PA',
            name: 'Pennsylvania',
            region: 'Northeast',
            x: 3,
            y: 9,
            value: parseFloat(DATA[38].value),
            legend: DATA[38].legend,
            infant: DATA[38].infant,
            clinic: DATA[38].clinic
        }, {
            'hc-a2': 'RI',
            name: 'Rhode Island',
            region: 'Northeast',
            x: 2,
            y: 11,
            value: parseFloat(DATA[39].value),
            legend: DATA[39].legend,
            infant: DATA[39].infant,
            clinic: DATA[39].clinic
        }, {
            'hc-a2': 'SC',
            name: 'South Carolina',
            region: 'South',
            x: 6,
            y: 8,
            value: parseFloat(DATA[40].value),
            legend: DATA[40].legend,
            infant: DATA[40].infant,
            clinic: DATA[40].clinic
        }, {
            'hc-a2': 'SD',
            name: 'South Dakota',
            region: 'Midwest',
            x: 3,
            y: 4,
            value: parseFloat(DATA[41].value),
            legend: DATA[41].legend,
            infant: DATA[41].infant,
            clinic: DATA[41].clinic
        }, {
            'hc-a2': 'TN',
            name: 'Tennessee',
            region: 'South',
            x: 5,
            y: 7,
            value: parseFloat(DATA[42].value),
            legend: DATA[42].legend,
            infant: DATA[42].infant,
            clinic: DATA[42].clinic
        }, {
            'hc-a2': 'TX',
            name: 'Texas',
            region: 'South',
            x: 7,
            y: 4,
            value: parseFloat(DATA[43].value),
            legend: DATA[43].legend,
            infant: DATA[43].infant,
            clinic: DATA[43].clinic
        }, {
            'hc-a2': '<i>UT*</i>',
            name: 'Utah*',
            region: 'West',
            x: 5,
            y: 4,
            value: parseFloat(DATA[44].value),
            legend: DATA[44].legend,
            infant: DATA[44].infant,
            clinic: DATA[44].clinic
        }, {
            'hc-a2': 'VT',
            name: 'Vermont',
            region: 'Northeast',
            x: 1,
            y: 10,
            value: parseFloat(DATA[45].value),
            legend: DATA[45].legend,
            infant: DATA[45].infant,
            clinic: DATA[45].clinic
        }, {
            'hc-a2': 'VA',
            name: 'Virginia',
            region: 'South',
            x: 5,
            y: 8,
            value: parseFloat(DATA[46].value),
            legend: DATA[46].legend,
            infant: DATA[46].infant,
            clinic: DATA[46].clinic
        }, {
            'hc-a2': 'WA',
            name: 'Washington',
            region: 'West',
            x: 2,
            y: 1,
            value: parseFloat(DATA[47].value),
            legend: DATA[47].legend,
            infant: DATA[47].infant,
            clinic: DATA[47].clinic
        }, {
            'hc-a2': 'WV',
            name: 'West Virginia',
            region: 'South',
            x: 4,
            y: 7,
            value: parseFloat(DATA[48].value),
            legend: DATA[48].legend,
            infant: DATA[48].infant,
            clinic: DATA[48].clinic
        }, {
            'hc-a2': 'WI',
            name: 'Wisconsin',
            region: 'Midwest',
            x: 2,
            y: 5,
            value: parseFloat(DATA[49].value),
            legend: DATA[49].legend,
            infant: DATA[49].infant,
            clinic: DATA[49].clinic
        }, {
            'hc-a2': 'WY',
            name: 'Wyoming',
            region: 'West',
            x: 3,
            y: 3,
            value: parseFloat(DATA[50].value),
            legend: DATA[50].legend,
            infant: DATA[50].infant,
            clinic: DATA[50].clinic
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
