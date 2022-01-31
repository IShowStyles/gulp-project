$(document).ready(function () {
  $(document).on("click", ".search-info__input", function () {
       $(this).toggleClass(" search-info__content--clicked");
 
  });


  $('.header-menu__btn').on('click', function(){
    $('.menu-content').toggleClass('menu-content__active'),
    $('.header').toggleClass('header__active',{delay:350}),
    $('.logo-img').toggleClass('logo-img__none'),
    $('.header-input').toggleClass('header-input__none'),
    $('.header-menu__btn').toggleClass('header-menu__btn--active'),
    $('.menu-link__footer-text').toggleClass('menu-link__footer-text--active'),
    $('.search-info__top').toggleClass('search-info__top--none'),
    $('.search-card__rating').toggleClass('search-card__rating--none'),
    $('.footer').toggleClass('footer--none'),
    $('.search').toggleClass('search--none')
  });

  let select = function () {
    let selectHeader = document.querySelectorAll('.select-head');
    let selectItem = document.querySelectorAll('.select-item');
  
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });
  
    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });
  
    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }
  
    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select-current');
        currentText.innerText = text;
        select.classList.remove('is-active');
  
    }
    
  };
  
  
  select();

});


