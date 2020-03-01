
$(document).ready(function() {

    $("#submit").click(function(){
        var name = $("#name").val();
        var email = $("#em").val();
        var details = $("#details").val();
        var details = $("#subject").val();
        var where = $("#where").val();
        var reason = $("#reason").val();

        // Validations
        if (name === '' || email === '') {
            alert("Please Fill Required Fields");
            return false;
        } 
        if (!email.includes("@")) {
            alert("Please enter your a valid email");
            return false;
        } 

        var form_data = {'name':name, 'email':email, 'where':where, 'details':details, 'reason':reason};

        var baseURL = window.location.origin;           //Gets current location Ex. 127.0.0.1:5000
        var Post_URL = baseURL + '/postContactForm';

        $.ajax({
            method: 'POST',
            url: Post_URL,
            data: JSON.stringify(form_data),
            contentType: "application/json",
            dataType: 'json',
            success: function(msg) {
                console.log(msg)   // msg is the data from the backend
                console.log('SUCCESS REACHED API!');
                if (msg === 'Failed') {
                    alert ('Try again later! Failed to receive info!')
                } else {
                    alert('Your information has been received, we will contact you soon');
                }
            },
            error: function(error) {
                console.log(error);
                alert('FAILED TO REACH API!');
            }
        });
    });

    // Shows how many characters are remaning
    var maxlength = 500;
    $('textarea').keyup(function() {
        var length = $(this).val().length;
        var length = maxlength-length;
        $('#characters').text(length);
    });
});

// GET REQUEST EXAMPLE
var baseURL = window.location.origin;
var mainURL = baseURL + '/contactform';

$.ajax({
    method: 'GET',
    url: mainURL,
    success: function(serverData) {
        console.log(serverData);
    },
    error: function(error) {
        console.log(error);
    }
});


