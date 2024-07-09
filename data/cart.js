export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [{
        productId :  "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",// we are just taking the productsID and then search for it in the products array
        quantity : 2, // so rather than saving the data we are just saving the ID so that we can get data using that NORMALIZING THE DATA
        deliveryOptionId : '1'
    },{
        productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d', //creating default value
        quantity : 1,
        deliveryOptionId : '2'
    }]; // now this variable can be used outside of JS as we exported it
};


function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;
    
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    
    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId : '1'
        });
    }

    saveToStorage();
}

export function removeFromCart(productId){ // we create a new array and loop through the cart and add it to new array
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

export function updateDeliveryOption(productId , deliveryOptionId){
    let matchingItem;
    
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}