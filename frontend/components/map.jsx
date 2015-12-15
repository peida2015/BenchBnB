var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/ApiUtil');
// var History = require('react-router').History;


var _markers = [];

var Map = React.createClass({

  // mixins: [History],

  componentDidMount: function () {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    }
    this.map = new google.maps.Map(map, mapOptions);
    BenchStore.addListener(this._updateMarkers);
    this.listenForMove();
    google.maps.event.addListener(this.map, 'click', this.handleClick);
  },

  // componentWillUnmount: function () {
  //   BenchStore.removeListener(this._updateMarkers);
  // },

  handleClick: function (e) {
    // this.history.pushState(null, 'benches/new',);

    this.props.mapClickHandler(e);
  },

  removeMarker: function (marker) {
    var marker_idx = _markers.indexOf(marker);
    if (marker_idx !== -1) {
      marker.setMap(null);
    }
  },

  removeAllBenches: function () {
    var that = this;
    _markers.forEach(function (marker) {
      that.removeMarker(marker);
    });
    this._markers = [];
  },

  deleteMarker: function (marker) {
    var marker_idx = _markers.indexOf(marker);
    if (marker_idx !== -1) {
      _markers.splice(marker_idx, 1);
    }
  },

  addBench: function (bench) {
    console.log("addBench");
    var pos = new google.maps.LatLng(bench.lat, bench.lng);

    var marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    _markers.push(marker);
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
      // that._updateMarkers();
    })
  },

  _updateMarkers: function () {
    this.removeAllBenches();
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
