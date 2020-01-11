$(function() {
  $("#SeasonSelector").change(function() {
    $(".SeasonX").hide(), $("#" + $(this).val()).show()
  })
}), $(document).keydown(function(e) {
  return 123 != e.keyCode && ((!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && void 0)
});
