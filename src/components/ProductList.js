import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
//se necesita el store para actualizar el estado a partir de la accion recibida 
//import oStore from "../store"
//devuelve la accion a ejecutar
import { fnAcAddToCart, fnAcLoadProducts } from "../actionCreators"
import { connect } from "react-redux"

console.log("load 3: ProductList.js")

const oStyles = {
    products: {
        display: 'flex',
        alignItems: 'stretch',
        flexWrap: 'wrap'
    },
    product: {
        width: '220px',
        marginLeft: 10,
        marginRight: 10
    }
}//oStyles

const fnProductList = ({ arProducts, fnAddToCart }) => {
    console.log("PRODUCTLIST.fnProductList.render()")
    console.log("PRODUCTLIST.fnProductList: arProducts",arProducts)
    console.log("PRODUCTLIST.fnProductList: fnAddToCart",fnAddToCart)
    
    return (
        <div style={oStyles.products}>
            {arProducts.map(oProduct =>
                <div className="thumbnail" style={oStyles.product} key={oProduct.id}>
                    <img src={oProduct.image} alt={oProduct.name} />
                    <div className="caption">
                        <h4>{oProduct.name}</h4>
                        <p>
                            <Button bsStyle="primary" onClick={() => fnAddToCart(oProduct)} role="button" disabled={oProduct.inventory <= 0}>
                                ${oProduct.price} <Glyphicon glyph="shopping-cart" />
                            </Button>
                        </p>
                    </div>
                </div>)
            }
        </div>
    )//render
}//fnProductList

const fnMapStateToProps = (oState)=>{
    console.log("PRODUCTLIST.fnMapStateToProps return oStateNew con arProducts")
    let oStateNew = {
        arProducts : oState.arProducts
    }
    return oStateNew
}

const fnMapDispatchToProps = fnDispatch => {
    console.log("PRODUCTLIST.fnMapDispatchToProps devuelve oDispatch")
    let oDispatch = {
        fnLoadProducts : arProducts => {
            console.log("PRODUCTLIST.fnMapDispatchToProps.oDispatch.fnLoadProducts")
            let oAction = fnAcLoadProducts(arProducts)
            fnDispatch(oAction)
        },
        fnAddToCart : oProduct => {
            console.log("PRODUCTLIST.fnMapDispatchToProps.oDispatch.fnAddToCart")
            let oAction = fnAcAddToCart(oProduct)
            fnDispatch(oAction)
        }
    }
    return oDispatch
}

export default connect(fnMapStateToProps,fnMapDispatchToProps)(fnProductList);