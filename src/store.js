//se importa el gestor de estado y acciones "createStore"
import { createStore } from "redux";

//El store matiene el acceso al estado de forma centralizada
//Permite el acceso al estado a traves de getState()
//Registra los suscriptores a través de subscribe(fn)
//Permite que el estado sea actualizado a través del método dispatch(fn)
console.log("load 1: store.js")

const fnStoreAddtocart = (oState,oAction) => {
    let oStateNew = {
        ...oState,
        //con array.concat se añaden los productos nuevos
        arCart: oState.arCart.concat(oAction.product)
    } 
    console.log("store.js: fnStoreAddtocart oState",oState,"oStateNew",oStateNew)
    return oStateNew 
}//fnStoreAddtocart

const fnStoreRemovefromcart = (oState,oAction) => {
    let oStateNew = {
        ...oState,
        arCart: oState.arCart.filter(oProduct => oProduct.id !== oAction.product.id)
    }
    console.log("fnStoreRemovefromcart oState",oState,"oStateNew",oStateNew)
    return oStateNew
}//fnStoreRemovefromcart

//La funcion reductora recibe un estado, una acción y devuelve un nuevo estado
const fnStoreReducer = (oState,oAction)=>{
    console.log("fnStoreReducer.oAction.type",oAction.type)
    console.log("fnStoreReducer.oState",oState)
    //console.log("...oState",...oState)
    if(oAction.type === "REPLACE_PRODUCTS")
    {
        let oStateNew = {
            ...oState,
            arProducts: oAction.arProducts
        }
        return oStateNew
    }
    else if(oAction.type === "ADD_TO_CART")
    {
        //devuelve el nuevo estado
        return fnStoreAddtocart(oState,oAction)
    }
    else if(oAction.type === "REMOVE_FROM_CART")
    {
        return fnStoreRemovefromcart(oState,oAction)
    }
    return oState;
}//fnStoreReducer

//exporta un objeto oStore. La función reductora estara a la escucha de los cambios de estado para actualizarlos.
//se inicializa con un estado inicial vacio arCart:[]
export default createStore(fnStoreReducer, { arCart:[], arProducts:[] });