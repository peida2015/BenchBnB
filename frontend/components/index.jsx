var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/ApiUtil');

var Index = React.createClass ({
  getInitialState: function () {
    return ({ benches: BenchStore.all() })
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    BenchStore.addListener(this._onChange);
  },

  render: function () {
    var benches = this.state.benches.map (function (bench, idx) {
      return <div key={ idx }>
        { bench.description }
        { bench.lat }
        { bench.lng }
        </div>
    })
    return (
      <div>
        { benches }
      </div>
    );
  }
});

module.exports = Index;
