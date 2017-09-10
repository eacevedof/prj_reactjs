import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import oStore from "../store"

const oStyles = {
  footer: {
    fontWeight: 'bold'
  }
}//oStyles

class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      arCart: []
    }//this.state

    oStore.subscribe(()=>{
      console.log("oStore.subscribe.callback")
      this.setState({
        arCart: oStore.getState().arCart
      })//this.setState
    })//store.subscribe

  }//constructor

  render() {
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {this.state.arCart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right">
                  <Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}>
                    <Glyphicon glyph="trash" />
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={oStyles.footer}>
                Total: ${this.state.arCart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )//return
  }//render

  removeFromCart(oProduct){
    console.log("removeFromCart",oProduct)
  }//removeFromCart

}//ShoppingCart

export default ShoppingCart;