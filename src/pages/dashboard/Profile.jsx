import { useDispatch } from "react-redux"
import { UserImage, ProfileForm } from "../../components"
import { uploadUserImage } from "../../features/user/userSlice"

const Profile = () => {
  const dispatch = useDispatch()

  const handleUpload = (e) => {
    const imageFile = e.target.files[0]
    const formData = new FormData()
    formData.append("image", imageFile)
    dispatch(uploadUserImage(formData))
  }

  return (
    <>
      <section className=" my-10 mb-28 space-y-10 px-5 md:px-8 ">
        <h4 className="text-3xl "> Account Settings </h4>
        <div className=" space-x-10 text-lg hidden md:block  ">
          <button className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline">
            My details
          </button>
          <button className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline">
            Profile
          </button>
          <button className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline">
            Password
          </button>
          <button className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline">
            API
          </button>
        </div>
        {/* Profile */}
        <div className=" space-y-2 ">
          <h4 className="text-2xl">Profile</h4>
          <p className=" text-gray-500">
            Update your phone and personal details here.
          </p>
        </div>
        {/* Profile Picture change */}
        <div className="flex items-center md:space-x-10 space-x-6 ">
          <UserImage className={"border w-20 h-20  lg:w-24 lg:h-24 "} />
          <div className=" md:space-x-6 space-x-2 flex md:flex-row ">
            <form action="">
              <input
                name="image"
                onChange={handleUpload}
                accept="image/*"
                type="file"
                className="block w-full  text-sm text-slate-500 file:text-white
      file:mr-4 file:py-2 file:px-4
      file:rounded-xl file:bg-primary 
      file:text-sm file:font-semibold
      hover:file:bg-violet-100 file:cursor-pointer  file:border file:border-gray-300 file:hover:bg-primary/95
    "
              />
            </form>
            {/* <button
              type="file"
              className="bg-primary text-white px-4 md:px-12 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 md:font-medium text-xs md:text-base "
            >
              Change
            </button> */}
            <button className="bg-white px-4 md:px-12 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 md:font-medium text-xs md:text-base">
              Remove
            </button>
          </div>
        </div>

        {/* Form */}
        <ProfileForm />
      </section>
    </>
  )
}

export default Profile
