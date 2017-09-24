import React /*, { Component }*/ from 'react'; //Nos sobra Component al convertir a función la clase
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import {fnAcRemoveFromCart} from "../actionCreators"
//react-redux: crea por nosotros un componente contenedor "<Provider>" (en index.js) que envuelve nuestro componente y le pasa 
//todo por propiedades (estado y metodos que necesitemos)
//nos ayuda a crear componentes funcionales (en vez de clases).  Es decir como vistas puras
//https://youtu.be/dAm3jicYvR8?t=225 Indica lo que sobra despues de usar react-redux
//https://youtu.be/dAm3jicYvR8?t=407 cambiar clases a funciones
import {connect} from "react-redux"

console.log("ShoppingCart.js")

const oStyles = {
    footer: {
        fontWeight: 'bold'
    }
}//oStyles

//Este archivo ahora se convierte en un componente presentacional.
//no tiene lógica
//{arCart,fnRemoveFromCart} = obj.arCart,obj.fnRemoveFromCart
const fnRenderShoppingCart = ({arCart,fnRemoveFromCart})=>{

    console.log("fnRenderShoppingCart")
    return (
        <Panel header="Shopping Cart">
            <Table fill>
                <tbody>
                  {arCart.map(oProduct =>
                    <tr key={oProduct.id}>
                        <td>{oProduct.name}</td>
                        <td className="text-right">${oProduct.price}</td>
                        <td className="text-right">
                            <Button bsSize="xsmall" bsStyle="danger" onClick={() => fnRemoveFromCart(oProduct)}>
                                <Glyphicon glyph="trash" />
                            </Button>
                        </td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" style={oStyles.footer}>
                          Total: ${arCart.reduce((fSum,oProduct) => fSum + oProduct.price, 0)}
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </Panel>
    )//return
    
}//fnRenderShoppingCart

//con esto evitamos tener el constuctor y el store
const fnMapStateToProps = oState => {
    let oStateNew = {
        arCart: oState.arCart
    } 
    return oStateNew 
}//fnMapStateToProps

//fnDispatch: store.fndispatch
const fnMapDispatchToProps = fnDispatch => {
    //hay q devolver un objeto con los metodos que vamos a utilizar en el componente
    //presentacional, estos objetos estaran disponibles en la capa de presentación a traves 
    //de props
    let oDispatch = {
        fnRemoveFromCart : oProduct => {
            //removeFromCart: ActionCreator
            let oAction = fnAcRemoveFromCart(oProduct)
            fnDispatch(oAction)
        }//removeFromCart 
    }//oDispatch
    return oDispatch 
}//fnMapDispatchToProps

//connect el pasa el estado y las funciones a <Provider>
//fnMapStateToProps(oState);fnMapDispatchToProps(fn)
export default connect(fnMapStateToProps,fnMapDispatchToProps)(fnRenderShoppingCart);