import { ImSpinner2 } from "react-icons/im"
const Loading = () => {
  return (
    <>
      <div className=" h-screen flex justify-center md:mt-72 mt-28  ">
        <ImSpinner2 className="md:w-16 md:h-16 w-12 h-12 animate-spin text-primary/70 " />
      </div>
    </>
  )
}

export default Loading
