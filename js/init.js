$('form#contactForm button.submit').click(function() {

    $('#image-loader').fadeIn();

    var contactName = $('#contactForm #Name').val();
    var contactEmail = $('#contactForm #Email').val();
    var contactSubject = $('#contactForm #Subject').val();
    var contactMessage = $('#contactForm #Message').val();

    var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
             '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

    $.ajax({

        type: "POST",
        url: "inc/sendEmail.php",
        data: data,
        success: function(msg) {

          // Message was sent
          if (msg == 'OK') {
             $('#image-loader').fadeOut();
             $('#message-warning').hide();
             $('#contactForm').fadeOut();
             $('#message-success').fadeIn();   
          }
          // There was an error
          else {
             $('#image-loader').fadeOut();
             $('#message-warning').html(msg);
              $('#message-warning').fadeIn();
          }

        }

    });
    return false;
 });