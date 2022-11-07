function toggleHamburger(e) {
  e.preventDefault();
  var nav = $('#main-nav');
  if(!(nav.hasClass('open'))) {
    nav.addClass('open');
    $(this).attr('aria-expanded', 'true');
    //$('dialog.mobile-nav').removeAttr('open');
  } else {
    nav.removeClass('open');
    $(this).attr('aria-expanded', 'false');
    //$('dialog.mobile-nav').attr('open', 'true');
  }
}

jQuery(document).ready(function($) {
  $('.mobile-btn, dialog.mobile-nav .close').on('click', toggleHamburger);

})