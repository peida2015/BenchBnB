var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var benchConstants = require('../constants/ApiConstants');
var _benches = [];

var BenchStore = new Store(AppDispatcher);


BenchStore.all = function () {
    return _benches.slice(0);
  };

BenchStore.resetBenches = function (benches) {
    _benches = benches;
};

BenchStore.__onDispatch = function (payload) {
    switch (payload.actionType) {
    case  benchConstants.BENCHES_RECEIVED:
      console.log("dispatcher");
      var result = this.resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
    }
};


// window.BenchStore = BenchStore;

module.exports = BenchStore
