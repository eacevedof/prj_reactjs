import { createStore } from "redux";

//El store matiene el acceso al estado de forma centralizada
//Permite el acceso al estado a traves de getState()
//Registra los suscriptores a través de subscribe(fn)
//Permite que el estado sea actualizado a través del método dispatch(fn)
console.log("store.js")

const stAddToCart = (oState,oAction) => {
    let oR = {
        ...oState,
        arCart: oState.arCart.concat(oAction.product)
    } 
    console.log("store.js: stAddToCart oState",oState,"oR",oR)
    return oR 
}//stAddToCart

const stRemoveFromCart = (oState,oAction) => {
    let oR = {
        ...oState,
        arCart: oState.arCart.filter((oProduct)=>oProduct.id !== oAction.product.id)
    }
    console.log("store.js: stRemoveFromCart oState",oState,"oR",oR)
    return oR
}//stRemoveFromCart

//la funcion reductora devolvera un nuevo estado
//esta funcion es la que se encarga de realizar cambios al estado
const fnReducer = (oState,oAction)=>{
    console.log("fnReducer.oAction.type",oAction.type)
    console.log("fnReducer.oState",oState)
    //console.log("...oState",...oState)
    if(oAction.type === "ADD_TO_CART")
    {
        return stAddToCart(oState,oAction)
    }
    else if(oAction.type === "REMOVE_FROM_CART")
    {
        return stRemoveFromCart(oState,oAction)
    }
    return oState;
}//fnReducer

//exporta un objeto oStore. La función reductora estara a la escucha de los cambios de estado para actualizarlos.
//se inicializa con un estado inicial vacio arCart:[]
export default createStore(fnReducer, { arCart:[] });