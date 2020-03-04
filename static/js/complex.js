// Starting highlight

$(".addNewRow").click(function(){
    // Find the last element in tablerow
    var lastElement = $(this).parent().find('.tablerow').last();
    var lastCounter = Number(lastElement.attr("name"));

    // Give new counter value
    var newCounter = lastCounter + 1;

    // Make a new row and it to the table
    var cloneRows = $('.table').find('.cloneRows');
    var newRow = cloneRows.find(".newInputRow").clone();
    newRow.attr("name", newCounter);
    newRow.appendTo(".table");
});


$(".table").off('click').on('click', '.add', function(){
    var parentEle = $(this).parent();
    var cloneRows = $('.table').find('.cloneRows');
    console.log(this);
    console.log(parentEle);
    var currentCounter = parentEle.attr('name');
    console.log(currentCounter);

    var position_data = parentEle.find(".position").val();
    var company_data = parentEle.find(".company").val();
    var description_data = parentEle.find(".description").val();
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
                var newTableRow = cloneRows.find('.newTableRow').clone();
                newTableRow.attr('name', currentCounter)
                newTableRow.find(".positionz").text(position_data);
                newTableRow.find(".companyz").text(company_data);
                newTableRow.find(".descriptionz").text(description_data);
                newTableRow.removeClass('newTableRow');
                newTableRow.addClass('tablerow');
                console.log(newTableRow);
                newTableRow.appendTo(".table");

                alert('Job Info Has Been Saved!');

                // Delete current input element
                console.log(parentEle);
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
    $(this).parent().find(".positionz").remove();
    $(this).parent().find(".companyz").remove();
    $(this).parent().find(".descriptionz").remove();
    alert("You have deleted the row");
});

$(".edit").click(function(){
    var position = $(".positionz");
    var company =  $(".companyz");
    var description = $(".descriptionz");
    $(this).parent().find(".positionz").attr('contenteditable', 'true');
    $(this).parent().find(".positionz").click(function(){
        $(this).parent().find(".positionz").css({'background':'red'});
        $(this).parent().find(".descriptionz").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().find(".companyz").css({'background':'rgb(190, 185, 185)'});
        alert("You are now editing the position");
    });
    $(this).parent().find(".companyz").attr('contenteditable', 'true');
    $(this).parent().find(".companyz").click(function(){
        $(this).parent().find(".companyz").css({'background':'red'});
        $(this).parent().find(".positionz").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().find(".descriptionz").css({'background':'rgb(190, 185, 185)'});
        alert("You are now editing the company");
    });
    $(this).parent().find(".descriptionz").attr('contenteditable', 'true');
    $(this).parent().find(".descriptionz").click(function(){
        $(this).parent().find(".descriptionz").css({'background':'red'});
        $(this).parent().find(".companyz").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().find(".positionz").css({'background':'rgb(190, 185, 185)'});
        alert("You are now editing the description")
    });
    alert("You can now start editing");
});

$(".tablerow").off('click').on('click', '.highlight', function(){
    if($(".highlight").prop("checked") === true){
        $(this).parent().find(".positionz").css({'background':'yellow'});
        $(this).parent().find(".companyz").css({'background':'yellow'});
        $(this).parent().find(".descriptionz").css({'background':'yellow'});
        console.log($(this).prop("checked"));    
    }
    else if($(".highlight").prop("checked") === false){
        $(this).parent().find(".positionz").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().find(".companyz").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().find(".descriptionz").css({'background':'rgb(190, 185, 185)'});
        console.log($(this).prop("checked"));    
    };
});