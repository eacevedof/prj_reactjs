//app.js 1.0.3
//https://youtu.be/4gAAiOKOwio?t=880
console.log("app.js 1.0.3")

//Esto es javascript 
/*
const oElement = React.createElement(
  "h1",
  {id:"title"},
  "Hola ",
  React.createElement("span",null,"mundo")
)
*/

//Esto es jsx
const oElement = <h1 id="title">Hola <span>mundo</span></h1>
ReactDOM.render(oElement,document.getElementById("app"));