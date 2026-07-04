const cartIcon = document.querySelector(".cart-icon");
const cartSidebar = document.querySelector(".cart-sidebar");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCart = document.querySelector(".close-cart");

cartIcon.onclick = (e)=>{

    e.preventDefault();

    cartSidebar.classList.add("active");

    cartOverlay.classList.add("active");

}

closeCart.onclick = ()=>{

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

}

cartOverlay.onclick = ()=>{

    cartSidebar.classList.remove("active");

    cartOverlay.classList.remove("active");

}


//add to cart button

let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

const cartButtons = document.querySelectorAll(".cart-btn");

const cartItems = document.querySelector(".cart-items");

const total = document.querySelector(".cart-total");

const cartCount = document.querySelector(".cart-count");

cartButtons.forEach(button=>{

button.addEventListener("click",()=>{

const product={

id:button.dataset.id,

name:button.dataset.name,

price:Number(button.dataset.price),

image:button.dataset.image,

quantity:1

};

addToCart(product);

});

});

function addToCart(product){

    const existing = cart.find(item => item.id === product.id);

    if(existing){

        existing.quantity++;

    }else{

        cart.push(product);

    }

    updateCart();

}

//FUNCTION ADD TO CART

function updateCart(){

    cartItems.innerHTML="";

    let grandTotal=0;
    let items=0;

    cart.forEach(product=>{

        grandTotal += product.price * product.quantity;
        items += product.quantity;

        cartItems.innerHTML += `

        <div class="cart-product">

            <img src="${product.image}" alt="${product.name}">

            <div class="cart-info">

                <h4>${product.name}</h4>

                <p>$${product.price}</p>

                <div class="quantity">

                    <button onclick="decreaseQuantity('${product.id}')">−</button>

                    <span>${product.quantity}</span>

                    <button onclick="increaseQuantity('${product.id}')">+</button>

                </div>

                <button class="remove-btn"
                onclick="removeItem('${product.id}')">

                    Remove

                </button>

            </div>

        </div>

        `;
                localStorage.setItem(
            "shoppingCart",
            JSON.stringify(cart)
);

    });

    total.innerText = grandTotal.toFixed(2);

    cartCount.innerText = items;

    saveCart();

}


function increaseQuantity(id){

    cart.forEach(product=>{

        if(product.id===id){

            product.quantity++;

        }

    });

    updateCart();

}


function decreaseQuantity(id){

    cart.forEach(product=>{

        if(product.id===id){

            if(product.quantity>1){

                product.quantity--;

            }

        }

    });

    updateCart();

}


let qty=1;

const qtyValue=document.getElementById("qtyValue");

document.getElementById("plusQty").onclick=()=>{

qty++;

qtyValue.innerText=qty;

}

document.getElementById("minusQty").onclick=()=>{

if(qty>1){

qty--;

qtyValue.innerText=qty;

}

}

function removeItem(id){

    cart = cart.filter(product => product.id !== id);

    updateCart();

}

function saveCart(){

    localStorage.setItem(

        "shoppingCart",

        JSON.stringify(cart)

    );

}

// PROCEED TO CHECKOUT

const checkoutBtn =
document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", ()=>{

    if(cart.length===0){

        alert("Your cart is empty.");

        return;

    }

    localStorage.setItem(
        "shoppingCart",
        JSON.stringify(cart)
    );

    window.location.href="checkout.html";

});



//Empty Cart After Successful Order

cart=[];

localStorage.removeItem("shoppingCart");

updateCart();

//PAGE PRELOAD

window.onload=()=>{

document.getElementById("loader").style.display="none";

};



updateCart();