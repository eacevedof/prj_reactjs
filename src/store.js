import { createStore } from "redux";

const fnReducer = (oState,oAction)=>{
    console.log("oState",oState)
    if(oAction.type === "ADD_TO_CART")
    {
        return {
            ...oState,
            cart: oState.cart.concat(oAction.product)
        }
    }
    return oState;
}//fnReducer

//create
export default createStore(fnReducer,{cart:[]});