import React from 'react'
import { useSelector } from "react-redux"
import defaultUserImage from "../assets/default_user_avatar.jpg"
const UserImage = ({ className }) => {
  const { user } = useSelector((store) => store.user)
  return (
    <img
      src={user?.image || defaultUserImage}
      className={`${className} object-top object-cover rounded-full `}
      alt={"profile picture"}
    />
  )
}

export default UserImage