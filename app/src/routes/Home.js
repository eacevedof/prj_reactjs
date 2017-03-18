/**
 * \app\src\routes\Home.js 1.0.0
 */

import React from "react"
import {Link} from "react-router"

export default class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1>Hola</h1>
                <Link to="store">Store</Link>
            </div>
        )
    }
}