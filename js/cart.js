/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  document.getElementById('tbody');
  // TODO: Iterate over the items in the cart
  items.appendChild(cart);
  // TODO: Create a TR
  let tr1 = document.createElement('tr');
  // TODO: Create a TD for the delete link, quantity,  and the item
  let linkQuantityItem = document.createElement('td');
  linkQuantityItem.appendChild('th');
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let tbody1 = document.getElementById('tbody');
  tr1.appendChild(tbody1);
  tr1.appendChild(linkQuantityItem);
}

function removeItemFromCart(event) {
  event.preventDefault();


  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem = cart.addEventListener('Remove', handleSubmit);
  
  // TODO: Save the cart back to local storage
  let stringifiedCart = JSON.stringify(cart);
  localStorage.setItem('cart', stringifiedCart);

  // TODO: Re-draw the cart table
  renderCart();
}
let retreivedCart = localStorage.getItem('cart');
let parsedCart = JSON.parse(retreivedCart);

// This will initialize the page and draw the cart on screen
renderCart();
