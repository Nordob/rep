import './index.sass';
import './index.pug';
import initIntro from './intro'
import  initSets from './sets'
import  initRolls from './rolls'
import  initPizza from './pizza'
import  initWok from './wok'
import Swiper from "swiper/dist/js/swiper.min";
import 'swiper/dist/css/swiper.min.css';


export default $root => {
  let $intro = $root.find('.intro');
  if($intro.length) {
    initIntro($intro)
  }

  let $sets = $root.find('.sets');
  if($sets.length) {
    initSets($sets)
  }

  let $rolls = $root.find('.rolls');
  if($rolls.length){
    initRolls($rolls)
  }

  let $pizza = $root.find('.pizza');
  if($pizza.length){
    initPizza($pizza)
  }

  let $wok = $root.find('.wok');
  if($wok.length){
    initWok($wok)
  }

  new Swiper('.swiper__section', {
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

  var input;
  var price;
  var startingPrice;


  $root.find('.product__more').on('click', function () {
    input = $(this).prev(".product__input").val();
    price = $(this).parent('.product__quantity').prev('.product__price').text().replace(/[^0-9]/gi, '');
    price = parseInt(price, 10);
    if(input == 1) {
      input++;
      price = price - priceProduct;
      price = input * price;
      price = price + priceProduct;
      price = price + " руб.";
      $(this).prev('.product__input').val(input);
      $(this).parent('.product__quantity').prev('.product__price').replaceWith('<div class="product__price">' + price + '</div>');
    } else {
      console.log(1);
      price = price - priceProduct;
      startingPrice = price/input;
      input++;
      price = startingPrice*input;
      price = price + priceProduct;
      price = price + " руб.";
      $(this).prev('.product__input').val(input);
      $(this).parent('.product__quantity').prev('.product__price').replaceWith('<div class="product__price">' + price + '</div>');
    }
  });

  $root.find('.product__less').on('click', function () {
    input = $(this).next(".product__input").val();
    price = $(this).parent('.product__quantity').prev('.product__price').text().replace(/[^0-9]/gi, '');
    price = parseInt(price, 10);
    if(input == 1) {
      console.log(1);
    } else {
      price = price - priceProduct;
      startingPrice = price/input;
      input--;
      price = startingPrice*input;
      price = price + priceProduct;
      price = price + " руб.";
      $(this).next('.product__input').val(input);
      $(this).parent('.product__quantity').prev('.product__price').replaceWith('<div class="product__price">' + price + '</div>');
    }
  });

  var products = {
    product0:{
      name: "Острый соус",
      price: 140
    },
    product1:{
      name: "Китайский соус",
      price: 160
    },
    product2:{
      name: "Соус Тар-Тар",
      price: 110
    }
  };

  var nameProduct;
  var priceProduct = 0;

  $.each(products,function(key,data) {
    $root.find("select").append('<option class="product__sausesItem">' + data.name + '</option>');

  });

  var valhowmuch = 0;
  var prevvalhowmuch = 0;

  $root.find(".product__add").on('click', function (e) {
    nameProduct = $(this).parent(".product__pricetag").parent(".product__settings").next(".product__sauces").children('select').val();
    console.log( nameProduct);
    $.each(products,function(key,data) {
      if(data.name === nameProduct){
        priceProduct = data.price;
        console.log('priceProduct start', priceProduct);
      }
    });
    prevvalhowmuch = priceProduct * valhowmuch;
    valhowmuch++;
    priceProduct *= valhowmuch;
    console.log('priceProduct', priceProduct);
    console.log('valhowmuch', valhowmuch);
    $(this).prev(".product__pricetags").find('span').text(priceProduct);
    $(this).parent(".product__pricetag").prev(".product__howmuch").children(".product__howmuches").replaceWith('<div class="product__howmuches">' + "+" + valhowmuch + '</div>');
    console.log(price);
    price = $(this).parent(".product__pricetag").parent(".product__settings").parent(".product__supplements").parent(".product__block").find(".product__price").text().replace(/[^0-9]/gi, '');
    price = parseInt(price, 10);
    console.log(price);
    price = price - prevvalhowmuch;
    price = price + priceProduct;
    $(this).parent(".product__pricetag").parent(".product__settings").parent(".product__supplements").parent(".product__block").find(".product__price").replaceWith('<div class="product__price">' + price + " руб." + '</div>');
  });

  $root.find("select").on('change', function (e) {
    $(this).parent(".product__sauces").prev(".product__settings").find(".product__howmuches").replaceWith('<div class="product__howmuches">' + "+0" + '</div>');
    $(this).parent(".product__sauces").prev(".product__settings").find('span').text("0");
    price = $(this).parent(".product__sauces").parent(".product__supplements").parent(".product__block").find(".product__price").text().replace(/[^0-9]/gi, '');
    price = parseInt(price, 10);
    price = price - priceProduct;
    $(this).parent(".product__sauces").parent(".product__supplements").parent(".product__block").find(".product__price").replaceWith('<div class="product__price">' + price + " руб." + '</div>');
    priceProduct = 0;
    valhowmuch = 0;

  });

  $root.find(".product__cancellation").on('click', function (e) {
    $(this).prev(".product__howmuches").replaceWith('<div class="product__howmuches">' + "+0" + '</div>');
    $(this).parent(".product__howmuch").next(".product__pricetag").find('span').text("0");
    price = $(this).parent(".product__howmuch").parent(".product__settings").parent(".product__supplements").parent(".product__block").find(".product__price").text().replace(/[^0-9]/gi, '');
    price = parseInt(price, 10);
    price = price - priceProduct;
    $(this).parent(".product__howmuch").parent(".product__settings").parent(".product__supplements").parent(".product__block").find(".product__price").replaceWith('<div class="product__price">' + price + " руб." + '</div>');
    priceProduct = 0;
    valhowmuch = 0;

  })

};
