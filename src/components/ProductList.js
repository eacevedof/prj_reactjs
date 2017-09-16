import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import oStore from "../store"
import {acAddToCart} from "../actionCreators"

console.log("ProductList.js")

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

class ProductList extends Component {
    
    constructor() {
        console.log("new ProductList()")
        super();
        console.log("this:",this) //es el objeto ProductList        
        //this.addToCart.bind(this) hace que se remplace el "this" por el objeto vinculado
        //en este caso otro "this"
        //creo que se hace este bind para que se pueda renderizar sino en el render no se contaria con 
        //addToCart
        //this.addToCart = this.addToCart.bind(this) ?? con esto comentado sigue funcionando

        this.oState = {
            arProducts: [
                { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
                { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
                { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
            ]
        }//this.oState
    }//constructor

    render() {
        console.log("ProductList.render()")
        return (
            <div style={oStyles.products}>
                {this.oState.arProducts.map(oProduct =>
                    <div className="thumbnail" style={oStyles.product} key={oProduct.id}>
                        <img src={oProduct.image} alt={oProduct.name} />
                        <div className="caption">
                            <h4>{oProduct.name}</h4>
                            <p>
                                <Button bsStyle="primary" onClick={() => this.addToCart(oProduct)} role="button" disabled={oProduct.inventory <= 0}>
                                    ${oProduct.price} <Glyphicon glyph="shopping-cart" />
                                </Button>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        )//return
    }//render

    addToCart(oProduct) {
        console.log("ProductList.addToCart launched","oProduct",oProduct)
        let oAction = acAddToCart(oProduct)
        oStore.dispatch(oAction)
    }//addToCart

}//ProductList

export default ProductList