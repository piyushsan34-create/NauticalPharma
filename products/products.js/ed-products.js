const products = [

{
    name: "Cenforce 100",
    generic: "Sildenafil Citrate",
    strength: "100 mg",
    packing: "10 x 10 Tablets",
    manufacturer: "Centurion Laboratories",
    image: "images/cenforce100.jpg"
},

{
    name: "Kamagra Gold 100",
    generic: "Sildenafil Citrate",
    strength: "100 mg",
    packing: "10 x 10 Tablets",
    manufacturer: "Ajanta Pharma",
    image: "images/kamagra-gold.jpg"
},

{
    name: "Vidalista 20",
    generic: "Tadalafil",
    strength: "20 mg",
    packing: "10 x 10 Tablets",
    manufacturer: "Centurion Laboratories",
    image: "images/vidalista20.jpg"
},

{
    name: "Super P Force",
    generic: "Sildenafil + Dapoxetine",
    strength: "100mg / 60mg",
    packing: "10 x 10 Tablets",
    manufacturer: "Sunrise Remedies",
    image: "images/super-p-force.jpg"
}

];

const grid = document.getElementById("productGrid");

function displayProducts(list){

grid.innerHTML="";

list.forEach(product=>{

grid.innerHTML += `

<div class="product-card">

<img src="../${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p><strong>Generic:</strong> ${product.generic}</p>

<p><strong>Strength:</strong> ${product.strength}</p>

<p><strong>Packing:</strong> ${product.packing}</p>

<p><strong>Manufacturer:</strong> ${product.manufacturer}</p>

<a href="../index.html#contact" class="btn inquiry-btn">
Request Quote
</a>

</div>

`;

});

}

displayProducts(products);

const search=document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const filtered=products.filter(product=>

product.name.toLowerCase().includes(value) ||

product.generic.toLowerCase().includes(value) ||

product.strength.toLowerCase().includes(value)

);

displayProducts(filtered);

});

}
