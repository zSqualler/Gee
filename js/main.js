$(function() {

  $('.shop-filters__btn').on('click', function() {
    $('.shop__menu').slideToggle()

  });


  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('.contact-inner__adress-item').on('click', function () {
  $('.contact-inner__adress-item').removeClass('contact-inner__adress-item--active');
  $(this).addClass('contact-inner__adress-item--active');
  });

  $('.product__items--slider').slick ({
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    infinite: false,
          responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.details-tabs__top-item').on('click', function(e){
    e.preventDefault()

    $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
    $(this).addClass('details-tabs__top-item--active');

    $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
    $($(this).attr('href')).addClass('details-tabs__content-item--active');
  });




  $('.slider-inner__big').slick({
    asNavFor: '.slider-inner__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });
  $('.slider-inner__thumb').slick({
    asNavFor: '.slider-inner__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    draggable: false,
      responsive: [
      {
        breakpoint: 950,
        settings: {
          draggable: true,
        }
      },
    ]
  });

  $('.rateYo').rateYo({
    rating: 4,
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing : "8px",
  });

  $('.product-item__about-star, .details-content__star').rateYo({
    rating: 4,
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing : "12px",
  });

  
	$('.filer__ctegory-select').styler();

  $('.details-content__input').styler();

  $('.filer__ctegory-select').on('click', function () {
  $('.filer__ctegory-select').removeClass('filer__ctegory-select--active')
  $(this).addClass('filer__ctegory-select--active')
  });

  $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })

  $('.top-slider__inner').slick ({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });


});

const btnSwitch = document.querySelector('.shop__grid-switch');
const btnSwitchOut = document.querySelector('.shop__grid-switchout');
const items = document.querySelector('.product__items');

if (btnSwitch) {
  btnSwitch.addEventListener('click', function () {
  items.classList.add('product__items-shop--list');
  items.classList.remove('product__items-shop--grid');
  btnSwitchOut.classList.remove('shop__grid-switcher');
  btnSwitch.classList.add('shop__grid-switcher');
  });
}

if (btnSwitchOut) {
  btnSwitchOut.addEventListener('click', function () {
  items.classList.add('product__items-shop--grid');
  items.classList.remove('product__items-shop--list');
  btnSwitchOut.classList.add('shop__grid-switcher');
  btnSwitch.classList.remove('shop__grid-switcher');
  });
}
  
