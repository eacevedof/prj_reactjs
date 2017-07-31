//app.js 1.0.6
//https://youtu.be/4gAAiOKOwio?t=880
console.log("app.js 1.0.6")

const oDivApp = document.getElementById("app")

//Ejemplo reloj
function reloj(){
  const sTime = new Date().toLocaleTimeString()
  oDivApp.textContent = sTime
}

setInterval(reloj,1000)
