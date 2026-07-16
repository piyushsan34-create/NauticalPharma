function displayProducts(list){

grid.innerHTML="";

list.forEach(product=>{

grid.innerHTML+=`

<div class="product-card">

<img src="../images/no-image.png" alt="${product.name}">

<h3>${product.name}</h3>

<p><strong>Generic:</strong> ${product.generic}</p>

<p><strong>Strength:</strong> ${product.strength}</p>

<p><strong>Packing:</strong> ${product.packing}</p>

<p><strong>Manufacturer:</strong> ${product.manufacturer}</p>

<a href="https://docs.google.com/forms/d/e/1FAIpQLSdfMsIqbKJQlSclhLTOwSiU7SaShe-y_R9y6r875sU-gO9jkg/viewform?usp=header" class="quote-btn" target="_blank">

Request Quote

</a>

</div>

`;

});

}
