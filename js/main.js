$(function(){
  $(".header").load("header.html", updateNavbar);
  $(".footer").load("footer.html");
});

var updateNavbar = function() {
  $('.nav').find('.active').removeClass('active');
  $('.nav li a').each(function () {
      if (this.href == window.location) {
          $(this).parent().addClass('active');
      }
  });
}
