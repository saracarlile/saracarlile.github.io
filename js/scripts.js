$(document).ready(function () {
    $('#submit-btn').click(function () {
        console.log('click');
        emailjs.send('gmail', 'template_wyC99JVG', {
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
            );

    });



});