import './index.sass';
import './index.pug';
import initIntro from './intro'
import  initSets from './sets'
import  initRolls from './rolls'
import  initPizza from './pizza'
import  initWok from './wok'
import initAction from  './action'
import initMotivation from  './motivation'
import initComment from  './comment'
import initContact from './contact'
import Swiper from "swiper/dist/js/swiper.min";
import 'swiper/dist/css/swiper.min.css';
import "tabslet/jquery.tabslet.min";

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

  let $action = $root.find('.action');
  if($action.length){
    initAction($action)
  }

  let $motivation = $root.find('.motivation');
  if($motivation.length){
    initMotivation($motivation)
  }

  let $comment = $root.find('.comment');
  if($comment.length){
    initComment($comment)
  }

  let $contact = $root.find('.contact');
  if($contact.length){
    initContact($contact)
  }

  $root.find('.swiper__section').each((i, elem) => {
    console.log(elem);
    new Swiper(elem, {
      speed: 400,
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        simulateTouch: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
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

  $.each(products,function(key,data) {
    $root.find("select").append('<option class="product__sausesItem" data-priceSause="'+data.price+'">' + data.name + '</option>');
  });

  class Counter {
    constructor($root) {
      this.$root = $root;
      this.$input = $root.find('.product__input');
      this.$price = $root.find('.product__price');
      this.$sauce = $root.find('.product__pricetags span');
      this.saucePrice = $root.find('select').find('option:selected').attr('data-pricesause');
      this.$select = $root.find('select');
      this.$countSupplements = $root.find('.product__howmuches span');
      this.price = $root.data('price');
      this.count = 1;
      this.number = 0;
      this.initButtons();
    }

    initButtons() {
      this.$root.find('.product__more').on("click", () => {
        if (typeof this.saucePrice === 'undefined'){
          this.saucePrice = 0;
        }
        this.count += 1;
        this.$input.val(this.count);
        this.$price.html((this.count * this.price) + (this.number * this.saucePrice));
      });

      this.$root.find('.product__less').on("click", () => {
        if (typeof this.saucePrice === 'undefined'){
          this.saucePrice = 0;
        }
        this.count = this.count > 1 ? this.count - 1 : 1;
        this.$input.val(this.count);
        this.$price.html((this.count * this.price) + (this.number * this.saucePrice));
      });

      this.$root.find('.product__cancellation').on("click", () => {
        this.$countSupplements.html(this.number = 0);
        this.$sauce.html(0);
        this.$price.html((this.count * this.price) + (this.number * this.saucePrice));
      });

      this.$root.find('.product__add').on("click", () => {
        this.number += 1;
        this.$countSupplements.html(this.number);
        this.$sauce.html(this.number * this.saucePrice);
        this.$price.html((this.count * this.price) + (this.number * this.saucePrice));
      });

      this.$root.find('select').on('change', () => {
        this.saucePrice = this.$select.find('option:selected').attr('data-pricesause');
        this.$countSupplements.html(this.number = 0);
        this.$sauce.html(0);
        this.$price.html((this.count * this.price) + (this.number * this.saucePrice));
      });
    }
  }

  $('.product').each(function() {
    new Counter($(this));
  });


  const $tabCaption  = $root.find(".action__caption");

  $tabCaption.on('click', 'li:not(.active)', function () {

    $(this)
      .addClass('active').siblings().removeClass('active')
      // .closest(".action__content").find(".action__tabs").removeClass('active').eq($(this).index()).addClass('active');

  });

  $('.action__content').tabslet({
    mouseevent: 'click',
    attribute: 'href',
    animation: true
  });

};
