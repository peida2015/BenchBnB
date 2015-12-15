var React = require('react');
var ApiUtil = require('../util/ApiUtil');

var BenchForm = React.createClass({
  getInitialState: function () {
    return ({description:"", lat:"", lng:""})
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var data = { bench: { description: e.target.children[2].value,
      lat: parseFloat(e.target.children[5].value),
      lng: parseFloat(e.target.children[8].value),
      seating: 5
    }};

    ApiUtil.createBench(data);
  },

  render: function () {
    // debugger
    var lat = this.props.location.query[0] ? this.props.location.query[0] : "";
    var lng = this.props.location.query[1] ? this.props.location.query[1] : "";

    return(
      <form name="bench" onSubmit={ this.handleSubmit}>
        <h3>Create a New Bench</h3>
        <h4>Description:</h4>
        <input type="text" name="description">
        </input><br></br>
        <h4>Latitude:</h4>
        <input type="text" value={lat} name="lat">
        </input><br></br>
        <h4>Longitude:</h4>
        <input type="text" value={lng} name="lng">
        </input>
        <input type="submit"></input>
      </form>
    );
  }
});

module.exports = BenchForm
