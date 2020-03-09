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


    // Validate input data for row
    if (position_data === '' || company_data === '' || description_data === '') {
        alert("Please Fill Required Fields");
        return false;
    }
    var newTableRow = cloneRows.find('.newTableRow').clone();
    newTableRow.attr('name', currentCounter)
    var place = newTableRow.find(".positionz").text(position_data);
    console.log(place);
    newTableRow.find(".companyz").text(company_data);
    newTableRow.find(".descriptionz").text(description_data);
    newTableRow.removeClass('newTableRow');
    newTableRow.addClass('tablerow');
    console.log(newTableRow);
    newTableRow.appendTo(".table");
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
                newTableRow.find(".positionz").find("cellvalue").text(position_data);
                newTableRow.find(".companyz").find(".cellvalue").text(company_data);
                newTableRow.find(".descriptionz").find(".cellvalue").text(description_data);
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
    var position_data = $(this).parent().find(".gposition").text();
    var company_data = $(this).parent().find(".gcompany").text();
    var description_data = $(this).parent().find(".gdescription").text();
    console.log(position_data);
    $(this).parent().find(".positionz").remove();
    $(this).parent().find(".companyz").remove();
    $(this).parent().find(".descriptionz").remove();
    alert("You have deleted the row");
    var delete_job_data = {'position':position_data, 'company':company_data, 'description':description_data};
    var baseURL = window.location.origin; 
    var Post_URL = baseURL + '/deleteJob';
    $.ajax({
        method: 'POST',
        url: Post_URL,
        data: JSON.stringify(delete_job_data),
        contentType: "application/json",
        dataType: 'json',
        success: function(msg) {
            console.log(msg)   
            console.log('SUCCESS REACHED API!');
            alert('Job Info Has Been Delete!');
        }
    });
});

$(".table").off('click').on('click', '.edit', function(){
    var currentCell = $(this).parent().find(".cellvalue");
    var cellValue = currentCell.text();
    console.log(cellValue);
    currentCell.attr('contenteditable', 'true');
    alert("You can now start editing");
});
$(".submitedit").click(function(){
    console.log("penis")
    var position_data = $(".submitedit").parent().find(".gposition").text();
    var company_data = $(".submitedit").parent().find(".gcompany").text();
    var description_data = $(".submitedit").parent().find(".gdescription").text();
    console.log(position_data);
    console.log(company_data);
    console.log(description_data);
    var edit_job_data = {'position':position_data, 'company':company_data, 'description':description_data};
    console.log(edit_job_data);
    var baseURL = window.location.origin; 
    var Post_URL = baseURL + '/editJob';
    $.ajax({
        method: 'POST',
        url: Post_URL,
        data: JSON.stringify(edit_job_data),
        contentType: "application/json",
        dataType: 'json',
        success: function(msg) {
            console.log(msg)   
            console.log('SUCCESS REACHED API!');
            alert('Job Info Has Been Edited!');
        }
});
});

$(".tablerow").off('click').on('click', '.highlight', function(){
    if($(this).prop("checked") === true){
        $(this).parent().parent().find(".gposition").css({'background':'yellow'});
        $(this).parent().parent().find(".gcompany").css({'background':'yellow'});
        $(this).parent().parent().find(".gdescription").css({'background':'yellow'});
    }
    else if($(this).prop("checked") === false){
        $(this).parent().parent().find(".gposition").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().parent().find(".gcompany").css({'background':'rgb(190, 185, 185)'});
        $(this).parent().parent().find(".gdescription").css({'background':'rgb(190, 185, 185)'});
    }
});

