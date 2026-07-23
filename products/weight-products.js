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
const count = document.getElementById("productCount");
const container = document.getElementById("productContainer");

// Populate Generic dropdown
const generics = [...new Set(products.map(p => p.generic))].sort();

generics.forEach(generic => {
    const option = document.createElement("option");
    option.value = generic;
    option.textContent = generic;
    filter.appendChild(option);
});

// Populate Manufacturer dropdown
const manufacturers = [...new Set(products.map(p => p.manufacturer))].sort();

manufacturers.forEach(company => {
    const option = document.createElement("option");
    option.value = company;
    option.textContent = company;
    manufacturer.appendChild(option);
});
