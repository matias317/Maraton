$(document).ready(function(){

    $("#colorCamisa").css('background-color', "blue");

    $("#inscribirse").click(function(){
        window.location.replace("formulario.html");
    });

    $("#selectColor").change(function(){
        var color = $("#selectColor option:selected").val();
        $("#colorCamisa").css('background-color', color);
    });

 });


