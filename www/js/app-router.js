$.fn.transmit = function() {
  $.ajax({
    url: 'php/Handler.php',
    type: 'POST',
    timeout: 600000,
    data: this[0],
    dataType: 'text',
    success: function(data){
      data = $.parseJSON(data);
      if(data.text !== '') {
        $('#editContent').val(data.text);
      }
      $(document).off('keydown');
      $(document).on('keydown',function(key) {
        var code = key.which || key.keyCode;
        if($.inArray(code,data.letters) !== -1) {
          return false;
        }
      });
      if ( $('#diff-status').length ) {
        $('#diff-status').text(data.diff);
      } else {
        $('#diff-level').append(
          '<button id = "diff-status" class = "drop-btn">' + data.diff + '</button>'
        );
      }
      $('#diff-modal .modal-text').text('');
      $(data.letters).each(function() {
        var text = $('#diff-modal .modal-text').html();
        $('#diff-modal .modal-text').html(
          text + ' ' + String.fromCharCode(this)
        )
      });
      $('#diff-status').on('click',function() {
        $('#diff-modal').show();
        $('#diff-modal').focus();
      });
    },
    error: function(xhr,ajaxOptions,thrownError){
      console.log(xhr.status + " " + xhr.responseText);
    }
  });
}
