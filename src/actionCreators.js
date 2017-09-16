//actionCreators.js 
//funciones que se le pasan al store
//son funciones que devuelve un "Action"
console.log("actionCreators.js")

const acAddToCart = oProduct => {
    //aqui se podría llamar a un servidor remoto
    console.log("creator: acAddToCart")
    let oAction = {
        type: "ADD_TO_CART",
        product: oProduct
    }
    return oAction
}//acAddToCart

const acRemoveFromCart = oProduct => {
    console.log("creator: acRemoveFromCart")
    let oAction = {
        type: "REMOVE_FROM_CART",
        product: oProduct
    }    
    return oAction
}//acRemoveFromCart

//publico estas dos funciones
export {acAddToCart, acRemoveFromCart}