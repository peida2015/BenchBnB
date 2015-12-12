var React = require('react');
var Dispatcher = require('../../dispatcher/dispatcher');
var BenchConstants = require('../../constants/ApiConstants');

var ApiActions = {
  receiveAll: function (benches) {
    // console.log(benches);
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    })
  }
};

module.exports = ApiActions;
