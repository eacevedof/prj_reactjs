//actionCreators.js 
//funciones que se le pasan al store

const addToCart = oProduct => {
    let oAction = {
        type: "ADD_TO_CART",
        product: oProduct
    }
    return oAction
}

const removeFromCart = oProduct => {
    let oAction = {
        type: "REMOVE_FROM_CART",
        product: oProduct
    }    
    return oAction
}//removeFromCart

export {addToCart, removeFromCart}