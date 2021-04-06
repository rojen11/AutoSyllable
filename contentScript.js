let post = true;

document.addEventListener("keyup", function (e) {
  if (e.key != "Enter" && e.key != "Backspace" && e.key != " ") {
    return;
  }

  $("#textbox_hid").val(
    $("#syl_input").html().replace(/\r\n/g, "<br>").replace(/\n/g, "<br>")
  );

  const data = $("#form_submit").serialize();

  if (post){
      $.post("/syllable_counter/", data).done(function(result, status_text, xhr) {
          if (xhr.status == 200) {
              const el = $(result);
              $('#foot_M').html($('#foot_M', el).html());
              $('#syl_result').html($('#syl_result', el).html());
          }
    
      })
      post = false;
      setTimeout(function(){post = true}, 5000)
  }


});
