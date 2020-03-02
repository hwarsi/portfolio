// Starting highlight

$(".addNewRow").click(function(){
    // Find the last element in tablerow
    var lastElement = $(this).parent().find('.tablerow').last();
    var lastCounter = lastElement.attr("name");

    // Give new counter value
    var newCounter = lastCounter + 1;

    // Make a new row and it to the table
    var newRow = $(this).parent().find("#newInputRow").clone();
    newRow.attr("name", newCounter);
    newRow.appendTo(".table");
});

$(".add").click(function(){
    var parentEle = $(this).parent();
    var currentCounter = parentEle.attr('name');

    var position_data = parentEle.find("#position").val();
    var company_data = parentEle.find("#company").val();
    var description_data = parentEle.find("#description").val();
    console.log(position_data);
    console.log(company_data);
    console.log(description_data);

    // Validate input data for row
    if (position_data === '' || company_data === '' || description_data === '') {
        alert("Please Fill Required Fields");
        return false;
    }

    // Send row data to backend to be saved
    var new_job_data = {'position':position_data, 'company':company_data, 'description':description_data};
    var baseURL = window.location.origin; 
    var Post_URL = baseURL + '/addJob';

    $.ajax({
        method: 'POST',
        url: Post_URL,
        data: JSON.stringify(new_job_data),
        contentType: "application/json",
        dataType: 'json',
        success: function(msg) {
            console.log(msg)   
            console.log('SUCCESS REACHED API!');
            if (msg === 'Failed') {
                alert ('Try again later! Failed to receive info!')
            } else {
                var newTableRow = $('.newTableRow').clone();
                newTableRow.appendTo(".table");

                var lastElement = parentEle.parent().find('.tablerow').last();
                lastElement.attr('name', currentCounter)
                lastElement.find("#positionz").text(position_data);
                lastElement.find("#companyz").text(company_data);
                lastElement.find("#descriptionz").text(description_data);
                lastElement.removeClass('newTableRow');

                alert('Job Info Has Been Saved!');
   
                // Delete current input element
                parentEle.remove();
            }
        },
        error: function(error) {
            console.log(error);
            alert('FAILED TO REACH API!');
        }
    });
});

$(".delete").click(function(){
    $(this).parent().find("#positionz").remove();
    $(this).parent().find("#companyz").remove();
    $(this).parent().find("#descriptionz").remove();
    alert("You have deleted the row");
});

$(".edit").click(function(){
    var position = $("#positionz");
    var company =  $("#companyz");
    var description = $("#descriptionz");
    $(this).parent().find("#positionz").attr('contenteditable', 'true');
    $(this).parent().find("#positionz").click(function(){
        $(this).parent().find("#positionz").css({'background':'red'});
        $(this).parent().find("#descriptionz").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().find("#companyz").css({'background':'rgb(190, 185, 185)'});
        alert("You are now editing the position");
    });
    $(this).parent().find("#companyz").attr('contenteditable', 'true');
    $(this).parent().find("#companyz").click(function(){
        $(this).parent().find("#companyz").css({'background':'red'});
        $(this).parent().find("#positionz").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().find("#descriptionz").css({'background':'rgb(190, 185, 185)'});
        alert("You are now editing the company");
    });
    $(this).parent().find("#descriptionz").attr('contenteditable', 'true');
    $(this).parent().find("#descriptionz").click(function(){
        $(this).parent().find("#descriptionz").css({'background':'red'});
        $(this).parent().find("#companyz").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().find("#positionz").css({'background':'rgb(190, 185, 185)'});
        alert("You are now editing the description")
    });
    alert("You can now start editing");
});

$('.switch').on('click', function() {
    var click = $(this).data('clicks');

    if (click) {
        $(this).parent().find("#positionz").css({'background':'yellow'});
        $(this).parent().find("#companyz").css({'background':'yellow'});
        $(this).parent().find("#descriptionz").css({'background':'yellow'});    
    } else {
        $(this).parent().find("#positionz").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().find("#companyz").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().find("#descriptionz").css({'background':'rgb(190, 185, 185)'});
    };
        $(this).data('clicks', !click);
        console.log(click);
});
