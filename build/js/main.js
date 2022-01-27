$(document).ready(function () {
  $(document).on("click", ".search-info__input", function () {
      $(this).toggleClass(" search-info__content--clicked");
  });
});