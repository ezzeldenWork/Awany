$(document).ready(function () {
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }
  const prevArrow =
      "<div class='time-arrow left-arrow'><i class='fas fa-chevron-left'></i></div>",
    nextArrow =
      "<div class='time-arrow right-arrow'><i class='fas fa-chevron-right'></i></div>";

  // open menu

  $(document).click(function (e) {
    e.preventDefault();
    if ($(window).width() < 772) {
      $(".header-section .nav-list").slideUp();
    }
  });
  $(".header-section .logo-box .menu-icon i").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".header-section .nav-list").slideToggle();
  });

  $(".common-slider").slick({
    slidesToShow: 3,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
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
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".new-slider").slick({
    slidesToShow: 3,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
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
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
