var React = require('react');
var ReactDOM = require('react-dom');
var Map = require("./map");
var Index = require('./index');


var Search = React.createClass({
  mapClickHandler: function (coord) {
    debugger
    var latLng = [coord.latLng.lat(), coord.latLng.lng()];
    this.props.history.pushState(null, "benches/new", latLng);
  },

  render: function (){
    console.log("inside Search render");
    return (
      <div>
        Search
        <Map mapClickHandler={ this.mapClickHandler}/>
        <Index />
      </div>
    );
  }
});

module.exports = Search;
