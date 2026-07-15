// ===============================
// Nautical Pharma Website Script
// ===============================


// CART SYSTEM

let cart = [];


// Add product to cart

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    updateCart();

    alert(productName + " added to cart");

}



// Update cart counter

function updateCart(){

    let count = document.getElementById("cart-count");

    if(count){

        count.innerHTML = cart.length;

    }

}



// Open cart

function openCart(){

    let cartBox = document.getElementById("cart-items");

    if(!cartBox) return;


    cartBox.innerHTML = "";


    if(cart.length === 0){

        cartBox.innerHTML = "<p>Your cart is empty</p>";

        return;

    }



    let total = 0;


    cart.forEach((item,index)=>{


        total += item.price;


        cartBox.innerHTML += `

        <div class="cart-product">

        <p>
        ${item.name}
        - $${item.price}
        </p>

        <button onclick="removeCart(${index})">
        Remove
        </button>

        </div>

        `;


    });



    cartBox.innerHTML += `

    <hr>

    <h3>Total: $${total}</h3>

    `;


}



// Remove item

function removeCart(index){

    cart.splice(index,1);

    updateCart();

    openCart();

}



// Email Order Function


function sendOrder(){


let name = document.getElementById("customer-name").value;

let phone = document.getElementById("customer-phone").value;


let products = "";


cart.forEach(item=>{


products += 
item.name +
" - $" +
item.price +
"\n";


});



let emailBody = `

Customer Name:
${name}


Phone:
${phone}


Order Details:

${products}


`;



window.location.href =
"mailto:Info@nauticalpharma.com?subject=Nautical Pharma Order&body="
+
encodeURIComponent(emailBody);



}




// Mobile Menu


function toggleMenu(){

let menu=document.getElementById("nav-menu");


if(menu){

menu.classList.toggle("active");

}

}





// Hero Image Slider


let heroImages=[

"https://i.ibb.co/8DZJjSyF/hero3.jpg",

"https://i.ibb.co/hRGrLXK5/hero2.jpg",

"https://i.ibb.co/RpL7Bwjk/hero.jpg"

];


let heroIndex=0;



function changeHero(){


let hero=document.querySelector(".hero");


if(hero){


hero.style.backgroundImage =
`url(${heroImages[heroIndex]})`;


heroIndex++;


if(heroIndex >= heroImages.length){

heroIndex=0;

}


}


}



setInterval(changeHero,5000);




// Smooth scrolling


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


e.preventDefault();


document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});


});


});
