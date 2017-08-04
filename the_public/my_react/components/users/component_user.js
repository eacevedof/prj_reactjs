import Avatar from "./component_avatar"
import UserName from "./component_user_name"

const User = oProps => {
  return(
    <div className="user-item">
      <Avatar oUser={oProps.oUser} />
      <UserName oUser={oProps.oUser} />
    </div>
  )
}

export {User}