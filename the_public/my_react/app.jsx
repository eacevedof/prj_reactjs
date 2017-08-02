//app.js 1.0.9
//https://youtu.be/ld8pG4RPAeI?t=353
console.log("app.js 1.0.9")

const oDivApp = document.getElementById("app")

const User = oProps =>{
  return (
    <div>
      <img src={oProps.img} alt={oProps.name} width="100" height="100"/>
      <p>{oProps.name}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <User img="https://s-media-cache-ak0.pinimg.com/originals/00/26/55/002655228ae3e174897bff8980cd50b0.jpg"
    name="Mario Bros"/>
  </div>,
  oDivApp
)

