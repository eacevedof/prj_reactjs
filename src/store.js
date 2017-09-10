import { createStore } from "redux";

//la funcion reductora devolvera un nuevo estado
const fnReducer = (oState,oAction)=>{
    console.log("fnReducer.oAction.type",oAction.type)
    console.log("fnReducer.oState",oState)
    //console.log("...oState",...oState)
    if(oAction.type === "ADD_TO_CART")
    {
        return {
            ...oState,
            arCart: oState.arCart.concat(oAction.product)
        }
    }
    else if(oAction.type === "REMOVE_FROM_CART")
    {
        console.log("fnReducer.REMOVE_FORM_CART")
        return {
            ...oState,
            arCart: oState.arCart.filter((oProduct)=>oProduct.id !== oAction.product.id)
        }
    }
    return oState;
}//fnReducer

//exporta un objeto oStore. La función reductora estara a la escucha de los cambios de estado para actualizarlos.
//se inicializa con un estado inicial vacio arCart:[]
export default createStore(fnReducer, { arCart:[] });