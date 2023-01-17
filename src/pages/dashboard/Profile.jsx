import { useDispatch, useSelector } from "react-redux"
import { UserImage, ProfileForm, Logout } from "../../components"
import { uploadUserImage } from "../../features/user/userSlice"
import { MdCameraAlt } from "react-icons/md"
const Profile = () => {
  const { uploadLoading } = useSelector((store) => store.user)
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
          <button
            className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline disabled:bg-gray-300 disabled:text-gray-200 disabled:cursor-not-allowed disabled:outline-none"
            disabled
          >
            My details
          </button>
          <button
            className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline disabled:bg-gray-300 disabled:text-gray-200 disabled:cursor-not-allowed disabled:outline-none"
            disabled
          >
            Profile
          </button>
          <button
            className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline  disabled:bg-gray-300 disabled:text-gray-200 disabled:cursor-not-allowed disabled:outline-none "
            disabled
          >
            Password
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
        <div className="  w-28 relative ">
          <UserImage className={" w-28 h-28 lg:w-28 lg:h-28  "} />
          <form className=" bg-primary px-2 py-2 rounded-full absolute border-2 border-gray-200 -bottom-0 right-0 ">
            <input
              name="image"
              onChange={handleUpload}
              accept="image/*"
              type="file"
              id="upload_button"
              className="block w-full  text-sm text-slate-500 file:text-white
                file:mr-4 file:py-2 file:px-4
                file:rounded-xl file:bg-primary 
                file:text-sm file:font-semibold
                hover:file:bg-violet-100 file:cursor-pointer  file:border file:border-gray-300 file:hover:bg-primary/95 hidden "
            />
            <label htmlFor="upload_button" className=" ">
              <MdCameraAlt
                className={`w-4 h-4 text-white ${
                  uploadLoading ? " animate-spin " : null
                } `}
              />
            </label>
          </form>
        </div>

        {/* Form */}
        <ProfileForm />
      </section>
    </>
  )
}

export default Profile
