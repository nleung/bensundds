$(function(){
  $(".header").load("header.html");
  $(".footer").load("footer.html");

  var url = window.location;
  $('.navbar .nav').find('.active').removeClass('active');
  $('.navbar .nav li a').each(function () {
      if (this.href == url) {
          $(this).parent().addClass('active');
      }
  });
});
