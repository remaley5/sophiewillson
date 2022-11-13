function toggleHamburger(e) {
  e.preventDefault();
  var nav = $('#main-nav');
  if(!(nav.hasClass('open'))) {
    $('.mobile-nav').css('display', 'block');
    setTimeout(function() {
      nav.addClass('open');
      $(this).attr('aria-expanded', 'true');
    }, 100);
    
  } else {
    nav.removeClass('open');
    $(this).attr('aria-expanded', 'false');
    setTimeout(function() {
      $('.mobile-nav').css('display', 'none');
    }, 1000);
  }
}

jQuery(document).ready(function($) {
  $('.mobile-btn, dialog.mobile-nav .close').on('click', toggleHamburger);
});