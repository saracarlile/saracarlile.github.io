$(document).ready(function () {
    $('#submit-btn').click(function (e) {
        e.preventDefault();  //prevent page reload
        console.log('click');
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
            var senderSubject= document.getElementById("senderSubject").value;
            var senderMessage = document.getElementById("senderInputMessage").value;
            console.log(senderEmail, senderSubject, senderMessage);





    });



});