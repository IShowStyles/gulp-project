$(document).ready(function () {
  
  
  $('.top-slider__inner').slick({

      arrows:true,  
      nextArrow:'<button type="button" class="slick-next"><svg class="slider-next__img"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
      prevArrow:'<button type="button" class="slick-prev"><svg class="slider-prev__img"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    });
  
  
  
    $(".header-catalog__drop-top").click(function() { 

      $('.header-catalog__menu').slideToggle({
        showEffect:'slide',
        duration: '580',
      });  
  
        $('.header-catalog').toggleClass('header-catalog__border',{  duration: '740'});
        $('.header-catalog').toggleClass('header-catalog--active',{  duration: '740'});
        $('.header-catalog__text').toggleClass('header-catalog__text--active',{  duration: '740'});
    });
  
  
    $('.catalog-filters__item-top').click(function(){
      $(this).next('.catalog-filters__item-content').slideToggle(475);
    
    });

    
    $('.catalog-filters__item-head').click(function(){
      $(this).next('.catalog-filters__item-price').slideToggle(575);
      $('.catalog-filters__item-top').toggleClass('catalog-filters__item-top--active');
      $('.catalog-filters__item-head').toggleClass('catalog-filters__item-head--active');
      $('.accordion-svg').toggleClass('rotateY-180');
    });

    $('.catalog-filters__item-top').click(function(){
      $(this).next('.catalog-filters__list').toggle(600);
       $('.catalog-filters__item-top').toggleClass('catalog-filters__item-top--active');
       $('.catalog-filters__list-label').toggleClass('catalog-filters__list-label--active');
       $('.catalog-filters__list-checkbox').toggle(600);
       $('.accordion-svg').toggleClass('rotateY-180');
    });
 
    $('.catalog-filters__item-brand').click(function(){
      $(this).next('.catalog-filters__form').slideToggle(575);
      $('.catalog-filters__item-brand').toggleClass('catalog-filters__item-brand--active');
        $('.catalog-filters__form-mark').toggle(600);
        $('.accordion-svg').toggleClass('rotateY-180');
        
    });
 

    
    var $range = $(".catalog-filters__item-input"),
    $inputFrom = $(".catalog-filters__item-from"),
    $inputTo = $(".catalog-filters__item-to"),
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

function updateInputs (data) {
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
      
      
      var config = {
        controls : {
          scope : 'local'
        }
      };
    
    
      var animation1 = {
        effects: 'fade rotateY(-180deg)', /* fade scale */
        duration: 800 /* 600 */
      };
      var animation2 = {
        effects: 'fade tranlateX(-180deg)', /* fade scale */
        duration: 800 /* 600 */
      };
      var mixer1 = mixitup(containerEl1,config, );
      var mixer2 = mixitup(containerEl2, config, );
    
  });