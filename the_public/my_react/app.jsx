//app.js 1.0.10
//https://github.com/eacevedof/prj_reactjs/blob/edteam/the_public/my_react/app.jsx
//https://youtu.be/ld8pG4RPAeI?t=490
console.log("app.js 1.0.10")

const oDivApp = document.getElementById("app")

const Avatar = oProps => <img src={oProps.user.img} alt={oProps.user.name} width="100" height="100"/>
const UserName = oProps => <p>{oProps.user.name}</p>
const User = oProps => {
  return(
    <div className="user-item">
      <Avatar user={oProps.user} />
      <UserName user={oProps.user} />
    </div>
  )
}

const oModelUser = {
  name: 'Daniel',
  img: 'https://s-media-cache-ak0.pinimg.com/originals/00/26/55/002655228ae3e174897bff8980cd50b0.jpg'
}


ReactDOM.render(<User user={oModelUser}/>,oDivApp)

