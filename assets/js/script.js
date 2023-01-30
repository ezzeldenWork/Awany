$(document).ready(function () {
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }

  $(".common-slider").slick({
    slidesToShow: 3,
    prevArrow:
      "<div class='time-arrow left-arrow'><i class='fas fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='time-arrow right-arrow'><i class='fas fa-chevron-right'></i></div>",
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
  $(".new-slider").slick({
    slidesToShow: 3,
    prevArrow:
      "<div class='time-arrow left-arrow'><i class='fas fa-chevron-left'></i></div>",
    nextArrow:
      "<div class='time-arrow right-arrow'><i class='fas fa-chevron-right'></i></div>",
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
