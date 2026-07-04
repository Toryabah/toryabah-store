const hearts = document.querySelectorAll(".wishlist");

hearts.forEach(heart=>{

    heart.addEventListener("click",()=>{

        heart.classList.toggle("active");

        saveWishlist();

    });

});


function saveWishlist(){

    const favourites=[];

    document.querySelectorAll(".wishlist.active")

    .forEach(item=>{

        favourites.push(

            [...document.querySelectorAll(".wishlist")]

            .indexOf(item)

        );

    });

    localStorage.setItem(

        "wishlist",

        JSON.stringify(favourites)

    );

}

window.addEventListener("load",()=>{

const saved=

JSON.parse(

localStorage.getItem("wishlist")

)||[];

saved.forEach(index=>{

document.querySelectorAll(".wishlist")[index]

.classList.add("active");

});

});


// Every time someone click show either Add or Remove wishlist

function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerText=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.remove();

},3000);

}


// Modify the click event.

heart.addEventListener("click",()=>{

heart.classList.toggle("active");

if(heart.classList.contains("active")){

showToast("❤️ Added to Wishlist");

}else{

showToast("Removed from Wishlist");

}

saveWishlist();

});