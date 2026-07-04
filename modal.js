const quickBtns=document.querySelectorAll(".quick-view-btn");

const modal=document.querySelector(".product-modal");

const overlay=document.querySelector(".modal-overlay");

const closeBtn=document.querySelector(".close-modal");

quickBtns.forEach(button=>{

button.addEventListener("click",()=>{

document.getElementById("modalTitle").innerText=button.dataset.name;

document.getElementById("modalPrice").innerText=button.dataset.price;

document.getElementById("modalDescription").innerText=button.dataset.description;

document.getElementById("modalImage").src=button.dataset.image;

modal.classList.add("show");

overlay.classList.add("show");

});

});

closeBtn.onclick=()=>{

modal.classList.remove("show");

overlay.classList.remove("show");

}

overlay.onclick=()=>{

modal.classList.remove("show");

overlay.classList.remove("show");

}