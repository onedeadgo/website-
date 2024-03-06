<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Shopping Site</title>
    <style>
        /* Your existing CSS styles go here */

        /* New styles for the shopping cart */
        #cart {
            position: fixed;
            top: 0;
            right: 0;
            background-color: #333;
            color: #fff;
            padding: 1em;
            text-align: right;
        }

        #cart button {
            background-color: #4caf50;
            color: #fff;
            padding: 0.5em 1em;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        #cart button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <header>
        <h1>Simple Shopping Site</h1>
    </header>

    <section>
        <!-- Your existing product HTML goes here -->
    </section>

    <!-- Shopping Cart -->
    <div id="cart">
        <p>Shopping Cart</p>
        <button onclick="viewCart()">View Cart</button>
    </div>

    <script>
        // JavaScript for dynamic functionality
        let cart = [];

        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            alert(`Added ${productName} to the cart!`);
        }

        function viewCart() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
            } else {
                let cartItems = cart.map(item => `${item.name} - $${item.price.toFixed(2)}`);
                alert(`Your Cart:\n${cartItems.join('\n')}\nTotal: $${calculateTotal()}`);
            }
        }

        function calculateTotal() {
            return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
        }
    </script>
</body>
</html>
