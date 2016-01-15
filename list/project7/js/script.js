$(document).ready(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto();
  });
$(document).ready(function() {
    $('.parent').click(function() {
        $('.sub-nav').toggleClass('visible');
    });
});
