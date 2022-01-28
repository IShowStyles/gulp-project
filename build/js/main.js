$(document).ready(function () {
  $(document).on("click", ".search-info__input", function () {
       $(this).toggleClass(" search-info__content--clicked");
 
  });


  $('.header-menu__btn').on('click', function(){
    $('.menu-list').toggleClass('menu-list__active'),
    $('.header').toggleClass('header__active',{delay:350}),
    $('.logo').toggleClass('logo-none',{delay:350}),
    $('.header-input').toggleClass('header-input__none'),
    $('.header-menu__btn').toggleClass('header-menu__btn--active'),
    $('.menu-link__footer-text').toggleClass('menu-link__footer-text--active')
    
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


