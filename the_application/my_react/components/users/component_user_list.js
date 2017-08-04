import User from "./component_user"

//componente multiple. Con bucle!!
const UserList = oProps => {
  const userList = oProps.arList.map((oUser,i) => <User  oUser={oUser} key={i}/>)
  return (
    <div className="user-list">
      {userList}
    </div>
  )
}

export {UserList}
