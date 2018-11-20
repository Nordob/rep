import Swiper from 'swiper/dist/js/swiper.min';
import 'swiper/dist/css/swiper.min.css';

export default $root => {

  new Swiper('.intro__container', {
    speed: 400,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })
};
