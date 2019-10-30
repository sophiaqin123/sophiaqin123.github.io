//  Special thanks to web dev simplified, codepen.io, Larry Ulman from Peachpit
//  and Alex Petrusca


loadCart();

function loadCart() {
    let myCart = document.getElementById('myCart');
    myCart.innerHTML = '';

    //total cart calculation
    const totalPriceHTML = `
            <div class="column right again" style="background-color:#e6e6e6;">
                <h3>Checkout</h3>
                <div id="myTotal"></div>
                <hr>
                <h4 id="myTotalPrice" class="bold"></h4>
                <h5>Total Amount</h5>
                <p class="button2">Checkout</p>
            </div>
        `;
    let totalElement = document.createElement("div");
    totalElement.innerHTML = totalPriceHTML;
    myCart.appendChild(totalElement);

    let myTotal = document.getElementById('myTotal');

    let totalPrice = 0.0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        totalPrice += item.totalPrice;

        const elementHTML = `
            <div class="column left again" style="background-color:#e6e6e6">
                <span class="close">&times;</span>
                <div class="product-image">
                    <img src="https://i.imgur.com/1dHzozu.png" alt="caramel pecan"/>
                </div>
                <div class="product-details">
                    <h3 class="nobottom">${item.name}</h3>
                    <p class="frostingType">${item.frosting}</p>
                    <p class="quantity">${item.quantity} Quantity</p>
                    <div class="cart price">
                        <h5>$${item.totalPrice.toFixed(2)}</h5>
                    </div>
                    <p class="button2">Edit</p>
                    <p class="button">Save for Later</p>
                </div>
            </div>
        `;
        let element = document.createElement("div");
        element.innerHTML = elementHTML;
        myCart.appendChild(element);

        const priceElementHTML = `
            <div class="pricetitle">
                <h4>${item.name} x${item.quantity} - ${item.frosting}</h4>
                <h5>$${item.totalPrice.toFixed(2)}</h5>
            </div>
        `;
        let priceElement = document.createElement("div");
        priceElement.innerHTML = priceElementHTML;
        myTotal.appendChild(priceElement);
    }

    let myTotalPrice = document.getElementById('myTotalPrice');
    myTotalPrice.innerText = `$${totalPrice.toFixed(2)}`;

    //remove items in cart
    const removeCartItemsButtons = document.getElementsByClassName("close");
    for (let i = 0; i < removeCartItemsButtons.length; i++) {
        const closeButton = removeCartItemsButtons[i];
        closeButton.addEventListener('click', () => removeFromCart(i));
    }
}

//Red notification updates with quantity
function updateBadge() {
    let badge = document.getElementById('shopping-cart-badge');
    let notification = document.getElementById('notification');
    if (cart.length) {
        badge.setAttribute('data-count', cart.length);
        notification.style.display = 'inline-block';
    } else {
        notification.style.display = 'none';
    }
}

//Remove
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadge();
    loadCart();
}
