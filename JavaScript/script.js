// =========================
// GET CART
// =========================

// New cart name so old test items are ignored
let cart = JSON.parse(localStorage.getItem("popsCart")) || [];


// =========================
// CART BUTTON
// =========================

const cartButton = document.querySelector(".cart-button");


// =========================
// ADD TO CART
// =========================

const addButtons = document.querySelectorAll(".add-to-cart");

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find the menu card
        const card = button.closest(".menu-card");

        // Get food information
        const name = card.querySelector("h4").textContent;

        const priceText = card.querySelector("strong").textContent;

        const price = Number(priceText.replace("R", ""));

        // Get food picture
        const image = card.querySelector("img").src;

        // Add item to cart
        cart.push({
            name: name,
            price: price,
            image: image
        });

        // Save cart
        localStorage.setItem("popsCart", JSON.stringify(cart));

        // Update number on cart button
        updateCartCount();

    });

});


// =========================
// CART NUMBER
// =========================

function updateCartCount() {

    if (!cartButton) {
        return;
    }

    // Remove old number
    const oldCount = cartButton.querySelector(".cart-count");

    if (oldCount) {
        oldCount.remove();
    }

    // Don't show a number when cart is empty
    if (cart.length === 0) {
        return;
    }

    // Create number
    const count = document.createElement("span");

    count.classList.add("cart-count");

    count.textContent = cart.length;

    cartButton.appendChild(count);

}


// Update number when page opens
updateCartCount();


// =========================
// DISPLAY CART
// =========================

const cartItems = document.getElementById("cart-items");

const cartTotal = document.getElementById("cart-total");


if (cartItems) {

    displayCart();

}


function displayCart() {

    // Empty the current cart display
    cartItems.innerHTML = "";

    let total = 0;


    // Check if cart is empty
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        cartTotal.textContent = "0";

        updateCartCount();

        return;
    }


    // Display every item
    cart.forEach(function(item, index) {

        const itemDiv = document.createElement("div");

        itemDiv.classList.add("cart-item");


        itemDiv.innerHTML = `
            
            <img src="${item.image}" alt="${item.name}">

            <div class="cart-item-info">

                <h3>${item.name}</h3>

                <p>R${item.price}</p>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(itemDiv);

        total = total + item.price;

    });


    // Show total
    cartTotal.textContent = total;


    // Update cart number
    updateCartCount();

}


// =========================
// REMOVE ONE ITEM
// =========================

function removeItem(index) {

    // Remove item from array
    cart.splice(index, 1);

    // Save updated cart
    localStorage.setItem("popsCart", JSON.stringify(cart));

    // Display updated cart
    displayCart();

}


// =========================
// CLEAR CART
// =========================

const clearButton = document.getElementById("clear-cart");


if (clearButton) {

    clearButton.addEventListener("click", function() {

        // Remove everything
        cart = [];

        // Delete saved cart
        localStorage.removeItem("popsCart");

        // Display empty cart
        displayCart();

    });

}


// =========================
// CHECKOUT
// =========================

const checkoutButton = document.getElementById("checkout");


if (checkoutButton) {

    checkoutButton.addEventListener("click", function() {

        // Check if cart is empty
        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }


        // Checkout message
        alert("Order placed successfully! Thank you for ordering from Pop's Restaurant.");


        // Remove the order from the cart
        cart = [];

        localStorage.removeItem("popsCart");


        // Update cart
        displayCart();

    });

}