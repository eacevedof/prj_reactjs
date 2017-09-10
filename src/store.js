import { createStore } from "redux";

const fnReducer = (oState,oAction)=>{
    console.log("fnReducer")
    //console.log("oState",oState)
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
        return {
            ...oState,
            arCart: oState.arCart.filter((oProduct)=>{oProduct.id !== oState.product.id})
        }
    }
    return oState;
}//fnReducer

//create
export default createStore(fnReducer,{arCart:[]});