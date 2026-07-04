const searchInput = document.getElementById("searchInput");

const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function(){

    const searchValue = this.value.toLowerCase();

    products.forEach(product=>{

        const productName = product.innerText.toLowerCase();

        if(productName.includes(searchValue)){

            product.style.display="block";

        }

        else{

            product.style.display="none";

        }

    });

});