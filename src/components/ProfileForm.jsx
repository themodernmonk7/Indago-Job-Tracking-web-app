import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"
import { FormRow } from "../components"
import { updateUser } from "../features/user/userSlice"
import { CgSpinner } from "react-icons/cg"

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
    const { image } = user
    const { name, lastName, email, location, bio } = userData
    if (!name || !lastName || !email || !location || !bio) {
      toast.error("Please fill out all fields")
      return
    }
    dispatch(updateUser({ name, lastName, email, location, bio, image }))
  }

  return (
    <form className=" space-y-6 xl:w-2/3 " onSubmit={handleSubmit}>
      <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-28">
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
        className=" ml-auto flex  w-44 justify-center rounded-md border border-gray-300 bg-primary py-2 text-sm font-medium capitalize text-white outline-2 outline-primary hover:outline active:outline disabled:cursor-not-allowed disabled:bg-secondary-500 disabled:opacity-50 disabled:outline-none "
        disabled={isLoading}
      >
        {isLoading ? (
          <span>
            {" "}
            <CgSpinner className="mr-2 h-6 w-6  animate-spin " />{" "}
          </span>
        ) : null}
        {isLoading ? "Please wait..." : "Save changes"}
      </button>
    </form>
  )
}

export default ProfileForm
