$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $(".letter").hide();

    $("span.name").text($("#name").val());

    $(".letter").fadeIn();

    event.preventDefault();
  });
});
