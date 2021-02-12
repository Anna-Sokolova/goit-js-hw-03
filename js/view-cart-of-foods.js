import cart from './cart-of-foods.js';

const showCartBtn = document.querySelector('.js-show-cart');
const addAppleCartBtn = document.querySelector('button[data-product="🍎"]');
const addGrapeCartBtn = document.querySelector('button[data-product="🍇"]');
const addLemonCartBtn = document.querySelector('button[data-product="🍋"]');
const addStrawberryCartBtn = document.querySelector('button[data-product="🍓"]');
const clearCartBtn = document.querySelector('button[data-btn="clear"]');


showCartBtn.addEventListener('click', () => {
  console.table(cart.getItems());
});

addAppleCartBtn.addEventListener(
  'click',
  cart.add.bind(cart, { name: '🍎', price: 50 }),
);

addGrapeCartBtn.addEventListener(
  'click',
  cart.add.bind(cart, { name: '🍇', price: 70 }),
);

addLemonCartBtn.addEventListener(
  'click',
  cart.add.bind(cart, { name: '🍋', price: 60 }),
);

addStrawberryCartBtn.addEventListener(
  'click',
  cart.add.bind(cart, { name: '🍓', price: 110 }),
);

clearCartBtn.addEventListener(
  'click',
  cart.clear.bind(cart),
);
