<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Forge Store | Products</title>

    <link rel="stylesheet" href="css/style.css">

    <style>
        .products-container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 20px;
        }

        .products-title {
            text-align: center;
            margin-bottom: 30px;
        }

        #products {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
        }

        .product-card {
            background: #fff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #ebeae5;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }

        .product-card img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            display: block;
        }

        .product-info {
            padding: 20px;
        }

        .product-info h3 {
            margin: 0 0 8px;
            font-size: 20px;
        }

        .product-info p {
            color: #777;
            margin: 5px 0 12px;
        }

        .price {
            font-size: 20px;
            font-weight: bold;
            margin: 15px 0;
        }

        .view-product,
        .add-cart {
            display: block;
            width: 100%;
            text-align: center;
            padding: 12px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            margin-top: 10px;
        }

        .view-product {
            background: #111;
            color: white;
        }

        .add-cart {
            background: #ff5a1f;
            color: white;
            border: none;
            font-size: 15px;
        }

        .view-product:hover {
            background: #333;
        }

        .add-cart:hover {
            background: #e64e17;
        }

        @media (max-width: 900px) {
            #products {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 600px) {
            #products {
                grid-template-columns: 1fr;
            }

            .product-card img {
                height: 280px;
            }
        }
    </style>
</head>

<body>

<header>
    <h1>Forge Store</h1>

    <nav>
        <a href="index.html">Home</a>
        <a href="products.html">Products</a>
        <a href="cart.html">Cart 🛒</a>
    </nav>
</header>


<main class="products-container">

    <h2 class="products-title">
        Our Products
    </h2>

    <!-- PRODUCTS WILL APPEAR HERE -->
    <div id="products"></div>

</main>


<footer>
    <p>© 2026 Forge Store. All rights reserved.</p>
</footer>


<!-- IMPORTANT -->
<script src="js/products.js"></script>

</body>
</html>
