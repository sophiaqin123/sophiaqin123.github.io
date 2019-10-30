//  Special thanks to web dev simplified, codepen.io, Larry Ulman from Peachpit
//  and Alex Petrusca


let cart = (localStorage.getItem('cart'))
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
updateBadge();

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

//add selected item to cart
function addToCart() {
    let quantityInput = document.getElementById('quantity-input');
    let quantity = parseInt(quantityInput.value);

    let frostingButtons = document.getElementById('frostings');
    let frostingType = Array.from(frostingButtons.children).find(button => {
        return button.classList.contains('active');
    });

    cart.push({
        name: 'Carmel Pecan',
        frosting: (frostingType) ? frostingType.innerText : 'None',
        quantity: quantity,
        price: 9.99,
        totalPrice: 9.99 * quantity
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadge();
}
