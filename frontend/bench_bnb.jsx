var React = require('react');
var ReactDOM = require('react-dom');
// var Index = require('./components/index');
var BenchStore = require('./stores/bench');
var Search = require('./components/search');
// var ApiUtil = require('./util/api_util');
// var ApiActions = require('./actions/api/ApiActions');



$(function () {

  var root = document.getElementById("root");
  ReactDOM.render(<Search />, root)
});
