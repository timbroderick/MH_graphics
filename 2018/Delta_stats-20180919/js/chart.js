
var CartoDB = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
});


var CartoDB2 = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
});


var map = L.map('graphic');//, { zoomControl:false });

var map2 = L.map('graphic2');//, { zoomControl:false });

$.getJSON("js/delta_stats.json", function(data) {

    geojson = L.geoJson(data, {

            style: function (feature) {
                return {
                  fillColor: getColor(feature.properties.median),
                  weight: 1,
                  opacity: 1,
                  color: 'white',
                  dashArray: '',
                  fillOpacity: 0.8
                };
              },

      onEachFeature: function (feature, layer) {
        layer.bindPopup(
        '<h5><strong>' + feature.properties.Geography + '</strong></h5><table class="mapTable table-hover table-striped table-condensed"><tbody><tr><td><strong>Median income: </strong></td><td>$' + feature.properties.median + '</td></tr></tbody></table>', {maxWidth: 210} );
      }

    });

    // get color depending
    function getColor(d) {
      return d > 40239 ? '#028575' :
             d > 36385 ? '#97D5C9' :
             d > 33021 ? '#FFF9B8' :
             d > 29855 ? '#FECF8D' :
             d > 0 ?  '#FAA634' :
                    '#FFFFFF' ;
      }



//map.touchZoom.disable();
//map.doubleClickZoom.disable();
//map.scrollWheelZoom.disable();

map.setView(new L.LatLng(32.6, -90),6);
geojson.addTo(map);
map.addLayer(CartoDB);

// second map2

geojson2 = L.geoJson(data, {

        style: function (feature) {
            return {
              fillColor: getColor2(feature.properties.poverty),
              weight: 1,
              opacity: 1,
              color: 'white',
              dashArray: '',
              fillOpacity: 0.8
            };
          },

  onEachFeature: function (feature, layer) {
    layer.bindPopup(
    '<h5><strong>' + feature.properties.Geography + '</strong></h5><table class="mapTable table-hover table-striped table-condensed"><tbody><tr><td><strong>% poverty level: </strong></td><td>' + feature.properties.poverty + '%</td></tr></tbody></table>', {maxWidth: 210} );
  }

});

// get color depending
function getColor2(d) {
  return d > 26 ? '#FAA634' :
         d > 20 ? '#FECF8D' :
         d > 18 ? '#FFF9B8' :
         d > 15 ? '#97D5C9' :
         d > 0 ?  '#028575' :
                '#FFFFFF' ;
  }



//map2.touchZoom.disable();
//map2.doubleClickZoom.disable();
//map2.scrollWheelZoom.disable();

map2.setView(new L.LatLng(32.6, -90),6);
geojson2.addTo(map2);
map2.addLayer(CartoDB2);

});
