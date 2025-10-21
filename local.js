
const addProduct =() =>{
    const productField = document.getElementById('product-name');
    const productQuantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = productQuantityField.value;
    productField.value = '';
    productQuantityField.value = '';
    displayproduct(product, quantity)
    localStorage.setItem(product,quantity)
    saveProductToLocalStorage(product, quantity)
}
const displayproduct = (product, quantity) =>{
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerHTML=`${product} : ${quantity}`;
    listContainer.appendChild(li)
}
const getStoredShoppingCart = () =>{
    const storedCard = localStorage.getItem('cart');
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

const dishplayProductsFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product];
        displayproduct(product, quantity)
    }
}

dishplayProductsFromLocalStorage()