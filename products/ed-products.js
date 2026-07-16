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
name:"Cenforce 120",
generic:"Sildenafil Citrate",
strength:"120 mg",
packing:"10 x 10 Tablets",
manufacturer:"Centurion Laboratories"
},

{
name:"Cenforce 150",
generic:"Sildenafil Citrate",
strength:"150 mg",
packing:"10 x 10 Tablets",
manufacturer:"Centurion Laboratories"
},

{
name:"Cenforce 200",
generic:"Sildenafil Citrate",
strength:"200 mg",
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
name:"Suhagra 100",
generic:"Sildenafil Citrate",
strength:"100 mg",
packing:"10 x 10 Tablets",
manufacturer:"Cipla"
},

{
name:"Malegra 100",
generic:"Sildenafil Citrate",
strength:"100 mg",
packing:"10 x 10 Tablets",
manufacturer:"Sunrise Remedies"
},

{
name:"Fildena 100",
generic:"Sildenafil Citrate",
strength:"100 mg",
packing:"10 x 10 Tablets",
manufacturer:"Fortune Healthcare"
},

{
name:"Vidalista 20",
generic:"Tadalafil",
strength:"20 mg",
packing:"10 x 10 Tablets",
manufacturer:"Centurion Laboratories"
},

{
name:"Vidalista 40",
generic:"Tadalafil",
strength:"40 mg",
packing:"10 x 10 Tablets",
manufacturer:"Centurion Laboratories"
},

{
name:"Vidalista 60",
generic:"Tadalafil",
strength:"60 mg",
packing:"10 x 10 Tablets",
manufacturer:"Centurion Laboratories"
},

{
name:"Tadalista 20",
generic:"Tadalafil",
strength:"20 mg",
packing:"10 x 10 Tablets",
manufacturer:"Fortune Healthcare"
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
const grid=document.getElementById("productGrid");
const search=document.getElementById("searchInput");
const filter=document.getElementById("categoryFilter");

function displayProducts(list){

grid.innerHTML="";

list.forEach(product=>{

grid.innerHTML+=`

<div class="product-card">

<h3>${product.name}</h3>

<p><strong>Generic:</strong> ${product.generic}</p>

<p><strong>Strength:</strong> ${product.strength}</p>

<p><strong>Packing:</strong> ${product.packing}</p>

<p><strong>Manufacturer:</strong> ${product.manufacturer}</p>

<a href="https://forms.gle/YOUR_GOOGLE_FORM_LINK" class="quote-btn" target="_blank"> Request Quote </a>

</div>

`;

});

}

displayProducts(products);

search.addEventListener("keyup",filterProducts);
filter.addEventListener("change",filterProducts);

function filterProducts(){

const keyword=search.value.toLowerCase();

const generic=filter.value;

const filtered=products.filter(product=>{

const matchName=product.name.toLowerCase().includes(keyword);

const matchGeneric=generic=="" || product.generic.includes(generic);

return matchName && matchGeneric;

});

displayProducts(filtered);

}
