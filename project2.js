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

    const input = document.getElementById("autocomplete-input1");
    const resultsDiv = document.getElementById("autocomplete-results1");

    input.addEventListener("input", function () {
      const query = input.value.toLowerCase();
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


