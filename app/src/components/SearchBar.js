/**
 * \app\src\components\SearchBar.js 1.2.0
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=844
 */
import React from "react"

export default class SearchBar extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.props.onChange}/>
                <input type="checkbox"/>
            </div>
        )
    }

}//SearchBar