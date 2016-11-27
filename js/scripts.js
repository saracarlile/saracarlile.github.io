$(document).ready(function () {
    $('#submit-btn').click(function (e) {
        e.preventDefault();  //prevent page reload
        $('.alert').hide();


        var senderEmail = document.getElementById("senderEmail").value;
        var senderName = document.getElementById("senderName").value;
        var senderSubject = document.getElementById("senderSubject").value;
        var senderMessage = document.getElementById("senderInputMessage").value;
        console.log(senderEmail, senderSubject, senderMessage);
        var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        function validate() {
            var count = 0;
            if (emailRegEx.test(senderEmail)) {  //validate email address
                count += 1;
            }
            else {
                $('.alert').text('Please enter a valid email address.');
                $('.alert').show();
                $('#senderEmail').focus();
                return false;
            }
            if (senderName === "") {
                $('.alert').text('Please enter your name.');
                $('.alert').show();
                $('#senderName').focus();
                return false;
            }
            else {
                count += 1;
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
                $('#senderInputMessage').focus();
                return false;
            }
            else {
                count += 1;
            }
            if (count === 4) {
                return true;
            }
            else {
                return false;
            }
        }
        var result = validate();
        if (result) {
             $('.alert').text('Sending email....please wait for confirmation.');
             $('.alert').show();
            emailjs.send('gmail', 'template_wyC99JVG', {
                sender: senderEmail,
                name: senderName,
                subject: senderSubject,
                message: senderMessage
            })
                .then(
                function (response) {
                    //      console.log('SUCCESS', response);
                    $('.alert').text('Message sent!');
                },
                function (error) {
                    //       console.log('FAILED', error);
                    $('.alert').text('Message failed!  ' + error);
                    $('.alert').show();
                }
                );
            $('#contactForm').each(function () {
                this.reset();
            });
        }

    });



});