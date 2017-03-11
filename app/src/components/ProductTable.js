/**
 * \app\src\components\ProductTable.js 1.1.1
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=852
 */
import React from "react"
import ProductCategoryRow from "./ProductCategoryRow.js"
import ProductRow from "./ProductRow.js"

export default class ProductTable extends React.Component{
    constructor(){
        super()
        //esta traza muestra que no hay atributos para this, props se muestra como undefined
        console.log("ProductTable.construct().this",this)
    }

    render(){
        //delcaro la lista de filas que va a tener
        let arRows = []
        let sLastCategory = null

        if(this.props.products!==null){
            this.props.products.forEach((oProduct)=>{
                console.log(oProduct)
                if(oProduct.category!=sLastCategory)
                    //cada componente debe tener una llave única en este caso nos apoyamos en oProduct.category que
                    //no se repite
                    arRows.push(<ProductCategoryRow category={oProduct.category} key={oProduct.category} />)
                    
                arRows.push(<ProductRow product={oProduct.name} key={oProduct.name} />)
                sLastCategory = oProduct.category
                
            })
        }
        else{
            arRows.push(<h1>Loading...</h1>)
        }

        return(
            <div>
                {arRows}
            </div>
        )
    }

}//ProductTable