/**
 * \app\src\components\SearchBar.js 1.2.0
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=844
 */
import React from "react"

export default class SearchBar extends React.Component{
    constructor(){
        super()
        console.log("SearchBar.construct()",this)
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.props.fn_onchange}/>
                <input type="checkbox"/>
            </div>
        )
    }

}//SearchBar