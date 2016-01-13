$(document).ready(function() {
  /* Add classes to p width image */
  $('p:has(img)').each(function() {
    var imgClass = $(this).find('img').attr('class');

    $(this).addClass('p-img ' + imgClass);

    if($(this).hasClass('img-border')) {
      $(this).find('img').wrap('<div class="img-container">');
    }
  });

  /* Start anim class */
  $('.animated').click(function() {
    $(this).toggleClass('playing');
  });

  /* Toggle grid */
  $('.grid-toggle').click(function() {
    $('body').toggleClass('grid-on');
    return false;
  });
});
