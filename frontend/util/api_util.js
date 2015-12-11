ApiUtil = {
  fetchBenches: function(){
    //make an api call using AJAX in here
    $.ajax({
      type: "GET",
      url: "api/benches",
      success: function (resp) {
        console.log(resp);
      }
    })
  }
}

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
