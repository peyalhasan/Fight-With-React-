
const addProduct =() =>{
    const productField = document.getElementById('product-name');
    const productQuantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = productQuantityField.value;
    productField.value = '';
    productQuantityField.value = '';

    localStorage.setItem(product,quantity)
    console.log(product, quantity)
}

const getStoredShoppingCart = () =>{
    const storedCard = localStorage.getItem('movie');
    console.log(storedCard)
    let cart = {};
    if(storedCard){
        cart= JSON.parse(storedCard)
    }
    console.log(cart)
}
getStoredShoppingCart()