
var CartoDB = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
});


var map = L.map('graphic');


$.getJSON("js/nebraska_co.json", function(data) {

  geojson = L.geoJson(data, {

  style: function (feature) {
      return {
        fillColor: getColor(feature.properties.percu138_nointotalpop),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '',
        fillOpacity: 0.8
      };
    },

      onEachFeature: function (feature, layer) {
        layer.bindPopup(
        '<h5><strong>' + feature.properties.NAME + ' County</strong></h5><table class="mapTable table-hover table-striped table-condensed"><tbody><tr><td><strong>Percent under 1.38% with no insurance:</strong></td><td>' + feature.properties.percu138_nointotalpop + '%</td></tr><tr><td>Total county pop.:</td><td>' + feature.properties.totalpop + '</td></tr><tr><td><strong>Total uninsured,<br>under 1.38%:</strong></td><td>' + feature.properties.u138_total_noin + '</td></tr></tbody></table>', {maxWidth: 210} );
      }

    });


    // get color depending
    function getColor(d) {
      return d > 5.4 ? '#0072bc' :
             d > 4.1 ? '#82a7c7' :
             d > 3.4 ? '#9ddcf9' :
             d > 2.2 ? '#cee5b7' :
             d > 0 ?  '#fff9b8' :
                    '#FFFFFF' ;
      }


map.setView(new L.LatLng(41.68, -99.6),6);
map.addLayer(CartoDB);
geojson.addTo(map);

});
