// corusel part
$(".opinion_cards_list").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});
// nav open

const elHeader = document.querySelector(".header");
const openToggleBtn = document.querySelector(".toggle_open_btn");

openToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("body-fixed");
  elHeader.classList.toggle("header-open");
});
