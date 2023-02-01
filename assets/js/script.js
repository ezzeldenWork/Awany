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
  $(".product-details-section .product-slider").slick({
    slidesToShow: 3,
    infinite: true,
    rtl: dir_lang,
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

  const valueInput =
    ".product-details-section .product-details-content .details-box.button-container .link-box .quantity-input";
  $(
    ".product-details-section .product-details-content .details-box.button-container .link-box .increase-quantity"
  ).click(function (e) {
    e.preventDefault();
    $(valueInput).val(+$(valueInput).val() + 1);
  });
  $(
    ".product-details-section .product-details-content .details-box.button-container .link-box .descrease-quantity"
  ).click(function (e) {
    if ($(valueInput).val() > 1) {
      $(valueInput).val(+$(valueInput).val() - 1);
    } else {
      return;
    }
  });
});
