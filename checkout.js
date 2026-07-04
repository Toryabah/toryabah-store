// Generating an Order Number

const orderNumber =
"TWD-" + Math.floor(Math.random() * 900000 + 100000);

const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

const summary = document.querySelector(".summary-items");

const subtotal = document.getElementById("subtotal");

const total = document.getElementById("grandTotal");

let amount = 0;

cart.forEach(product=>{

amount += product.price * product.quantity;

summary.innerHTML += `

<div class="summary-item">

<span>

${product.name}

x${product.quantity}

</span>

<span>

$${(product.price*product.quantity).toFixed(2)}

</span>

</div>

`;

});

subtotal.innerText="$"+amount.toFixed(2);

total.innerText="$"+(amount+10).toFixed(2);


document

.getElementById("checkoutForm")

.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Thank you for your order!");

localStorage.removeItem("shoppingCart");

window.location.href="success.html";

});


function loadCheckout(){

    checkoutCart.innerHTML = "";

    let total = 0;

    cart.forEach(item=>{

        total += item.price * item.quantity;

        checkoutCart.innerHTML += `

        <div class="checkout-item">

            <img src="${item.image}" alt="${item.name}">

            <div>

                <h4>${item.name}</h4>

                <p>Quantity: ${item.quantity}</p>

                <p>$${item.price}</p>

            </div>

        </div>

        `;

    });

    subtotal.innerHTML = "$" + total.toFixed(2);

    grandTotal.innerHTML = "$" + total.toFixed(2);

}

loadCheckout();

// CHECK OUT SUMMARY IN EMAIL


const orderSummary = document.getElementById("orderSummary");

let subtotal = 0;

let summary = `
====================================
        TWD SOLUTIONS
        CUSTOMER ORDER
====================================

`;

cart.forEach(item => {

    const itemTotal = item.price * item.quantity;

    summary += `
Items Ordered : ${cart.length}

`;
    subtotal += itemTotal;

    summary += `
Product : ${item.name}
Price   : ₦${item.price.toLocaleString()}
Qty     : ${item.quantity}
Total   : ₦${itemTotal.toLocaleString()}

------------------------------------
`;

});


// Order Date & Time

const today = new Date();

const orderDate = today.toLocaleDateString();

const orderTime = today.toLocaleTimeString();

let summary = `
====================================
        TWD SOLUTIONS
====================================

Order Date : ${orderDate}

Order Time : ${orderTime}

====================================
`;

summary += `

Subtotal : ₦${subtotal.toLocaleString()}
Shipping : FREE
Grand Total : ₦${subtotal.toLocaleString()}

====================================
Thank you for shopping with us!
====================================
`;

orderSummary.value = summary;

// Get Customers Details

document.getElementById("customerName").value =
document.getElementById("fullname").value;

document.getElementById("customerPhone").value =
document.getElementById("phone").value;

document.getElementById("customerEmail").value =
document.getElementById("email").value;

document.getElementById("customerAddress").value =
document.getElementById("address").value;


// invoice pdf download

function downloadInvoice() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(20);
    doc.text("TWD SOLUTIONS", 20, y);

    y += 10;

    doc.setFontSize(12);
    doc.text("Customer Invoice", 20, y);

    y += 15;

    doc.text(`Order No: ${orderNumber}`, 20, y);

    y += 10;

    doc.text(`Date: ${orderDate}`, 20, y);

    y += 15;

    doc.text("Products", 20, y);

    y += 10;

    let total = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        doc.text(
            `${item.name} (${item.quantity}) - ₦${itemTotal.toLocaleString()}`,
            20,
            y
        );

        y += 10;

    });

    y += 10;

    doc.text(`Grand Total: ₦${total.toLocaleString()}`, 20, y);

    y += 20;

    doc.setFontSize(11);

    doc.text(
        "Thank you for shopping with TWD SOLUTIONS.",
        20,
        y
    );

    doc.save(`Invoice-${orderNumber}.pdf`);

}


// Download Automatically

downloadInvoice();

form.addEventListener("submit", () => {

    downloadInvoice();

    localStorage.removeItem("shoppingCart");

});