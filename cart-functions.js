// Function to add item to the cart
function addToCart(name, price) {
    const item = { name, price };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
    displayCart(); // Update cart display after adding item
    displayTotalPrice(); // Update total price display after adding item
}

// Function to remove item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove item from cart array
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Update cart display after removing item
    displayTotalPrice(); // Update total price display after removing item
}

// Function to calculate total price
function calculateTotalPrice() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
    });
    return totalPrice;
}

// Function to display total price
function displayTotalPrice() {
    const totalPriceContainer = document.getElementById('total-price');
    const totalPrice = calculateTotalPrice();
    totalPriceContainer.textContent = `Your total price comes to: $${totalPrice.toFixed(2)}`;
}

// Function to display cart items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    
    cartContainer.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No items in the cart.</p>';
    } else {
        cart.forEach((item, index) => {
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${getImageUrl(item.name)}" width="100">
                    <p>${item.name} - $${item.price}</p>
                    <button onclick="removeFromCart(${index})">Remove from Cart</button>
                </div>
            `;
        });
    }
}

// Function to get image URL based on game name
function getImageUrl(gameName) {
    // Logic to return image URL based on game name
    if (gameName === "Red Dead Redemption 2") {
        return "pictures/Red_Dead_Redemption_II.jpeg";
    } else if (gameName === "Doom Eternal") {
        return "pictures/doom eternal.webp";
    } else if (gameName === "Grand Theft Auto V") {
        return "pictures/gta.png";
    } else if (gameName === "Cyberpunk 2077") {
        return "pictures/cyberpunk.jpeg";
    } else if (gameName === "Call of Duty: Black Ops Cold War") {
        return "pictures/BOCW_Cover_Art.jpeg";
    } else if (gameName === "Assassin's Creed Valhalla") {
        return "pictures/Assassin's_Creed_Valhalla_cover.jpeg";
    }
    // Add more logic for other games if needed
}

// Call the function to display cart items and total price when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
    displayTotalPrice();
});


