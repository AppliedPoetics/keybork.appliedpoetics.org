$(document).ready(function() {
  $('.dropdown-content a').on('click', function() {
    var json = {
      "cmd":"keybork",
      "param":$(this).attr('data-method').toLowerCase(),
      "text":$('#editContent').val()
    }
    $(json).transmit();
    $(this).parent().hide();
  });
});