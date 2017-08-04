//app.js 1.0.14
//https://github.com/eacevedof/prj_reactjs/blob/edteam/the_public/my_react/app.jsx
//https://youtu.be/ld8pG4RPAeI?t=1066
//da error: Uncaught ReferenceError: require is not defined
//este error solo se puede solucionar con webpack: 
//https://stackoverflow.com/questions/36073576/how-to-properly-store-react-components-in-separate-files-and-import-react
console.log("app.js 1.0.14")

import arUsers from "./models/model_user"
import UserList from "./components/users/component_user_list"

const oDivApp = document.getElementById("app")
ReactDOM.render(<UserList arList={arUsers}/>,oDivApp)

