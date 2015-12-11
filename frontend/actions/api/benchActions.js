var React = require('react');
var Dispatcher = ('../dispatcher/dispatcher');

var benchActions = {
  receiveBenches: function (benches) {
    Dispatcher.dispatch({
      actionType: benchConstants.BENCHES_RECEIVED,
      benches: benches
    })
  }
};

module.exports = benchActions;
