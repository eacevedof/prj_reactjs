import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import {acRemoveFromCart} from "../actionCreators"
import {connect} from "react-redux"

console.log("ShoppingCart.js")

const oStyles = {
    footer: {
        fontWeight: 'bold'
    }
}//oStyles

class ShoppingCart extends Component {
    
    render() {
        console.log("ShoppingCart.render")
        return (
            <Panel header="Shopping Cart">
                <Table fill>
                    <tbody>
                      {this.props.arCart.map(product =>
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td className="text-right">${product.price}</td>
                            <td className="text-right">
                                <Button bsSize="xsmall" bsStyle="danger" onClick={() => this.props.removeFromCart(product)}>
                                    <Glyphicon glyph="trash" />
                                </Button>
                            </td>
                        </tr>
                      )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" style={oStyles.footer}>
                              Total: ${this.props.arCart.reduce((sum, product) => sum + product.price, 0)}
                            </td>
                        </tr>
                    </tfoot>
                </Table>
            </Panel>
        )//return
    }//render

}//ShoppingCart

//con esto evitamos tener el constuctor y el store
const mapStateToProps = oState => {
    return {
        arCart: oState.arCart
    }
}//mapStateToProps

const mapDispatchToProps = fnDispatch => {
    return {
        removeFromCart(oProduct){
            //removeFromCart: ActionCreator
            fnDispatch(acRemoveFromCart(oProduct))
        }//removeFromCart        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);