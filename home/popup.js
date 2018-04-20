$(function(){
  $('.js-popup-link').click(function(e){
    e.preventDefault();
    // var stateObj = {};
    // history.replaceState(stateObj, "page 2", "requests");
    $('#popup').dialog({modal: true}).dialog('open').load(this.href)
  })
})
