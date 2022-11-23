import React from 'react'
import UserProfilePicture from '../assets/user.jpg'
// const UserImage = ( {width, height, mWidth, mHeight, extraClass} ) => {
const UserImage = ( {className} ) => {
  return (
    <img
      src={UserProfilePicture}
      className={`${className} object-cover rounded-full `}
      alt={`user.name's profile picture`}
    />
  )
}

export default UserImage