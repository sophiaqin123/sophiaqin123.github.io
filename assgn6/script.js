// Code inspiration from web dev simplified

let cart = [];

//image changes based on frosting selection
function selectFrosting(frostingType) {
    let image = document.getElementById('myImage');
    if (frostingType === 'vanillamilk') {
        image.src = 'https://i.imgur.com/uJV8q4S.png';
    } else if (frostingType === 'sugarmilk') {
        image.src = 'https://i.imgur.com/8xbQc3W.png';
    } else if (frostingType === 'doublechocolate') {
        image.src = 'https://i.imgur.com/OWVXQ04.png';
    } else if (frostingType === 'none') {
        image.src = 'https://i.imgur.com/ApshmOO.png';
    }

    let frostingButtons = document.getElementById('frostings');
    Array.from(frostingButtons.children).forEach(button => {
        button.classList.remove('active');
    });

    let button = document.getElementById(frostingType);
    button.classList.add('active')
}

//add quant to cart
function addToCart(item) {
    let quantityInput = document.getElementById('quantity-input');
    let quantity = parseInt(quantityInput.value);
    for (let i = 0; i < quantity; i++) {
        cart.push(item);
    }
    updateBadge();
}

//Red notification updates with quanitity
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

