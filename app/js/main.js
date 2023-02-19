$(function () {
  /* Slider */
  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    dots: true
  });

  /* Buttons of menu */
  document.querySelector(".header__btn").addEventListener("click", function(){
    document.querySelector(".menu").classList.add("active");
  });

  document.querySelector(".menu__close-btn").addEventListener("click", function() {
    document.querySelector(".menu").classList.remove("active");
  });
})