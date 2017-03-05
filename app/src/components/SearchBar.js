/**
 * \app\src\components\SearchBar.js 1.0.0
 */
import Ract from "react"

export default class SearchBar extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <input type="text"/>
                <input type="checkbox"/>
            </div>
        )
    }

}//SearchBar