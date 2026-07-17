const products = [
{
name:"Cenforce 25",
generic:"Sildenafil Citrate",
strength:"25 mg",
packing:"10 x 10 Tablets",
manufacturer:"Centurion Laboratories"
},
{
name:"Cenforce 50",
generic:"Sildenafil Citrate",
strength:"50 mg",
packing:"10 x 10 Tablets",
manufacturer:"Centurion Laboratories"
},
{
name:"Cenforce 100",
generic:"Sildenafil Citrate",
strength:"100 mg",
packing:"10 x 10 Tablets",
manufacturer:"Centurion Laboratories"
},
{
name:"Kamagra Gold 100",
generic:"Sildenafil Citrate",
strength:"100 mg",
packing:"10 x 10 Tablets",
manufacturer:"Ajanta Pharma"
},
{
name:"Vidalista 20",
generic:"Tadalafil",
strength:"20 mg",
packing:"10 x 10 Tablets",
manufacturer:"Centurion Laboratories"
},
{
name:"Vilitra 20",
generic:"Vardenafil",
strength:"20 mg",
packing:"10 x 10 Tablets",
manufacturer:"Centurion Laboratories"
},
{
name:"Avana 100",
generic:"Avanafil",
strength:"100 mg",
packing:"4 x 4 Tablets",
manufacturer:"Sunrise Remedies"
}
];

const grid = document.getElementById("productGrid");
const count = document.getElementById("productCount");
const search = document.getElementById("searchInput");
const filter = document.getElementById("categoryFilter");

function displayProducts(list){

const container = document.getElementById("productContainer");

container.innerHTML = "";

const groups = {};

list.forEach(product=>{

    if(!groups[product.generic]){
        groups[product.generic] = [];
    }

    groups[product.generic].push(product);

});

for(const generic in groups){

container.innerHTML += `

<div class="medicine-section">

<h2>${generic}</h2>

<div class="product-grid">

${groups[generic].map(product=>`

<div class="product-card">

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

`;

}

}

displayProducts(products);

search.addEventListener("keyup", filterProducts);
filter.addEventListener("change", filterProducts);

function filterProducts(){

    const keyword = search.value.toLowerCase();
    const generic = filter.value.toLowerCase();

    const filtered = products.filter(product => {

        return (
            product.name.toLowerCase().includes(keyword) &&
            (generic === "" || product.generic.toLowerCase().includes(generic))
        );

    });

    displayProducts(filtered);

}
