const productContainers = [...document.querySelectorAll('.Product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-button')];
const preBtn = [...document.querySelectorAll('.pre-button')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});

/*----------------------chnage images product-------------------*/
function womenApparel() {

  const allProducts=document.querySelectorAll('.Product-card');

  allProducts.forEach(product=>{
    product.style.display='none';
  })

   const womenProducts = document.querySelectorAll('.Product-card[data-category="women"]');
    womenProducts.forEach(product => {
        product.style.display = 'block'; 
    });

    document.getElementById('PICTURE1').src = 'https://d1flfk77wl2xk4.cloudfront.net/Assets/94/370/XXL_p0198937094.jpg';
    document.getElementById('PICTURE3').src = 'https://img.fruugo.com/product/8/03/725555038_max.jpg';
    document.getElementById('PICTURE5').src = 'https://d1flfk77wl2xk4.cloudfront.net/Assets/57/191/XXL_p0189619157.jpg';
    document.getElementById('PICTURE7').src = 'https://i.pinimg.com/474x/ae/92/82/ae92821d460f48cbc320c65d3db4bfe9.jpg';
}
  function menApparel() {
    const allProducts = document.querySelectorAll('.Product-card');
    
    
    allProducts.forEach(product => {
        product.style.display = 'none';
    });

    
    const menProducts = document.querySelectorAll('.Product-card[data-category="men"]');
    menProducts.forEach(product => {
        product.style.display = 'block'; 
    });

    
    document.getElementById('PICTURE2').src = 'https://ae01.alicdn.com/kf/S78fe8c605ea145f49e0e06f4e9049946j.jpg_960x960.jpg';
    document.getElementById('PICTURE4').src = 'https://ae01.alicdn.com/kf/S3370161eb82349fab2aed406b7ef37b6H.jpg_960x960.jpg';
    document.getElementById('PICTURE6').src = 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/469383/1.jpg?5668';
    document.getElementById('PICTURE8').src = 'https://image.made-in-china.com/155f0j00zTRcbJYsCqoe/2022-Men-s-Suit-Korean-Version-Casual-Men-s-Stand-Collar-Small-Suit-Fashion-Personality-Jacket-Men-s-Suit-Men.webp';
}

const input = document.getElementById("autocomplete-input1");
const resultsContainer = document.getElementById("autocomplete-results1");

const sampleData = [
      { name: "Sweater", url: "Product_Page.html" },
      { name: "Hawaiian Shirt", url: "Product_Page.html" },
      { name: "Jacket", url: "Product_Page.html" },
      { name: "Mens T-shirt", url: "Product_Page.html" },
      { name: "Maxi Dress", url: "Product_Page.html" },
      { name: "Bemil Dress", url: "Product_Page.html" },
      { name: "Bodycon Dress", url: "Product_Page.html" },
      { name: "Sun Dress", url: "Product_Page.html" },
];

// Function to filter the sample data based on user input
function filterResults(query) {
  return sampleData.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Function to display the autocomplete results
function displayResults(results) {
  resultsContainer.innerHTML = "";
  if (results.length === 0) {
    resultsContainer.style.display = "none";
    return;
  }

  results.forEach(result => {
    const div = document.createElement("div");
    div.classList.add("autocomplete-item");
    div.textContent = result.name;
    div.addEventListener("click", () => {
      window.location.href = result.url;  // Redirect to the URL of the selected result
    });
    resultsContainer.appendChild(div);
  });

  resultsContainer.style.display = "block";
}

// Event listener for input changes
input.addEventListener("input", () => {
  const query = input.value.trim();
  if (query) {
    const filteredResults = filterResults(query);
    displayResults(filteredResults);
  } else {
    resultsContainer.style.display = "none";
  }
});

// Hide results if the user clicks outside the input or results
document.addEventListener("click", (event) => {
  if (!input.contains(event.target) && !resultsContainer.contains(event.target)) {
    resultsContainer.style.display = "none";
  }
});


