//app.js 1.0.9
//https://youtu.be/ld8pG4RPAeI?t=212
console.log("app.js 1.0.8")

const oDivApp = document.getElementById("app")

function Saludar(oProps){
  return <h1>Hola {oProps.name}</h1>
}

ReactDOM.render(
  <div>
    <Saludar name="Saludo uno" />
    <Saludar name="Eduardo A.F." />
    <Saludar name="Tres" />
  </div>,
  oDivApp
)

