//app.js 1.0.2
//https://youtu.be/4gAAiOKOwio?t=880
console.log("app.js 1.0.2")

const oElement = React.createElement(
  "h1",
  {id:"title"},
  "Hola ",
  React.createElement("span",null,"mundo")
)

ReactDOM.render(oElement,document.getElementById("app"));