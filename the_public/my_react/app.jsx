//app.js 1.0.7
//https://youtu.be/4gAAiOKOwio?t=880
console.log("app.js 1.0.7")

const oDivApp = document.getElementById("app")

//Ejemplo reloj
function reloj(){
  const sTime = new Date().toLocaleTimeString()
  const eSpan = <span>{sTime}</span>
  ReactDOM.render(eSpan,oDivApp)
}

setInterval(reloj,1000)
