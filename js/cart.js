const cartContainer = document.createElement('div');
cartContainer.classList.add('cart-container');
document.body.appendChild(cartContainer);

const cartIcon = document.createElement('i');
cartIcon.classList.add("bi.bi-cart2");
cartContainer.appendChild(cartIcon);

const cartCount = document.createElement('span');
cartCount.classList.add('cart-count');
cartContainer.appendChild(cartCount);

