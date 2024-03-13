<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
    <style>
        /* Add CSS styles here */
    </style>
</head>
<body>
    <div class="container">
        <h1>Shopping Cart</h1>
        <table id="cartTable">
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
        </table>
        <div class="total" id="total">
            <strong>Total: $0.00</strong>
        </div>
        <button onclick="addItem()">Add Item</button>
    </div>

    <script>
        function addItem() {
            var productName = prompt("Enter product name:");
            var productPrice = parseFloat(prompt("Enter product price:"));
            var productQuantity = parseInt(prompt("Enter product quantity:"));
            
            if (!productName || isNaN(productPrice) || isNaN(productQuantity)) {
                alert("Invalid input. Please try again.");
                return;
            }

            var table = document.getElementById("cartTable");
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = productName;
            cell2.innerHTML = "$" + productPrice.toFixed(2);
            cell3.innerHTML = productQuantity;
            cell4.innerHTML = "$" + (productPrice * productQuantity).toFixed(2);

            updateTotal();
        }

        function updateTotal() {
            var table = document.getElementById("cartTable");
            var rows = table.rows;
            var total = 0;

            for (var i = 1; i < rows.length; i++) {
                var row = rows[i];
                var price = parseFloat(row.cells[1].innerHTML.substring(1));
                var quantity = parseInt(row.cells[2].innerHTML);
                total += price * quantity;
            }

            document.getElementById("total").innerHTML = "<strong>Total: $" + total.toFixed(2) + "</strong>";
        }
    </script>
</body>
</html>
