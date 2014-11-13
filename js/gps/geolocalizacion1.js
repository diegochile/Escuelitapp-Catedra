function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(-33.553484, -70.589390)
  }
  var map = new google.maps.Map(document.getElementById('map-container'),
                                mapOptions);

  setMarkers(map, beaches);
}

/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var beaches = [
  ///['Philips Costeau', -33.553558, -70.591338],
  ['Andrew Carniege', -33.553558, -70.589160],
  ///['London College', -33.553562, -70.593152],
];

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: 'assets/img/colegio.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    
      ///size: new google.maps.Size(20, 32),
    // The origin for this image is 0,0.
    
      ///origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    
      //anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [-33.553575, -70.592363],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3]
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);