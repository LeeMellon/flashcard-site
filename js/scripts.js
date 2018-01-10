
$(function(){
  $(".card").click(function(){
    $(this).children(".front").toggle();
    $(this).children(".back").toggle();
  });
});
