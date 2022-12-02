import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { FormRow } from "../components"
import { updateUser } from "../features/user/userSlice"

const ProfileForm = () => {
  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
    bio: user?.bio || "",
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, lastName, email, location, bio } = userData
    if (!name || !lastName || !email || !location || !bio) {
      toast.error("Please fill out all fields")
      return
    }
    dispatch(updateUser({ name, lastName, email, location, bio }))
  }

  return (
    <form className=" xl:w-2/3 space-y-6 " onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 md:gap-x-28 gap-y-8">
        {/* First Name */}
        <FormRow
          type="text"
          labelText="First Name"
          name="name"
          placeholder="Sarah"
          value={userData.name}
          handleChange={handleChange}
        />
        {/* Last name */}
        <FormRow
          type="text"
          labelText="Last Name"
          name="lastName"
          placeholder="Williams"
          handleChange={handleChange}
          value={userData.lastName}
        />
        {/* Email */}
        <FormRow
          type="email"
          name="email"
          placeholder="youremail@gmail.com"
          handleChange={handleChange}
          value={userData.email}
        />
        {/* Location */}
        <FormRow
          type="text"
          name="location"
          placeholder="My city"
          label_style_className="after:content-none"
          handleChange={handleChange}
          value={userData.location}
        />
        {/* Bio */}
        <div className="md:col-span-2">
          <FormRow
            type="text"
            name="bio"
            textArea={true}
            placeholder="Brief description about yourself..."
            handleChange={handleChange}
            value={userData.bio}
          />
        </div>
      </div>
      <button
        className=" ml-auto block w-44  py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium bg-primary text-white capitalize disabled:cursor-not-allowed "
        disabled={isLoading}
      >
        {isLoading ? "Please wait..." : "Save changes"}
      </button>
    </form>
  )
}

export default ProfileForm
