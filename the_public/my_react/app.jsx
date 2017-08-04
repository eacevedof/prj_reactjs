//app.js 1.0.13
//https://github.com/eacevedof/prj_reactjs/blob/edteam/the_public/my_react/app.jsx
//https://youtu.be/ld8pG4RPAeI?t=1066
//da error: Uncaught ReferenceError: require is not defined
console.log("app.js 1.0.13")

import arUsers from "./models/model_user"
import UserList from "./components/users/component_user_list"

const oDivApp = document.getElementById("app")
ReactDOM.render(<UserList arList={arUsers}/>,oDivApp)

