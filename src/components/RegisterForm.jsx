import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FormRow } from "../components"
import { toast } from "react-toastify"
import { loginUser, registerUser } from "../features/user/userSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CgSpinner } from "react-icons/cg"
import { BsArrowRight } from "react-icons/bs"
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

const RegisterForm = () => {
  const [values, setValues] = useState(initialState)
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields")
      return
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }))
      return
    }
    dispatch(registerUser({ name: name, email: email, password: password }))
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  // Navigate user to dashboard
  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <>
      <form
        className=" group  w-full px-4 md:w-2/3 md:px-0 lg:w-2/3 xl:w-1/2 "
        onSubmit={handleSubmit}
      >
        <div className=" space-y-6 ">
          {!values.isMember && (
            <FormRow
              type="text"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              handleChange={handleChange}
            />
          )}
          {/* Email */}
          <div className="input_container">
            <label htmlFor="email" className="label_style">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="youremail@gmail.com"
              className=" w-full rounded-md border-none py-3  placeholder-gray-300 shadow shadow-gray-100 ring-1 ring-gray-300 transition-all duration-200 ease-in placeholder:lowercase hover:ring-primary focus:outline-none focus:ring-2 md:py-4 valid:[&:not(:placeholder-shown)]:ring-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-400  "
              required
              pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={values.email}
              onChange={handleChange}
            />
            <span className="mt-2 hidden text-sm text-red-400">
              Please enter a valid email address.{" "}
            </span>
          </div>
          {/* Password */}
          <div className="input_container">
            <label htmlFor="password" className="label_style">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="**********"
              value={values.password}
              onChange={handleChange}
              className="peer w-full rounded-md border-none  py-3 placeholder-gray-300 shadow shadow-gray-100 ring-1 ring-gray-300 transition-all duration-200 ease-in hover:ring-primary focus:outline-none focus:ring-2 md:py-4 valid:[&:not(:placeholder-shown)]:ring-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-400   "
              pattern=".{6,}"
              required
            />
            <span className="mt-2 hidden text-sm text-red-400">
              Password must be atleast 6 characters.{" "}
            </span>
          </div>
        </div>
        {/* Login button */}
        <div className="">
          <button
            type="submit"
            className=" mt-20 flex w-full flex-row items-center justify-center rounded-md bg-primary px-10 py-5 tracking-wider text-white shadow transition-all duration-300 ease-in hover:bg-blue-900/90 focus:bg-blue-800/90 focus:outline-none disabled:cursor-not-allowed disabled:bg-primary/60 group-invalid:pointer-events-none group-invalid:opacity-70  "
            disabled={isLoading}
          >
            {isLoading ? (
              <span>
                {" "}
                <CgSpinner className="mr-4 h-6 w-6  animate-spin " />{" "}
              </span>
            ) : null}
            {values.isMember ? "Login" : "Create Account"}
          </button>
        </div>
      </form>
      <p className=" flex flex-col text-sm md:flex-row  ">
        {values.isMember ? `Don't have an account?` : "Already a member?"}
        <button
          className="ml-2 font-medium text-primary "
          onClick={toggleMember}
        >
          {" "}
          {values.isMember ? "Create an account" : "Login"}{" "}
        </button>
      </p>
      <button
        className="  group  flex  items-center justify-center rounded-md bg-secondary-900 px-6 py-1 capitalize  text-white/90  "
        onClick={() => {
          dispatch(loginUser({ email: "admin@test.com", password: "secret" }))
        }}
      >
        Try demo app{" "}
        <BsArrowRight className=" ml-2 animate-pulse  transition-all duration-200  ease-linear group-hover:translate-x-1  " />{" "}
      </button>
    </>
  )
}

export default RegisterForm
