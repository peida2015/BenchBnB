var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = require('react-router').IndexRoute;

var ReactDOM = require('react-dom');
// var Index = require('./components/index');
// var BenchStore = require('./stores/bench');
var Search = require('./components/search');
var BenchForm = require('./components/BenchForm');
// var ApiUtil = require('./util/api_util');
// var ApiActions = require('./actions/api/ApiActions');


$(function () {
  var root = document.getElementById("root");

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <header><h1>Bench BnB</h1></header>
          { this.props.children }
        </div>
      );
    }
  });

  var router = <Router>
      <Route path ="/" component={App}>
        <IndexRoute component={Search} />
        <Route path='/benches/new' component={BenchForm} />
      </Route>
    </Router>;

  ReactDOM.render(router, root);
});
