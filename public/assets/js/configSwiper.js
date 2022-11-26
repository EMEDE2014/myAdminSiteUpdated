var swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    direction: 'horizontal',
    keyboard:{
      enabled: true,
      onlyInViewport: false,
  },
  autoplay:{
delay: 5000,
},
speed: 800,
allowTouchMove: false,
effect: 'fade',
loop:false,
  });