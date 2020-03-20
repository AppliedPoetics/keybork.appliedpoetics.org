$(document).ready(function(){
    $('#loading img').css({marginLeft: ($(document).width() - 101)/2 + "px", 
                           marginTop: ($(document).height()/2.5) +"px"});
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
});