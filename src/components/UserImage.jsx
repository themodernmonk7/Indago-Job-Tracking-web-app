import React from 'react'
import { useSelector } from "react-redux"
import defaultUserImage from "../assets/default_user_avatar.jpg"
const UserImage = ({ className }) => {
  const { user } = useSelector((store) => store.user)
  return (
    <img
      src={user?.image || defaultUserImage}
      className={`${className} rounded-full object-cover object-top `}
      alt={"profile picture"}
    />
  )
}

export default UserImage