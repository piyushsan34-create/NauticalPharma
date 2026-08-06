// ======================================
// UNIVERSAL PRODUCT TEMPLATE
// ======================================

let products = [];

let search;
let filter;
let manufacturer;
let container;
let count;

// ======================================
// INITIALIZE PRODUCT PAGE
// ======================================

function initProducts(productArray) {

    products = productArray;

search = document.getElementById("searchInput");
filter = document.getElementById("categoryFilter");
manufacturer = document.getElementById("manufacturerFilter");
container = document.getElementById("productContainer");
count = document.getElementById("productCount");

    // Safety checks
    if (!search || !filter || !manufacturer || !container || !count) {
        console.error("Required HTML elements are missing.");
        return;
    }

  console.log("Template initialized successfully.");

// ===========================
// Populate Generic Dropdown
// ===========================

const generics = [...new Set(products.map(product => product.generic))].sort();

generics.forEach(generic => {

    const option = document.createElement("option");
    option.value = generic;
    option.textContent = generic;

    filter.appendChild(option);

});
  // ===========================
// Populate Manufacturer Dropdown
// ===========================

const manufacturers = [...new Set(products.map(product => product.manufacturer))].sort();

manufacturers.forEach(company => {

    const option = document.createElement("option");
    option.value = company;
    option.textContent = company;

    manufacturer.appendChild(option);

});
  
displayProducts(products);

} // <-- End of initProducts()


// ======================================
// DISPLAY PRODUCTS
// ======================================

function displayProducts(list) {

    container.innerHTML = "";

    count.textContent = `${list.length} Products Found`;

    list.forEach(product => {

        container.innerHTML += `

        <div class="product-card">

            <h3>${product.name}</h3>

            <p><strong>Strength:</strong> ${product.strength}</p>

            <p><strong>Packing:</strong> ${product.packing}</p>

            <p><strong>Manufacturer:</strong> ${product.manufacturer}</p>

        </div>

        `;

    });

}
