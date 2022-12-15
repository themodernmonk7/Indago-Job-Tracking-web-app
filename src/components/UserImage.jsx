import React from 'react'
import { useSelector } from "react-redux"
import defaultUserImage from "../assets/user.jpg"
const UserImage = ({ className }) => {
  const { user } = useSelector((store) => store.user)
  return (
    <img
      src={user.image}
      className={`${className} object-top object-cover rounded-full `}
      alt={`user.name's profile picture`}
    />
  )
}

export default UserImage