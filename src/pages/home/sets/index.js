import Swiper from 'swiper/dist/js/swiper.min';
import 'swiper/dist/css/swiper.min.css';
import 'blocks/product/product.sass'

export default $root => {

  new Swiper('.sets__container', {
    speed: 400,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  var quantity;
  var price;
  var ccc;


  $root.find('.product__more').on('click', function (e) {
    quantity = $(this).prev(".product__item").val();
    price = $(this).parent('.product__quantity').prev('.product__price').text().replace(/[^0-9]/gi, '');
    price = parseInt(price, 10);
    if(quantity == 1) {
      quantity++;
      price = quantity * price;
      price = price + " руб.";
      $(this).prev('.product__item').val(quantity);
      $(this).parent('.product__quantity').prev('.product__price').replaceWith('<div class="product__price">' + price + '</div>');
      } else {
      console.log(1);
      ccc = price/quantity;
      quantity++;
      price = ccc*quantity;
      price = price + " руб.";
      $(this).prev('.product__item').val(quantity);
      $(this).parent('.product__quantity').prev('.product__price').replaceWith('<div class="product__price">' + price + '</div>');
    }
  });

  $root.find('.product__less').on('click', function (e) {
    quantity = $(this).next(".product__item").val();
    price = $(this).parent('.product__quantity').prev('.product__price').text().replace(/[^0-9]/gi, '');
    price = parseInt(price, 10);
    if(quantity == 1) {
      console.log(1);
    } else {
      ccc = price/quantity;
      quantity--;
      price = ccc*quantity;
      price = price + " руб.";
      $(this).next('.product__item').val(quantity);
      $(this).parent('.product__quantity').prev('.product__price').replaceWith('<div class="product__price">' + price + '</div>');
    }



  })



};
