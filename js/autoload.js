$(document).ready(function(){
    //Loads the header, footer, and meta tags when this script is called and the page is loaded
    $(function(){
        $("#meta").load("./templates/meta.html");
        $("#header").load("./templates/header.html");
        $("#footer").load("./templates/footer.html");
    });
    
});