const allProducts = [];

// Import all ED products
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

window.allProducts = allProducts;

