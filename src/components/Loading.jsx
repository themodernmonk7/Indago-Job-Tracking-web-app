import { ImSpinner2 } from "react-icons/im"
const Loading = ({ className }) => {
  return (
    <>
      <div
        className={` ${className} mt-28 flex justify-center bg-gray-100 md:mt-72 lg:h-screen`}
      >
        <ImSpinner2 className="h-12 w-12 animate-spin text-primary/70 md:h-16 md:w-16 " />
      </div>
    </>
  )
}

export default Loading
