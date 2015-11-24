$(document).ready(function() {
  /* Add classes to p width image */
  $('p:has(img)').each(function() {
    var imgClass = $(this).find('img').attr('class');

    $(this).addClass('p-img ' + imgClass);
  });

  /* Start anim class */
  $('.animated').click(function() {
    $(this).toggleClass('playing');
  });
});
