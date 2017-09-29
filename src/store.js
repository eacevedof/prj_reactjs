//se importa el gestor de estado y acciones "createStore"
//https://github.com/makeitrealcamp/redux-example/blob/react-redux/src/store.js
//http://redux.js.org/docs/api/applyMiddleware.html
import { createStore, applyMiddleware } from "redux"
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

const fnLogger = oStore => fnNext => oAction => {
    console.info("oStore",oStore,"fnNext",fnNext,"oAction",oAction)
    let oResult = fnNext(oAction)
    return oResult
}

//exporta un objeto oStore. La función reductora estara a la escucha de los cambios de estado para actualizarlos.
//se inicializa con un estado inicial vacio arCart:[]
//export default createStore(fnStoreReducer, { arCart:[], arProducts:[] }, applyMiddleware(fnLogger));
export default createStore(fnStoreReducer, { arCart:[], arProducts:[]  },applyMiddleware(fnLogger,fnThunk));
