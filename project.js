/* -----------Autocomplete Search--------------*/
const products = [
      { name: "Sweater", url: "Product_Page" },
      { name: "Hawaiian Shirt", url: "Product_Page" },
      { name: "Jacket", url: "Product_Page" },
      { name: "Mens T-shirt", url: "Product_Page" },
      { name: "Maxi Dress", url: "Product_Page" },
      { name: "Bemil Dress", url: "Product_Page" },
      { name: "Bodycon Dress", url: "Product_Page" },
      { name: "Sun Dress", url: "Product_Page" },
    ];

    const myInput = document.getElementById("autocomplete-input");
    const resultsDiv = document.getElementById("autocomplete-results");

    myInput.addEventListener("input", function () {
      const query = myInput.value.toLowerCase();
      resultsDiv.innerHTML = ''; 

      if (query) {
        
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

        filteredProducts.forEach(product => {
          const div = document.createElement("div");
          div.textContent = product.name; 
          
         
          div.addEventListener("click", () => {
            window.location.href = product.url; 
          });

          resultsDiv.appendChild(div);
        });
      }
    });


// Initialize an empty cart
        let cart = [];

        // Toggle Sidebar Visibility
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            if (sidebar.style.right === '0px') {
                sidebar.style.right = '-300px';  // Hide sidebar
            } else {
                sidebar.style.right = '0px';  // Show sidebar
            }
        }

        // Add Product to Cart
        function addToCart(productName, productPrice) {
            // Check if the product is already in the cart
            const existingProductIndex = cart.findIndex(item => item.name === productName);

            if (existingProductIndex !== -1) {
                // If product exists, increase quantity
                cart[existingProductIndex].quantity += 1;
            } else {
                // If product is not in cart, add it
                const newProduct = {
                    name: productName,
                    price: productPrice,
                    quantity: 1
                };
                cart.push(newProduct);
            }

            renderCartItems();
        }

        // Render Cart Items in Sidebar
        function renderCartItems() {
            const cartItemsContainer = document.getElementById('cartItems');
            cartItemsContainer.innerHTML = '';

            // Add each product in the cart to the sidebar
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <span>${item.name} - $${item.price} x ${item.quantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <button onclick="removeFromCart(${index})">Remove</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }

        // Increase Quantity of a Product
        function increaseQuantity(index) {
            cart[index].quantity += 1;
            renderCartItems();
        }

        // Decrease Quantity of a Product
        function decreaseQuantity(index) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
                renderCartItems();
            }
        }

        // Remove Product from Cart
        function removeFromCart(index) {
            // Remove the item from the cart
            cart.splice(index, 1);
            renderCartItems();
        }

        // Checkout Functionality (optional for now)
        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
            } else {
                let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
                alert(`Your total is $${total}. Proceeding to checkout.`);
            }
            cart = []; // Clear the cart
            renderCartItems();
            toggleSidebar(); // Close the sidebar after checkout
        }