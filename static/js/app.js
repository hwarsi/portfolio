$(document).ready(function() {
$("#submit").click(function(){
   var name = $("#name").val();
   var email = $("#em").val();
   var details = $("#details").val();
   var numbers = [0,1,2,3,4,5,6,7,8,9]
   var letters = /^[a-zA-Z\s]+$/; 
   var message = $('#message').val();
   $("#error").empty();
   if (name === '' || email === '') {
       alert("Please Fill Required Fields");
       valid = false;
   } else {
       console.log('Your information has been received, we will contact you soon');
   } 
       var baseURL = window.location.origin;

   // Ajax goes here
   
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
});
});


/*
var form_data = {'name':name, 'email':email};
var Post_URL = baseURL + '/postcontactform';

$.ajax({
   method: 'POST',
   url: Post_URL,
   data: JSON.stringify(form_data),
   contentType: "application/json",
   dataType: 'json',
   success: function(msg) {
       console.log(msg)
       alert('SUCCESS REACHED API!');
   },
   error: function(error) {
       console.log(error);
   }
});
});
});
*/

var maxlength = 500;
$('textarea').keyup(function() {
var length = $(this).val().length;
var length = maxlength-length;
$('#characters').text(length);
});

$("#next").each( function(){
   var Buttoncounter = 0;
   var app1 = $("#app1")
   var app2 = $("#app2");
   var app3 = $("#app3");
   var app4 = $("#app4");
  
   $("#next").click( function(){
      Buttoncounter++;
      if (Buttoncounter === 1) {
         app2.show();
         app1.hide();
     }
  if (Buttoncounter === 2) {
       app3.show();
       app2.hide();
  }
   if (Buttoncounter === 3) {
       app4.show();
       app3.hide();
   }
   if (Buttoncounter === 4) {
    $("#next").each( function(){
        var Buttoncounter = 0;
        var app1 = $("#app1")
        var app2 = $("#app2");
        var app3 = $("#app3");
        var app4 = $("#app4");
  
   $("#next").click( function(){
        Buttoncounter++;
        if (Buttoncounter === 1) {
             app2.hide();
            app1.show();
            app3.hide();
            app4.hide();
     }
  if (Buttoncounter === 2) {
       app3.hide();
       app2.show();
       app1.hide();
       app4.hide();
  }
   if (Buttoncounter === 3) {
       app4.hide();
       app3.show();
       app2.hide();
       app1.hide();
   }
   if (Buttoncounter === 4) {
       app4.show();
       app3.hide();
       app2.hide();
       app1.hide(); 
   }
});
  });
   }
});
  });
