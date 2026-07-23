const products = [
{
    name: "Mounjaro",
    generic: "Tirzepatide Injection",
    strength: "2.5mg/0.5ml",
    packing: "Single Dose Vial",
    manufacturer: "Eli Lilly"
},

{
    name: "Mounjaro",
    generic: "Tirzepatide Injection",
    strength: "5mg/0.5ml",
    packing: "Single Dose Vial",
    manufacturer: "Eli Lilly"
},

{
    name: "Mounjaro KwikPen",
    generic: "Tirzepatide Injection",
    strength: "2.5mg",
    packing: "3.0 ml Pre-filled Pen",
    manufacturer: "Eli Lilly"
},

{
    name: "Mounjaro KwikPen",
    generic: "Tirzepatide Injection",
    strength: "5mg",
    packing: "3.0 ml Pre-filled Pen",
    manufacturer: "Eli Lilly"
},

{
    name: "Mounjaro KwikPen",
    generic: "Tirzepatide Injection",
    strength: "7.5mg",
    packing: "3.0 ml Pre-filled Pen",
    manufacturer: "Eli Lilly"
},

{
    name: "Mounjaro KwikPen",
    generic: "Tirzepatide Injection",
    strength: "10mg",
    packing: "3.0 ml Pre-filled Pen",
    manufacturer: "Eli Lilly"
},

{
    name: "Mounjaro KwikPen",
    generic: "Tirzepatide Injection",
    strength: "12.5mg",
    packing: "3.0 ml Pre-filled Pen",
    manufacturer: "Eli Lilly"
},

{
    name: "Mounjaro KwikPen",
    generic: "Tirzepatide Injection",
    strength: "15mg",
    packing: "3.0 ml Pre-filled Pen",
    manufacturer: "Eli Lilly"
},

{
    name: "Wegovy FlexTouch",
    generic: "Semaglutide Injection",
    strength: "0.25mg",
    packing: "1.5ml Pre-filled Pen",
    manufacturer: "Novo Nordisk"
}

];
window.weightProducts = products;
const search = document.getElementById("searchInput");
const filter = document.getElementById("categoryFilter");
const manufacturer = document.getElementById("manufacturerFilter");
// Populate manufacturer dropdown automatically
const manufacturers = [...new Set(products.map(product => product.manufacturer))].sort();

manufacturers.forEach(company => {

    const option = document.createElement("option");
    option.value = company;
    option.textContent = company;
    manufacturer.appendChild(option);

});
const count = document.getElementById("productCount");

function displayProducts(list){

    const container = document.getElementById("productContainer");

    container.innerHTML = "";

    count.textContent = `${list.length} Products Found`;

const groups = {};
   
    list.forEach(product=>{

        if(!groups[product.generic]){
            groups[product.generic]=[];
        }

        groups[product.generic].push(product);

    });

    for(const generic in groups){

        container.innerHTML += `

        <div class="accordion">

            <div class="accordion-header">

                <div class="accordion-title">
                    ${generic}
                    <span class="count">(${groups[generic].length} Products)</span>
                </div>

                <div class="accordion-icon">▼</div>

            </div>

            <div class="accordion-content">

                <div class="product-grid">

                    ${groups[generic].map(product=>`

                    <div class="product-card"
     id="${product.name.toLowerCase().replace(/\s+/g,'-')}"
     onclick="openProduct(
'${product.name}',
'${product.generic}',
'${product.strength}',
'${product.packing}',
'${product.manufacturer}'
)">

                        <h3>${product.name}</h3>

                        <p><strong>Strength:</strong> ${product.strength}</p>

                        <p><strong>Packing:</strong> ${product.packing}</p>

                        <p><strong>Manufacturer:</strong> ${product.manufacturer}</p>

                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfMsIqbKJQlSclhLTOwSiU7SaShe-y_R9y6r875sU-gO9jkg/viewform?usp=header"
                        class="quote-btn"
                        target="_blank">
                        Request Quote
                        </a>

                    </div>

                    `).join("")}

                </div>

            </div>

        </div>

        `;

    }

    document.querySelectorAll(".accordion-header").forEach(header=>{

        header.addEventListener("click",()=>{

            header.parentElement.classList.toggle("active");

        });

    });
} // <-- closes displayProducts()

function filterProducts(){

    const keyword = search.value.toLowerCase().trim();
    const generic = filter.value.toLowerCase();
    const company = manufacturer.value.toLowerCase();

    const filtered = products.filter(product => {

        const matchSearch =
            product.name.toLowerCase().includes(keyword) ||
            product.generic.toLowerCase().includes(keyword) ||
            product.manufacturer.toLowerCase().includes(keyword);

        const matchGeneric =
            generic === "" ||
            product.generic.toLowerCase().includes(generic);

        const matchManufacturer =
            company === "" ||
            product.manufacturer.toLowerCase() === company;

        return matchSearch && matchGeneric && matchManufacturer;

    });

    displayProducts(filtered);

}
// ===============================
// PRODUCT POPUP
// ===============================

function openProduct(name,generic,strength,packing,manufacturer){

    document.getElementById("modalName").textContent = name;
    document.getElementById("modalGeneric").textContent = generic;
    document.getElementById("modalStrength").textContent = strength;
    document.getElementById("modalPacking").textContent = packing;
    document.getElementById("modalManufacturer").textContent = manufacturer;

    document.getElementById("productModal").classList.add("show");

}

document.querySelector(".close-modal").onclick = function(){

    document.getElementById("productModal").classList.remove("show");

}

window.onclick = function(e){

    if(e.target.id==="productModal"){

        document.getElementById("productModal").classList.remove("show");

    }
};
// ===============================
// AUTO OPEN SEARCHED PRODUCT
// ===============================

const params = new URLSearchParams(window.location.search);
const searchedProduct = params.get("product");

if (searchedProduct) {

    filter.value = "";
    manufacturer.value = "";
    search.value = searchedProduct;

    filterProducts();

    setTimeout(() => {

        const id = searchedProduct
            .toLowerCase()
            .replace(/\s+/g, "-");

        const card = document.getElementById(id);

        if (card) {

            // Open accordion
            const accordion = card.closest(".accordion");
            accordion.classList.add("active");

            // Scroll to product
            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            // Highlight product
            card.style.border = "3px solid #0077ff";
            card.style.boxShadow = "0 0 25px rgba(0,119,255,.5)";
            card.style.background = "#eef7ff";

            setTimeout(() => {
                card.style.border = "";
                card.style.boxShadow = "";
                card.style.background = "";
            }, 5000);

        }

    }, 300);

}
// ===============================
// INITIALIZE PAGE
// ===============================

displayProducts(products);

search.addEventListener("keyup", filterProducts);
filter.addEventListener("change", filterProducts);
manufacturer.addEventListener("change", filterProducts);
