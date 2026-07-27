const allProducts = [];

// ED Products
if (window.edProducts) {
    window.edProducts.forEach(product => {
        allProducts.push({
            category: "ED Medicines",
            name: product.name,
            generic: product.generic,
            page: `products/ed-medicines.html?product=${encodeURIComponent(product.name)}`
        });
    });
}

// Weight Loss Products
if (window.weightProducts) {
    window.weightProducts.forEach(product => {
        allProducts.push({
            category: "Weight Loss",
            name: product.name,
            generic: product.generic,
            page: `products/weight-loss.html?product=${encodeURIComponent(product.name)}`
        });
    });
}

window.allProducts = allProducts;

console.log("Total products:", window.allProducts.length);
console.log(window.allProducts);
