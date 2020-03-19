$.fn.transmit = function() {
  $.ajax({
    url: 'php/Handler.php',
    type: 'POST',
    timeout: 600000,
    data: this[0],
    dataType: 'text',
    success: function(data){
        data = $.parseJSON(data);
        $(document).keypress(function(key) {
          var code = key.which;
          if($.inArray(code,data.letters) !== -1) {
            return false;
          }
        });
    },
    error: function(xhr,ajaxOptions,thrownError){
        console.log(xhr.status + " " + xhr.responseText);
    }
  });
}