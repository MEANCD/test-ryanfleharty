$(document).ready(function () {
    console.log("ready!");
    $('button').click(function(){
        $(this).text("RESET THE BUTTON");
        $('.arena').append("<p>ANOTHER CHALLENGER</p>");
    });
    $('.arena').on("click", "p", function(){ // MUST use .on for content that is CREATED by your jquery
        console.log("CLICKED A P TAG")
    });
});