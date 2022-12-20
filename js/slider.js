$(document).ready(function(){
  $('#mainBanner').slick({
    slide: 'div',
    infinite: true,
    dots: true,
    autoplay : true,
    speed: 200,
    autoplaySpeed : 5000,
    pauseOnHover : true,
    slidesToShow: 1,
    adaptiveHeight: true
    });
    $('.slider').slick({
      slide: 'div',
      infinite: true,
      dots: true,
      autoplay : true,
      speed: 200,
      autoplaySpeed : 5000,
      pauseOnHover : true,
      slidesToShow: 1,
      adaptiveHeight: true
      });
  $(".slider .slick-prev").append(
    '<span></span>'
  );
  $(".slider .slick-next").append(
    '<span class="next"></span>'
    );
});
