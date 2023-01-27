var linkHome = 0; //2 states for linkHome: home is 0 and any other
//is 1.
var linkPage = ""; //string will get the value of the specific button
//from the menulist that got clicked.



function pageOn() {
  $("#main-menu").addClass("main-menu-pgactive");
  $("#section-home").addClass("section-cardbody-pgactive");

  linkHome = 1;
}

function pageOff() {
  $(".section-page-active").removeClass("section-page-active");
  $("#main-menu").removeClass("main-menu-pgactive");
  $("#section-home").removeClass("section-cardbody-pgactive");

  linkHome = 0;
}


$(window).on("load", function () {
  $("#page-loader").fadeOut(850);
  $("#page-loader").style.zIndex = "0";
})




$(".link-page").on("click", function (event) {
  event.preventDefault();
  $(".menuActive").removeClass("menuActive");
  $(this).addClass("menuActive");
  linkPage = $(this).attr("href");
  $(".section-page-active").removeClass("section-page-active");
  $(linkPage).addClass("section-page-active");
  pageOn();
});


$(".animatedPage").on("click", function (event) {
  event.preventDefault();
  $(".animated").addClass("activated");
  
});

$(".link-home").on("click", function (event) {
  event.preventDefault();

  if (linkHome === 0) {
    // pageOn();
  } else if (linkHome === 1) {
    $(".menuActive").removeClass("menuActive");
    $(this).addClass("menuActive");
  }
  pageOff();

});



    // FUNCTION /CLICK METHOD FOR RESET THE ANIMATION IN PROGRESS BARS
$(function () {
  
  $(".animatedPage, .navAnim").click(function () {
    $(".bar-parent1, .bar1, .bar-parent2, .bar2, .bar-parent3, .bar3, .bar-parent4, .bar4, .bar-parent5, .bar5, .bar-parent6, .bar6, .bar-parent7, .bar7"
    ).css({ animation: "null" });

    setTimeout(function () {
      $(".bar-parent1, .bar1, .bar-parent2, .bar2, .bar-parent3, .bar3, .bar-parent4, .bar4, .bar-parent5, .bar5, .bar-parent6, .bar6, .bar-parent7, .bar7"
      ).css({ animation: "" });
    }, 10);
  });
});



