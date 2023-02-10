import React from 'react'
import { useSelector } from "react-redux"
const UserImage = ({ className }) => {
  const { user } = useSelector((store) => store.user)
  return (
    <img
      src={user.image}
      className={`${className} rounded-full object-cover object-top `}
      alt={"profile picture"}
    />
  )
}

export default UserImage