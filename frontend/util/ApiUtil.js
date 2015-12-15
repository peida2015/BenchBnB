var ApiActions = require('../actions/api/ApiActions');

ApiUtil = {
  fetchBenches: function(bounds){
    //make an api call using AJAX in here
    $.ajax({
      type: "GET",
      url: "api/benches",
      data: bounds,
      success: ApiActions.receiveAll
    })
  },

  createBench: function(bench) {
    console.log("createBench");
    // debugger
    $.ajax({
      type: "POST",
      url: "api/benches",
      data: bench,
      success: function (resp) {
        console.log(resp);
      }
    })
  }
}

module.exports = ApiUtil;
