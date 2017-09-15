//actionCreators.js 
//funciones que se le pasan al store
console.log("actionCreators.js")

const acAddToCart = oProduct => {
    console.log("creator: acAddToCart")
    let oAction = {
        type: "ADD_TO_CART",
        product: oProduct
    }
    return oAction
}//addToCart

const acRemoveFromCart = oProduct => {
    console.log("creator: acRemoveFromCart")
    let oAction = {
        type: "REMOVE_FROM_CART",
        product: oProduct
    }    
    return oAction
}//removeFromCart

export {acAddToCart, acRemoveFromCart}