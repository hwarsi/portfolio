

$("#next").click(function() {
    var currentStep = $('#gallery_tracker').text();

    if (currentStep === "1") {
        $(".apps").hide();
        $("#app2").show();
        $('#gallery_tracker').text("2");
        
    } else if (currentStep === "2") {
        $(".apps").hide();
        $("#app3").show();
        $('#gallery_tracker').text("3");

    } else if (currentStep === "3") {
        $(".apps").hide();
        $("#app4").show();
        $('#gallery_tracker').text("4");

    } else if (currentStep === "4") {
        $(".apps").hide();
        $("#app1").show();
        $('#gallery_tracker').text("1");
    }

});