//store.js 1.0.2 video 7: https://youtu.be/G_dbuk9B2pQ?list=PLxyfMWnjW2kuyePV1Gzn5W_gr3BGIZq8G&t=40
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
console.log("STORE.fnThunk",fnThunk);
console.log("STORE.createStore",createStore)

const fnStoreProducts = (arState=[],oAction)=>{
    console.log("STORE.fnStoreProducts.oAction.type",oAction.type)
    console.log("STORE.fnStoreProducts.arState",arState)

    if(oAction.type === "REPLACE_PRODUCTS")
    {
        let oStateNew = oAction.arProducts
        return oStateNew
    }
    return arState;
}//fnStoreProducts

const fnStoreCart = (arState=[],oAction)=>{
    console.log("STORE.fnStoreCart.oAction.type",oAction.type)
    console.log("STORE.fnStoreCart.arState",arState)

    if(oAction.type === "ADD_TO_CART")
    {        
        return arState.concat(oAction.product)
    }
    else if(oAction.type === "REMOVE_FROM_CART")
    {
        return arState.filter(oProduct => oProduct.id !== oAction.product.id)
    }
    return arState;
}//fnStoreCart

const fnLogger = oStore => fnNext => oAction => {
    //console.log("fnLogger.oStore: ",oStore," | fnLogger.fnNext: ",fnNext," | fnLogger.oAction: ",oAction)
    console.log("STORE.fnLogger dispatching oAction: ",oAction)
    console.log("STORE.fnLogger fnNext: ",fnNext)
    let oResult = fnNext(oAction)
    console.log("STORE.fnLogger oStore.getstate() next state: ",oStore.getState())
    console.log("STORE.fnLogger oResult: ",oResult)
    return oResult
}//fnLogger

//exporta un objeto oStore. La función reductora estara a la escucha de los cambios de estado para actualizarlos.
//se inicializa con un estado inicial vacio arCart:[]
//export default createStore(fnStoreReducer, { arCart:[], arProducts:[] }, applyMiddleware(fnLogger));
const fnCombined = combineReducers({arCart:fnStoreCart,arProducts:fnStoreProducts})
console.log("STORE.fnCombined",fnCombined)

//function applyMiddleware(...middlewares) 
const fnMiddleWare = applyMiddleware(fnLogger,fnThunk)
console.log("STORE.fnMiddleWare",fnMiddleWare)

//function createStore(reducer, preloadedState, enhancer)
const oStore = createStore(fnCombined,fnMiddleWare)
//oStore: {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
console.log("STORE.oStore",oStore)
export default oStore


/*
 const getNewState = (oState,oAction) => {
    console.log("oState",oState)
    //operator to copy enumerable properties from one object to another 
    console.log("...oState",{...oState})

    if(oAction.type === "ADD_TO_CART")
    {
        let oStateNew = {
            ...oState,
            arCart: oState.arCart.concat(oAction.product)
        }

        console.log("oStateNew",oStateNew)
        return oStateNew
    }
}//getNewState

const oNewState = getNewState({arProducts:[],arCart:[]}
                    ,{type:"ADD_TO_CART",product:{id:"20",nombre:"PRODUCTO XXXYYY"}})
*/