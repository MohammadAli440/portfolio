
const colors = document.getElementsByClassName("colors");

let i;
for (i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", changecolor);
}

function changecolor() {
  let color = this.getAttribute("data-color");
  document.documentElement.style.setProperty("--span-color", color);
  document.documentElement.style.setProperty("--main-color", color);
}

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Hey, Come Back!";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

  $(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});


$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  
});


