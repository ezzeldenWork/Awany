$(document).ready(function () {
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }

  $(".common-slider").slick({
    slidesToShow: 4,
    prevArrow: "#blog-slider-prev",
    nextArrow: "#blog-slider-next",
    infinite: false,
    rtl: dir_lang,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
