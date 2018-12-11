console.log("Welcome to SofiaUX Portfolio Site");

function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}



$(document).ready(function() {
  $(".project").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
    });
  $(".project").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});
