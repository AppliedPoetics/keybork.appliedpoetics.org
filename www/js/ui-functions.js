$(document).ready(function(){
  $('.dropdown').on('mouseenter',function() {
    $(this).css('background','rgba(3,166,150, 1)');
    $(this).css('color','rgba(255,255,255,1)');
  });
  $('.dropdown').on('mouseleave',function() {
    $(this).css('background','rgba(242,242,242, 1)');
    $(this).css('color','rgba(34,2,0, 1)');
  });
  $('.drop-btn').on('mouseenter',function() {
    $(this).siblings('.dropdown-content').css('display','');
  });
  $('.modal-window').on('focusout',function(e) {
    if(e.relatedTarget.tagName == 'A') {
      // Do nothing!
    } else {
      $(this).hide();
    }
  });
  $('.drop-btn').on('click', function() {
    var method = $(this).attr('data-method');
    if ( method ) {
      $('#' + method).show();
      $('#' + method).focus();
    }
  });
});
