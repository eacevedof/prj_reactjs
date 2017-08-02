//app.js 1.0.11
//https://github.com/eacevedof/prj_reactjs/blob/edteam/the_public/my_react/app.jsx
//https://youtu.be/ld8pG4RPAeI?t=1066
console.log("app.js 1.0.11")

const oDivApp = document.getElementById("app")

const Avatar = oProps => <img src={oProps.oUser.img} alt={oProps.oUser.name} width="100" height="100"/>
const UserName = oProps => <p>{oProps.oUser.name}</p>
const User = oProps => {
  return(
    <div className="user-item">
      <Avatar oUser={oProps.oUser} />
      <UserName oUser={oProps.oUser} />
    </div>
  )
}

const arUsers = [
  {name:"Mario Bros",img:"https://s-media-cache-ak0.pinimg.com/originals/00/26/55/002655228ae3e174897bff8980cd50b0.jpg"},
  {name:"Luigi",img:"https://www.mariowiki.com/images/thumb/5/55/Luigi_Artwork_-_Super_Mario_3D_World.png/200px-Luigi_Artwork_-_Super_Mario_3D_World.png"},
  {name:"Fungus",img:"http://st-listas.20minutos.es/images/2011-09/303444/3181288_640px.jpg"},
  {name:"Princess",img:"http://images.buycostumes.com/mgen/merchandiser/super-mario-bros-princess-peach-standup-bc-57907.jpg"}
]

//componente multiple. Con bucle!!
const UserList = oProps => {
  const userList = oProps.arList.map((oUser,i) => <User  oUser={oUser} key={i}/>)
  return (
    <div className="user-list">
      {userList}
    </div>
  )
}

ReactDOM.render(<UserList arList={arUsers}/>,oDivApp)

