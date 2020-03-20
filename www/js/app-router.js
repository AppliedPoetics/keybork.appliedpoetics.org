$.fn.transmit = function() {
  $.ajax({
    url: 'php/Handler.php',
    type: 'POST',
    timeout: 600000,
    data: this[0],
    dataType: 'text',
    success: function(data){
      data = $.parseJSON(data);
      $(document).off('keypress');
      $(document).keypress(function(key) {
        var code = key.which;
        if($.inArray(code,data.letters) !== -1) {
          return false;
        }
      });
      if ( $('#diff-status').length ) {
        $('#diff-status').text(data.diff);
      } else {
        $('#diff-level').append(
          '<button id = "diff-status" class = "drop-btn">' + data.diff + '</button>',
        );
        $('#diff-status').on('click',function() {
          // TODO: Create a modal?
        });
      }
    },
    error: function(xhr,ajaxOptions,thrownError){
        console.log(xhr.status + " " + xhr.responseText);
    }
  });
}