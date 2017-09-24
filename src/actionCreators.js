//actionCreators.js 
//funciones que se le pasan al store
//son funciones que devuelve un "Action"
console.log("load 2: actionCreators.js")

const fnAcAddToCart = oProduct => {
    //aqui se podría llamar a un servidor remoto
    console.log("creator: fnAcAddToCart")
    let oAction = {
        type: "ADD_TO_CART",
        product: oProduct
    }
    return oAction
}//fnAcAddToCart

const fnAcRemoveFromCart = oProduct => {
    console.log("creator: acRemoveFromCart")
    let oAction = {
        type: "REMOVE_FROM_CART",
        product: oProduct
    }    
    return oAction
}//acRemoveFromCart

//publico estas dos funciones
export {fnAcAddToCart, fnAcRemoveFromCart}