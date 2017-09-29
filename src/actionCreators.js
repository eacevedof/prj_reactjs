//actionCreators.js 
//funciones que se le pasan al store
//son funciones que devuelve un "Action"
import axios from "axios"
console.log("load 2: actionCreators.js")
console.log("axios -> ",axios)

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
//    const  arProducts = [
//                { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
//                { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
//                { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
//            ] 

    const fn = fnDispatch => {
       return axios.get("http://json.theframework.es/index.php?getfile=demoproducts.json")
                .then(oResponse => {
                    let oAction = {
                        type: "REPLACE_PRODUCTS",
                        arProducts: oResponse.data
                    }                    
                    fnDispatch(oAction)
                })
    }//fn

    return fn
}//fnAcLoadProducts

//publico estas dos funciones
export {fnAcAddToCart, fnAcRemoveFromCart, fnAcLoadProducts}