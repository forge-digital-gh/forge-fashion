function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product, quantity = 1) {
    const cart = getCart();

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    saveCart(cart);
    updateCartCount();

    alert(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    let cart = getCart();

    cart = cart.filter(item => item.id !== productId);

    saveCart(cart);
    updateCartCount();

    if (typeof renderCart === "function") {
        renderCart();
    }
}

function updateQuantity(productId, quantity) {
    const cart = getCart();

    const item = cart.find(item => item.id === productId);

    if (!item) return;

    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    item.quantity = quantity;

    saveCart(cart);
    updateCartCount();

    if (typeof renderCart === "function") {
        renderCart();
    }
}

function getCartTotal() {
    const cart = getCart();

    return cart.reduce(
        (total, item) =>
            total + (Number(item.price) * item.quantity),
        0
    );
}

function updateCartCount() {
    const cart = getCart();

    const count = cart.reduce(
        (total, item) =>
            total + (item.quantity || 0),
        0
    );

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = count;
    }
}

function renderCart() {
    const cartItemsEl = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total");

    if (!cartItemsEl) return;

    const cart = getCart();

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
            <div class="empty">
                <p>Your cart is empty.</p>
            </div>
        `;
    } else {
        cartItemsEl.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <div class="item-price">GH₵${Number(item.price).toFixed(2)}</div>
                </div>
                <div class="quantity">
                    <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <button class="remove" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        `).join("");
    }

    if (cartTotalEl) {
        cartTotalEl.textContent = getCartTotal().toFixed(2);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderCart();
});
