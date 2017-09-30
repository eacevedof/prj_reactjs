//actionCreators.js 
//funciones que se le pasan al store
//son funciones que devuelve un "Action"
import fnAxios from "axios"
console.log("load 2: actionCreators.js")
console.log("actionCreatros.js fnAxios: ",fnAxios)

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
    console.log("creator: fnAcRemoveFromCart")
    let oAction = {
        type: "REMOVE_FROM_CART",
        product: oProduct
    }    
    return oAction
}//acRemoveFromCart

//https://youtu.be/dRlD0YqU6w4?t=517 configuracion de esta funcion
const fnAcLoadProducts = ()=>{
    console.log("creator: fnAcLoadProducts")
    
    return fnDispatch => {
        return fnAxios.get("http://json.theframework.es/index.php?getfile=demoproducts.json")
                .then(oResponse => {
                    let oAction = {
                        type: "REPLACE_PRODUCTS",
                        arProducts: oResponse.data
                    }                    
                    fnDispatch(oAction)
                })//then
    }//return fn

}//fnAcLoadProducts

//publico estas dos funciones
export {fnAcAddToCart, fnAcRemoveFromCart, fnAcLoadProducts}