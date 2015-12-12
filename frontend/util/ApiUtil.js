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
  }
}

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
