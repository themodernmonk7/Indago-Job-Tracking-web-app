import { useSelector } from "react-redux"
import UserImage from "./UserImage"

const ProfileBanner = () => {
  const { user } = useSelector((store) => store.user)
  return (
    <>
      <section className="flex px-4 md:px-8 py-4 sticky top-0 bg-white z-10  ">
        <div className=" flex items-center justify-between  space-x-6 w-full">
          <h4 className="md:text-2xl">
            {" "}
            Welcome back,{" "}
            <span className="font-medium"> {`${user.name}!`}</span>{" "}
          </h4>
          <UserImage className={"w-10 h-10 md:w-14 md:h-14"} />
        </div>
      </section>
    </>
  )
}

export default ProfileBanner
