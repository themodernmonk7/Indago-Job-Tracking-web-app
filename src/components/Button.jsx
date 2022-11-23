const Button = ({ props }) => {
  return (
    <div className=" space-x-6 flex md:justify-end  ">
      <button className=" px-10 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium bg-primary text-white capitalize ">
        {props[0]}
      </button>
      <button className="bg-white px-10 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium capitalize ">
        {props[1]}
      </button>
    </div>
  )
}

export default Button
