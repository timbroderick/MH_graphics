Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

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
            to: 10,
            color: '#67B4A5',
            name: 'Increase'
        }, {
            from: -4.5,
            to: 0,
            color: '#FFCE7B',
            name: 'Less than 4% drop'
        }, {
            from: -8.0,
            to: -4.5,
            color: '#DF896F',
            name: '4% to 8% drop'
        }, {
            from: -20,
            to: -8.0,
            color: '#AE1B1F',
            name: '> 8% drop'
        }, {
            from: 10,
            to: 12,
            color: "#DDDDDD",
            name: "No Data"
        }]
      },
      tooltip: {
        useHTML: true,
        headerFormat: '<small><b>{point.key}</b></small><br>',
        //headerFormat: '{point.name}',
        pointFormat: '2018 total: <b>{point.y2018}</b><br>2019 total: <b>{point.y2019}</b><br>Percentage change: <b>{point.change}%</b>'
      },
      plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.hc-a2}',
                //color: '#000000',
                style: {
                    textOutline: false
                },
                formatter: function() {
                        var max = this.series.yAxis.max,
                            color =  this.y / max < 0.05 ? 'black' : 'white';
                            //GlobalRotation = this.y / max < 0.05 ? 0 : -90;
                            //GlobalAlign = this.y / max < 0.05 ? 'left' : 'right';
                            //X = this.y / max < 0.05 ? 4 : 4;
                            //Y = this.y / max < 0.05 ? 0 : 5;
                        return '<span style="color: ' + color + '">' + this.y + ' </span>';
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
            y2018: DATA[0].y2018,
            y2019: DATA[0].y2019,
            change: DATA[0].change
        }, {
            'hc-a2': 'AK',
            name: 'Alaska',
            region: 'West',
            x: 0,
            y: 0,
            value: parseFloat(DATA[1].value),
            y2018: DATA[1].y2018,
            y2019: DATA[1].y2019,
            change: DATA[1].change
        }, {
            'hc-a2': 'AZ',
            name: 'Arizona',
            region: 'West',
            x: 5,
            y: 3,
            value: parseFloat(DATA[2].value),
            y2018: DATA[2].y2018,
            y2019: DATA[2].y2019,
            change: DATA[2].change
        }, {
            'hc-a2': 'AR',
            name: 'Arkansas',
            region: 'South',
            x: 5,
            y: 6,
            value: parseFloat(DATA[3].value),
            y2018: DATA[3].y2018,
            y2019: DATA[3].y2019,
            change: DATA[3].change
        }, {
            'hc-a2': 'CA',
            name: 'California',
            region: 'West',
            x: 5,
            y: 2,
            value: parseFloat(DATA[4].value),
            y2018: DATA[4].y2018,
            y2019: DATA[4].y2019,
            change: DATA[4].change
        }, {
            'hc-a2': 'CO',
            name: 'Colorado',
            region: 'West',
            x: 4,
            y: 3,
            value: parseFloat(DATA[5].value),
            y2018: DATA[5].y2018,
            y2019: DATA[5].y2019,
            change: DATA[5].change
        }, {
            'hc-a2': 'CT',
            name: 'Connecticut',
            region: 'Northeast',
            x: 3,
            y: 11,
            value: parseFloat(DATA[6].value),
            y2018: DATA[6].y2018,
            y2019: DATA[6].y2019,
            change: DATA[6].change
        }, {
            'hc-a2': 'DE',
            name: 'Delaware',
            region: 'South',
            x: 4,
            y: 9,
            value: parseFloat(DATA[7].value),
            y2018: DATA[7].y2018,
            y2019: DATA[7].y2019,
            change: DATA[7].change
        }, {
            'hc-a2': 'DC',
            name: 'District of Columbia',
            region: 'South',
            x: 4,
            y: 10,
            value: parseFloat(DATA[8].value),
            y2018: DATA[8].y2018,
            y2019: DATA[8].y2019,
            change: DATA[8].change
        }, {
            'hc-a2': 'FL',
            name: 'Florida',
            region: 'South',
            x: 8,
            y: 8,
            value: parseFloat(DATA[9].value),
            y2018: DATA[9].y2018,
            y2019: DATA[9].y2019,
            change: DATA[9].change
        }, {
            'hc-a2': 'GA',
            name: 'Georgia',
            region: 'South',
            x: 7,
            y: 8,
            value: parseFloat(DATA[10].value),
            y2018: DATA[10].y2018,
            y2019: DATA[10].y2019,
            change: DATA[10].change
        }, {
            'hc-a2': 'HI',
            name: 'Hawaii',
            region: 'West',
            x: 8,
            y: 0,
            value: parseFloat(DATA[11].value),
            y2018: DATA[11].y2018,
            y2019: DATA[11].y2019,
            change: DATA[11].change
        }, {
            'hc-a2': 'ID',
            name: 'Idaho',
            region: 'West',
            x: 3,
            y: 2,
            value: parseFloat(DATA[12].value),
            y2018: DATA[12].y2018,
            y2019: DATA[12].y2019,
            change: DATA[12].change
        }, {
            'hc-a2': 'IL',
            name: 'Illinois',
            region: 'Midwest',
            x: 3,
            y: 6,
            value: parseFloat(DATA[13].value),
            y2018: DATA[13].y2018,
            y2019: DATA[13].y2019,
            change: DATA[13].change
        }, {
            'hc-a2': 'IN',
            name: 'Indiana',
            region: 'Midwest',
            x: 3,
            y: 7,
            value: parseFloat(DATA[14].value),
            y2018: DATA[14].y2018,
            y2019: DATA[14].y2019,
            change: DATA[14].change
        }, {
            'hc-a2': 'IA',
            name: 'Iowa',
            region: 'Midwest',
            x: 3,
            y: 5,
            value: parseFloat(DATA[15].value),
            y2018: DATA[15].y2018,
            y2019: DATA[15].y2019,
            change: DATA[15].change
        }, {
            'hc-a2': 'KS',
            name: 'Kansas',
            region: 'Midwest',
            x: 5,
            y: 5,
            value: parseFloat(DATA[16].value),
            y2018: DATA[16].y2018,
            y2019: DATA[16].y2019,
            change: DATA[16].change
        }, {
            'hc-a2': 'KY',
            name: 'Kentucky',
            region: 'South',
            x: 4,
            y: 6,
            value: parseFloat(DATA[17].value),
            y2018: DATA[17].y2018,
            y2019: DATA[17].y2019,
            change: DATA[17].change
        }, {
            'hc-a2': 'LA',
            name: 'Louisiana',
            region: 'South',
            x: 6,
            y: 5,
            value: parseFloat(DATA[18].value),
            y2018: DATA[18].y2018,
            y2019: DATA[18].y2019,
            change: DATA[18].change
        }, {
            'hc-a2': 'ME',
            name: 'Maine',
            region: 'Northeast',
            x: 0,
            y: 11,
            value: parseFloat(DATA[19].value),
            y2018: DATA[19].y2018,
            y2019: DATA[19].y2019,
            change: DATA[19].change
        }, {
            'hc-a2': 'MD',
            name: 'Maryland',
            region: 'South',
            x: 4,
            y: 8,
            value: parseFloat(DATA[20].value),
            y2018: DATA[20].y2018,
            y2019: DATA[20].y2019,
            change: DATA[20].change
        }, {
            'hc-a2': 'MA',
            name: 'Massachusetts',
            region: 'Northeast',
            x: 2,
            y: 10,
            value: parseFloat(DATA[21].value),
            y2018: DATA[21].y2018,
            y2019: DATA[21].y2019,
            change: DATA[21].change
        }, {
            'hc-a2': 'MI',
            name: 'Michigan',
            region: 'Midwest',
            x: 2,
            y: 7,
            value: parseFloat(DATA[22].value),
            y2018: DATA[22].y2018,
            y2019: DATA[22].y2019,
            change: DATA[22].change
        }, {
            'hc-a2': 'MN',
            name: 'Minnesota',
            region: 'Midwest',
            x: 2,
            y: 4,
            value: parseFloat(DATA[23].value),
            y2018: DATA[23].y2018,
            y2019: DATA[23].y2019,
            change: DATA[23].change
        }, {
            'hc-a2': 'MS',
            name: 'Mississippi',
            region: 'South',
            x: 6,
            y: 6,
            value: parseFloat(DATA[24].value),
            y2018: DATA[24].y2018,
            y2019: DATA[24].y2019,
            change: DATA[24].change
        }, {
            'hc-a2': 'MO',
            name: 'Missouri',
            region: 'Midwest',
            x: 4,
            y: 5,
            value: parseFloat(DATA[25].value),
            y2018: DATA[25].y2018,
            y2019: DATA[25].y2019,
            change: DATA[25].change
        }, {
            'hc-a2': 'MT',
            name: 'Montana',
            region: 'West',
            x: 2,
            y: 2,
            value: parseFloat(DATA[26].value),
            y2018: DATA[26].y2018,
            y2019: DATA[26].y2019,
            change: DATA[26].change
        }, {
            'hc-a2': 'NE',
            name: 'Nebraska',
            region: 'Midwest',
            x: 4,
            y: 4,
            value: parseFloat(DATA[27].value),
            y2018: DATA[27].y2018,
            y2019: DATA[27].y2019,
            change: DATA[27].change
        }, {
            'hc-a2': 'NV',
            name: 'Nevada',
            region: 'West',
            x: 4,
            y: 2,
            value: parseFloat(DATA[28].value),
            y2018: DATA[28].y2018,
            y2019: DATA[28].y2019,
            change: DATA[28].change
        }, {
            'hc-a2': 'NH',
            name: 'New Hampshire',
            region: 'Northeast',
            x: 1,
            y: 11,
            value: parseFloat(DATA[29].value),
            y2018: DATA[29].y2018,
            y2019: DATA[29].y2019,
            change: DATA[29].change
        }, {
            'hc-a2': 'NJ',
            name: 'New Jersey',
            region: 'Northeast',
            x: 3,
            y: 10,
            value: parseFloat(DATA[30].value),
            y2018: DATA[30].y2018,
            y2019: DATA[30].y2019,
            change: DATA[30].change
        }, {
            'hc-a2': 'NM',
            name: 'New Mexico',
            region: 'West',
            x: 6,
            y: 3,
            value: parseFloat(DATA[31].value),
            y2018: DATA[31].y2018,
            y2019: DATA[31].y2019,
            change: DATA[31].change
        }, {
            'hc-a2': 'NY',
            name: 'New York',
            region: 'Northeast',
            x: 2,
            y: 9,
            value: parseFloat(DATA[32].value),
            y2018: DATA[32].y2018,
            y2019: DATA[32].y2019,
            change: DATA[32].change
        }, {
            'hc-a2': 'NC',
            name: 'North Carolina',
            region: 'South',
            x: 5,
            y: 9,
            value: parseFloat(DATA[33].value),
            y2018: DATA[33].y2018,
            y2019: DATA[33].y2019,
            change: DATA[33].change
        }, {
            'hc-a2': 'ND',
            name: 'North Dakota',
            region: 'Midwest',
            x: 2,
            y: 3,
            value: parseFloat(DATA[34].value),
            y2018: DATA[34].y2018,
            y2019: DATA[34].y2019,
            change: DATA[34].change
        }, {
            'hc-a2': 'OH',
            name: 'Ohio',
            region: 'Midwest',
            x: 3,
            y: 8,
            value: parseFloat(DATA[35].value),
            y2018: DATA[35].y2018,
            y2019: DATA[35].y2019,
            change: DATA[35].change
        }, {
            'hc-a2': 'OK',
            name: 'Oklahoma',
            region: 'South',
            x: 6,
            y: 4,
            value: parseFloat(DATA[36].value),
            y2018: DATA[36].y2018,
            y2019: DATA[36].y2019,
            change: DATA[36].change
        }, {
            'hc-a2': 'OR',
            name: 'Oregon',
            region: 'West',
            x: 4,
            y: 1,
            value: parseFloat(DATA[37].value),
            y2018: DATA[37].y2018,
            y2019: DATA[37].y2019,
            change: DATA[37].change
        }, {
            'hc-a2': 'PA',
            name: 'Pennsylvania',
            region: 'Northeast',
            x: 3,
            y: 9,
            value: parseFloat(DATA[38].value),
            y2018: DATA[38].y2018,
            y2019: DATA[38].y2019,
            change: DATA[38].change
        }, {
            'hc-a2': 'RI',
            name: 'Rhode Island',
            region: 'Northeast',
            x: 2,
            y: 11,
            value: parseFloat(DATA[39].value),
            y2018: DATA[39].y2018,
            y2019: DATA[39].y2019,
            change: DATA[39].change
        }, {
            'hc-a2': 'SC',
            name: 'South Carolina',
            region: 'South',
            x: 6,
            y: 8,
            value: parseFloat(DATA[40].value),
            y2018: DATA[40].y2018,
            y2019: DATA[40].y2019,
            change: DATA[40].change
        }, {
            'hc-a2': 'SD',
            name: 'South Dakota',
            region: 'Midwest',
            x: 3,
            y: 4,
            value: parseFloat(DATA[41].value),
            y2018: DATA[41].y2018,
            y2019: DATA[41].y2019,
            change: DATA[41].change
        }, {
            'hc-a2': 'TN',
            name: 'Tennessee',
            region: 'South',
            x: 5,
            y: 7,
            value: parseFloat(DATA[42].value),
            y2018: DATA[42].y2018,
            y2019: DATA[42].y2019,
            change: DATA[42].change
        }, {
            'hc-a2': 'TX',
            name: 'Texas',
            region: 'South',
            x: 7,
            y: 4,
            value: parseFloat(DATA[43].value),
            y2018: DATA[43].y2018,
            y2019: DATA[43].y2019,
            change: DATA[43].change
        }, {
            'hc-a2': 'UT',
            name: 'Utah',
            region: 'West',
            x: 5,
            y: 4,
            value: parseFloat(DATA[44].value),
            y2018: DATA[44].y2018,
            y2019: DATA[44].y2019,
            change: DATA[44].change
        }, {
            'hc-a2': 'VT',
            name: 'Vermont',
            region: 'Northeast',
            x: 1,
            y: 10,
            value: parseFloat(DATA[45].value),
            y2018: DATA[45].y2018,
            y2019: DATA[45].y2019,
            change: DATA[45].change
        }, {
            'hc-a2': 'VA',
            name: 'Virginia',
            region: 'South',
            x: 5,
            y: 8,
            value: parseFloat(DATA[46].value),
            y2018: DATA[46].y2018,
            y2019: DATA[46].y2019,
            change: DATA[46].change
        }, {
            'hc-a2': 'WA',
            name: 'Washington',
            region: 'West',
            x: 2,
            y: 1,
            value: parseFloat(DATA[47].value),
            y2018: DATA[47].y2018,
            y2019: DATA[47].y2019,
            change: DATA[47].change
        }, {
            'hc-a2': 'WV',
            name: 'West Virginia',
            region: 'South',
            x: 4,
            y: 7,
            value: parseFloat(DATA[48].value),
            y2018: DATA[48].y2018,
            y2019: DATA[48].y2019,
            change: DATA[48].change
        }, {
            'hc-a2': 'WI',
            name: 'Wisconsin',
            region: 'Midwest',
            x: 2,
            y: 5,
            value: parseFloat(DATA[49].value),
            y2018: DATA[49].y2018,
            y2019: DATA[49].y2019,
            change: DATA[49].change
        }, {
            'hc-a2': 'WY',
            name: 'Wyoming',
            region: 'West',
            x: 3,
            y: 3,
            value: parseFloat(DATA[50].value),
            y2018: DATA[50].y2018,
            y2019: DATA[50].y2019,
            change: DATA[50].change
        }]
      }]

//End
  });
