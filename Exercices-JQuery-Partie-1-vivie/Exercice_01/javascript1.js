$(document).ready(function() {
    //Dès qu'on clique sur #button, on applique hide() au paragraphe
    $(".hide").click(function() {
        $("p#text").hide();
    });
});