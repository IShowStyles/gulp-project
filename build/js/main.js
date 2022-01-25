$('.top-slider__inner').slick({

    arrows:true,

    // nextArrow:'<button type="button" class="slick-next"><img class="slider-next__img" src="img/sprite.svg#arrow-right"  alt="arrow-right"></button>',
    // prevArrow:'<button type="button" class="slick-prev"><img class="slider-prev__img" src="img/sprite.svg#arrow-left" alt="arrow-left"></button>',
  
    nextArrow:'<button type="button" class="slick-next"><svg class="slider-next__img"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    prevArrow:'<button type="button" class="slick-prev"><svg class="slider-prev__img"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
  
  
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


  $(".header-catalog__drop-top").click(function() { 
  
    
    $('.header-catalog__menu').slideToggle({
      showEffect:'fade&slide',
      duration: '680',
    });  
 
  });


  $(".header-catalog__drop-top").click(function() { 
  
    $('.header-catalog').toggleClass('header-catalog__border',{  duration: '740'});
    $('.header-catalog').toggleClass('header-catalog--active',{  duration: '740'});
    $('.header-catalog__text').toggleClass('header-catalog__text--active',{  duration: '740'});
  

    });  
 





