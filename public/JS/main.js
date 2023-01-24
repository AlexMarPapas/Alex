var linkHome = 0; //2 states for linkHome: home is 0 and any other 
                  //is 1.
var linkPage = ""; //string will get the value of the specific button
                   //from the menulist that got clicked.

function pageOn() {
$("#main-menu").addClass("main-menu-pgactive");
$("#section-home").addClass("section-cardbody-pgactive");


linkHome = 1;
};

function pageOff() {
    $(".section-page-active").removeClass("section-page-active");
    $("#main-menu").removeClass("main-menu-pgactive");
    $("#section-home").removeClass("section-cardbody-pgactive");
    


    linkHome = 0;
}

$(".link-page").on("click", function(event) {
    event.preventDefault();
    $(".menuActive").removeClass("menuActive");
    $(this).addClass("menuActive");
    linkPage = $(this).attr("href"); 
    $(".section-page-active").removeClass("section-page-active");
    $(linkPage).addClass("section-page-active");
    
    pageOn();
});


$(".link-home").on("click", function(event) {
    event.preventDefault();

    if(linkHome === 0){
        // pageOn();
    }
    else if(linkHome === 1){
       $(".menuActive").removeClass("menuActive");
       $(this).addClass("menuActive")
    }
    pageOff();
});
