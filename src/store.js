//store.js 1.0.1 video 7: https://youtu.be/G_dbuk9B2pQ?list=PLxyfMWnjW2kuyePV1Gzn5W_gr3BGIZq8G&t=40
//se importa el gestor de estado y acciones "createStore"
//https://github.com/makeitrealcamp/redux-example/blob/react-redux/src/store.js
//http://redux.js.org/docs/api/applyMiddleware.html
import { createStore, applyMiddleware, combineReducers } from "redux"
//redux-thunk hackea el action para poder retornar una función para que pueda ser 
//ejecutada directamente, esta función podra hacer llamadas asincronas. Ya no devolvera una cadena de texto
//https://youtu.be/dRlD0YqU6w4?t=417 importa redux-thunk
import fnThunk from "redux-thunk"
//El store matiene el acceso al estado de forma centralizada
//Permite el acceso al estado a traves de getState()
//Registra los suscriptores a través de subscribe(fn)
//Permite que el estado sea actualizado a través del método dispatch(fn)
console.log("load 1: store.js")
console.log("fnThunk",fnThunk);

const fnStoreProducts = (oState,oAction)=>{
    console.log("fnStoreProducts.oAction.type",oAction.type)
    console.log("fnStoreProducts.oState",oState)

    if(oState === undefined)
        return []

    if(oAction.type === "REPLACE_PRODUCTS")
    {
        let oStateNew = oAction.arProducts
        return oStateNew
    }
    return oState;
}//fnStoreProducts

const fnStoreCart = (oState,oAction)=>{
    console.log("fnStoreCart.oAction.type",oAction.type)
    console.log("fnStoreCart.oState",oState)

    if(oState === undefined)
        return []

    if(oAction.type === "ADD_TO_CART")
    {
        return oState.arCart.concat(oAction.product)
    }
    else if(oAction.type === "REMOVE_FROM_CART")
    {
        return oState.arCart.filter(oProduct => oProduct.id !== oAction.product.id)
    }
    return oState;
}//fnStoreCart


const fnLogger = oStore => fnNext => oAction => {
    //console.log("fnLogger.oStore: ",oStore," | fnLogger.fnNext: ",fnNext," | fnLogger.oAction: ",oAction)
    console.log("fnLogger dispatching oAction: ",oAction)
    let oResult = fnNext(oAction)
    console.log("fnLogger oStore.getstate() next state: ",oStore.getState())
    return oResult
}

//exporta un objeto oStore. La función reductora estara a la escucha de los cambios de estado para actualizarlos.
//se inicializa con un estado inicial vacio arCart:[]
//export default createStore(fnStoreReducer, { arCart:[], arProducts:[] }, applyMiddleware(fnLogger));
export default createStore(combineReducers({arCart:fnStoreCart,arProducts:fnStoreProducts}),applyMiddleware(fnLogger,fnThunk));
