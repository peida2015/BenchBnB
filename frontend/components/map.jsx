var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/ApiUtil');

var Map = React.createClass({

  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    }
    this.map = new google.maps.Map(map, mapOptions);
    this.listenForMove();
  },

  fetchFresh: function () {
    this.map.
  },

  addBench: function (bench) {
    console.log("addBench");
    var pos = new google.maps.LatLng(bench.lat, bench.lng);

    marker = new google.maps.Marker({
      position: pos,
      map: this.map
    })
  },

  listenForMove: function () {
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function () {
      var northEast = that.map.getBounds().getNorthEast();
      var southWest = that.map.getBounds().getSouthWest();

      var bounds = {
        "bounds": {
          "northEast": { "lat": northEast.lat(), "lng": northEast.lng() },
          "southWest": { "lat": southWest.lat(), "lng": southWest.lng() }
        }
      };

      ApiUtil.fetchBenches(bounds);
      // BenchStore.all().forEach(function (bench) {
      //   // console.log(bench);
      //   if (that.isInbound(bench, that.map.getBounds())) {
      //     that.addBench(bench);
      //   }
      // });
      that._updateMarkers();
    })
  },

  _updateMarkers: function () {
    var that = this;
    BenchStore.all().forEach(function (bench) {
      that.addBench(bench);
    });
  },

  render: function () {
    return (
      <div className="map" ref="map">

      </div>
    );
  }
});

module.exports = Map;


// "AIzaSyCegyqDoDiJ8gPAf73rUTlyOAy-xAzgBno"







// isInbound: function (bench, bounds) {
//   var northEast = bounds.getNorthEast();
//   var southWest = bounds.getSouthWest();
//
//   var betweenLats = bench.lat < northEast.lat() && bench.lat > southWest.lat();
//   var betweenLngs = bench.lng < northEast.lng() && bench.lng > southWest.lng();
//
//   if (betweenLats && betweenLngs) {
//     return true;
//   } else {
//     return false;
//   }
// },
