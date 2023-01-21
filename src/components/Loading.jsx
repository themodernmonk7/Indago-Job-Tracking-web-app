import { ImSpinner2 } from "react-icons/im"
const Loading = () => {
  return (
    <>
      <div className=" mt-28 flex h-screen justify-center md:mt-72  ">
        <ImSpinner2 className="h-12 w-12 animate-spin text-primary/70 md:h-16 md:w-16 " />
      </div>
    </>
  )
}

export default Loading
