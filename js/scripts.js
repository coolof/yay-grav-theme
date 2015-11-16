$(document).ready(function(){
  $('p:has(img)').addClass('p-img');

  $('p:has(img)').each(function() {
    var imgClass = $(this).find('img').attr('class');

    console.log(imgClass);
    $(this).addClass('p-img ' + imgClass);
  });
});
