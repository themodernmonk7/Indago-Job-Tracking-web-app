import { FormRow } from "../components"

const RegisterForm = () => {
  return (
    <form className=" md:w-2/3  lg:w-2/3 xl:w-1/2 w-full px-4 md:px-0 ">
      <div className=" space-y-6 ">
        <FormRow type="text" name="name" placeholder="Enter your name" />
        <FormRow
          type="email"
          name="email"
          placeholder="youremail@gmail.com"
          className=" placeholder:lowercase "
        />
        <FormRow type="password" name="password" placeholder="**********" />
      </div>

      <button className=" bg-primary hover:bg-blue-900/90 text-white tracking-wider px-10 py-4 rounded-xl focus:outline-none focus:bg-blue-800/90 w-full mt-20 transition-all duration-300 ease-in shadow ">
        Create Account
      </button>
    </form>
  )
}

export default RegisterForm
