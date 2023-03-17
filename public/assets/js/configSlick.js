$('section.bg-client .slickSlider-box').slick({
    dots: false,
    arrows:false,
        infinite: true,
        speed:1000,
        slidesToShow: 1,
        autoplay: true,
        centerMode:false,
        autoplaySpeed: 3000,
        pauseOnHover:false,
        responsive: 
        [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            speed: 1000,
            
          }
        }
        ]
    });