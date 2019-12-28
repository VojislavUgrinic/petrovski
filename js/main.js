$('.gal .test-popup-link').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
    // other options
  });


  let navbar = $(".navbar");

        $(window).scroll(function(){
            let oTop = $(".usluge").offset().top - window.innerHeight;
            if ($(window).scrollTop()>oTop){
                navbar.addClass("sticky");
            }else{
                navbar.removeClass("sticky");
            }
        });