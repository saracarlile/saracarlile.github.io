$(document).ready(function () {
    $('#submit-btn').click(function (e) {
        e.preventDefault();  //prevent page reload
        $('.alert').hide();
        /*      emailjs.send('gmail', 'template_wyC99JVG', {
                  name: "James",
                  notes: "Check this out!"
              })
                  .then(
                  function (response) {
                      console.log('SUCCESS', response);
                  },
                  function (error) {
                      console.log('FAILED', error);
                  }
                  ); */

        var senderEmail = document.getElementById("senderEmail").value;
        var senderSubject = document.getElementById("senderSubject").value;
        var senderMessage = document.getElementById("senderInputMessage").value;
        console.log(senderEmail, senderSubject, senderMessage);
        var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        function validate() {
            var count = 0;
            if (emailRegEx.test(senderEmail)) {  //validate email address
                count += 1;
                console.log('valid');
            }
            else {
                $('.alert').text('Please enter a valid email address.');
                $('.alert').show();
                $('#senderEmail').focus();
                return false;
            }
            if (senderSubject === "") {
                $('.alert').text('Please enter a subject for your message.');
                $('.alert').show();
                $('#senderSubject').focus();
                return false;
            }
            else {
                count += 1;
            }
            if (senderMessage === "") {
                $('.alert').text('Please enter text for your message.');
                $('.alert').show();
                $('#senderMessage').focus();
                return false;
            }
            else {
                count += 1;
            }
            if (count === 3) {
                return true;
            }
            else {
                return false;
            }
        }
        var result = validate();
        console.log(result);
        if (result) {
            console.log("send email!");
            /*      emailjs.send('gmail', 'template_wyC99JVG', {
                        sender: senderEmail,
                        subject: senderSubject,
                        message: senderMessage
                    })
                        .then(
                        function (response) {
                            console.log('SUCCESS', response);
                        },
                        function (error) {
                            console.log('FAILED', error);
                        }
                        ); */
                        $('#contactForm').each(function(){
                            this.reset();
                        });
        }

    });



});