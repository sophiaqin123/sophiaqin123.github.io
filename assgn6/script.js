// Code inspiration from web dev simplified

function changeImage() {
    var image = document.getElementById('myImage');
    




}





var removeCartButton = document.getElementsByClassName("close")

console.log(removeCartButton);

// Remove cart item
for (var i=0; i < removeCartButton.length;i++) {
    var button = removeCartButton[i]
    button.addEventListener('click',function() {
        console.log('clicked')
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
        
    })
}

//update cart total
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("column left")[0] //crt item
    cartItemContainer.getElementsByClassName('product-details')
    for (var i=0; i < cartRows.length;i++) {
    var cartRows = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')
}