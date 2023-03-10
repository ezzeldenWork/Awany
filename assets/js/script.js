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

  setTimeout(function () {
    $(".loading-page").fadeOut();
  }, 2000);

  // open menu

  $(document).click(function () {
    if ($(window).width() < 772) {
      $(".header-section .nav-list").slideUp();
    }
    $(".header-profile-list-box .list-box").fadeOut();
  });
  $(".header-section .logo-box .menu-icon i").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".header-section .nav-list").slideToggle();
  });

  $(".header-profile-list-box").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).children(".list-box").fadeToggle();
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

  $(".payment-box-list .payment-list .payment-box ").click(function (e) {
    $(this).children(".payment-content").slideDown();
    $(this).siblings().children(".payment-content").slideUp();
  });

  // favorite-icon-box
  $(".favorite-icon-box").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("checked");
  });

  // open-filter

  $(".filter-open-box .filter-open").click(function (e) {
    $(".filter-section .category-list-box").addClass("open-filter");
    $(".overlay").show();
    $("body").css({
      overflowY: "hidden",
    });
  });
  $(".overlay").click(function (e) {
    $(".filter-section .category-list-box").removeClass("open-filter");
    $(".overlay").hide();
    $("body").css({
      overflowY: "auto",
    });
  });

  $(".slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
  });
});
