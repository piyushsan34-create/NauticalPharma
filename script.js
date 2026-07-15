let cart = [];

function addToCart(productName, price){

    cart.push({
        name: productName,
        price: price
    });

    updateCart();

}


function updateCart(){

    let cartCount = document.getElementById("cart-count");

    if(cartCount){
        cartCount.innerHTML = cart.length;
    }

    console.log(cart);

}


function showCart(){

    if(cart.length === 0){

        alert("Your cart is empty");

        return;
    }


    let message="Your Cart:\n\n";


    cart.forEach((item,index)=>{

        message += 
        (index+1)+". "+
        item.name+
        " - $"+
        item.price+
        "\n";

    });


    alert(message);

}
