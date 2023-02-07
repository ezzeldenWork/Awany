$(document).ready(function () {
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }
  const prevArrow =
      "<div class='time-arrow left-arrow'><i class='fas fa-chevron-left'></i></div>",
    nextArrow =
      "<div  class='time-arrow right-arrow'><i class='fas fa-chevron-right'></i></div>";

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
  $(".rate-slider-box .rate-slider").slick({
    slidesToShow: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    infinite: false,
    rtl: dir_lang,
  });
  $(".product-details-section .product-slider").slick({
    slidesToShow: 3,
    infinite: true,
    rtl: dir_lang,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".product-details-section .product-slider .product-slider-item img").click(
    function (e) {
      e.preventDefault();
      $(".product-details-section .product-details-img img").attr(
        "src",
        $(this).attr("src")
      );
    }
  );

  $(".quantity-button .increase-quantity").click(function (e) {
    e.preventDefault();
    $(this)
      .siblings(".quantity-input")
      .val(+$(this).siblings(".quantity-input").val() + 1);
  });
  $(".quantity-button .descrease-quantity").click(function (e) {
    e.preventDefault();
    if ($(this).siblings(".quantity-input").val() > 1) {
      $(this)
        .siblings(".quantity-input")
        .val(+$(this).siblings(".quantity-input").val() - 1);
    } else {
      return;
    }
  });

  // favorite-icon-box
  $(".favorite-icon-box").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("checked");
  });
});
