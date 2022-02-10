$(document).ready(function () {

  $('.shop-btn__sort').on('click', function(){
    $('.shop-btn__sort').removeClass('shop-btn__sort--active');
    $(this).addClass('shop-btn__sort--active');
  });

  $('.btn-grid__2').on('click', function(){
     $('.catalog-item').addClass('catalog-item__list');
  });
  $('.btn-grid__3').on('click', function(){
     $('.catalog-item').removeClass('catalog-item__list');
  });

  $('.select-style__1').styler();
  $('.select-style__2').styler();

  $('.top-slider__inner').slick({

    arrows: true,
    nextArrow: '<button type="button" class="slick-next"><svg class="slider-next__img"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="slider-prev__img"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  });



  $(".header-catalog__drop-top").click(function () {

    $('.header-catalog__menu').slideToggle({
      showEffect: 'slide',
      duration: '580',
    });

    $('.header-catalog').toggleClass('header-catalog__border', {
      duration: '740'
    });
    $('.header-catalog').toggleClass('header-catalog--active', {
      duration: '740'
    });
    $('.header-catalog__text').toggleClass('header-catalog__text--active', {
      duration: '740'
    });
  });


  $('.shop-filters__item-top').click(function () {
    $(this).next('.shop-filters__item-content').slideToggle(475);
    $('.shop-filters__item-top').toggleClass('shop-filters__item-top--active');
    $('.shop-filters__item-top').children('.accordion-svg').toggleClass('rotateY-180');
  });


  $('.shop-filters__item-head').click(function () {
    $(this).next('.shop-filters__item-price').slideToggle(575);
    $('.shop-filters__item-top').toggleClass('shop-filters__item-top--active');
    $('.shop-filters__item-head').toggleClass('shop-filters__item-head--active');
    $('.shop-filters__item-head').children('.accordion-svg').toggleClass('rotateY-180');
  });

  $('.shop-filters__item-proposition').click(function () {
    $(this).next('.shop-filters__list').toggle(600);
    $('.shop-filters__item-proposition').toggleClass('shop-filters__item-proposition--active');
    $('.shop-filters__list-label').toggleClass('shop-filters__list-label--active');
    $('.shop-filters__list-checkbox').toggle(600);
    $('.shop-filters__item-proposition').children('.accordion-svg').toggleClass('rotateY-180');
  });

  $('.shop-filters__item-brand').click(function () {
    $(this).next('.shop-filters__form').slideToggle(575);
    $('.shop-filters__item-brand').toggleClass('shop-filters__item-brand--active');
    $('.shop-filters__form-mark').toggle(600);
    $('.shop-filters__item-brand').children('.accordion-svg').toggleClass('rotateY-180');
  });





  var $range = $(".shop-filter__item-input"),
    $inputFrom = $(".shop-slider__item-from"),
    $inputTo = $(".shop-slider__item-to"),
    instance,
    min = 0,
    max = 4990,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });





  var containerEl1 = document.querySelector('[data-ref="mix-1"]');
  var containerEl2 = document.querySelector('[data-ref="mix-2"]');

  if (containerEl1) {
    mixer = mixitup(containerEl1,  {

      animation: {
        effects: 'fade tranlateX(-180deg)',
        /* fade scale */
        duration: 800 /* 600 */
      },

        controls: {
          scope: 'local'
        }


    });
  }
  if (containerEl2) {
    mixer = mixitup(containerEl2, {
 
      animation: {
        effects: 'fade tranlateX(-180deg)',
        /* fade scale */
        duration: 800 /* 600 */
      },

        controls: {
          scope: 'local'
        }


    });
  }
});