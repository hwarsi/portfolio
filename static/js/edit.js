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
    var position_data = $(this).parent().find(".positionz").text();
    var company_data = $(this).parent().find(".companyz").text();
    var description_data = $(this).parent().find(".descriptionz").text();
    var delete_job_data = {'position':position_data, 'company':company_data, 'description':description_data};
    var baseURL = window.location.origin; 
    var Post_URL = baseURL + '/editJob';
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