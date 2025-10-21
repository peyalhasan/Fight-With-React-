
const addProduct =() =>{
    const productField = document.getElementById('product-name');
    const productQuantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = productQuantityField.value;
    productField.value = '';
    productQuantityField.value = '';

    localStorage.setItem(product,quantity)
    saveProductToLocalStorage(product, quantity)
}

const getStoredShoppingCart = () =>{
    const storedCard = localStorage.getItem('movie');
    console.log(storedCard)
    let cart = {};
    if(storedCard){
        cart= JSON.parse(storedCard)
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringyfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringyfied)
}