const products = [
    {
        id: 1,
        name: "Classic Sneakers",
        price: 250,
        category: "Shoes",
        description: "Comfortable and stylish sneakers for everyday use.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Stylish Wristwatch",
        price: 180,
        category: "Accessories",
        description: "A stylish wristwatch for everyday wear.",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Premium T-Shirt",
        price: 120,
        category: "Clothing",
        description: "A comfortable premium T-shirt.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Leather Backpack",
        price: 220,
        category: "Bags",
        description: "A stylish backpack for your everyday essentials.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Wireless Headphones",
        price: 350,
        category: "Electronics",
        description: "Modern wireless headphones.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Classic Sunglasses",
        price: 150,
        category: "Accessories",
        description: "Classic sunglasses with a stylish design.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    }
];

function displayProducts() {
    const container = document.getElementById("products");

    if (!container) return;

    container.innerHTML = "";

    products.forEach(function(product) {

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.category}</p>

                <div class="price">
                    GH₵${product.price.toFixed(2)}
                </div>

                <a class="view-product"
                   href="product.html?id=${product.id}">
                    View Product
                </a>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}

function addToCart(productId, quantity = 1) {

    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(function(item) {
        return item.id === productId;
    });

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            quantity: quantity
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart!");
}

function displaySingleProduct() {

    const container = document.getElementById("product");

    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    const product = products.find(function(item) {
        return item.id === id;
    });

    if (!product) {
        container.innerHTML = `
            <div class="not-found">
                <h2>Product Not Found</h2>
                <a href="products.html">Back to Products</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="product">

            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-info">

                <span class="category">
                    ${product.category}
                </span>

                <h2>${product.name}</h2>

                <p class="description">
                    ${product.description}
                </p>

                <div class="price">
                    GH₵${product.price.toFixed(2)}
                </div>

                <div class="quantity">

                    <button onclick="changeQuantity(-1)">
                        −
                    </button>

                    <span id="quantity">1</span>

                    <button onclick="changeQuantity(1)">
                        +
                    </button>

                </div>

                <button
                    class="add-cart"
                    onclick="addSingleProduct(${product.id})">
                    Add to Cart 🛒
                </button>

            </div>

        </div>
    `;
}

let quantity = 1;

function changeQuantity(amount) {

    quantity += amount;

    if (quantity < 1) {
        quantity = 1;
    }

    const element = document.getElementById("quantity");

    if (element) {
        element.textContent = quantity;
    }
}

function addSingleProduct(productId) {

    addToCart(productId, quantity);

    quantity = 1;
}

document.addEventListener("DOMContentLoaded", function() {

    displayProducts();

    displaySingleProduct();

});
