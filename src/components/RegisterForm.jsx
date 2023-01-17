import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FormRow } from "../components"
import { toast } from "react-toastify"
import { loginUser, registerUser } from "../features/user/userSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { CgSpinner } from "react-icons/cg"
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
        className=" md:w-2/3  lg:w-2/3 xl:w-1/2 w-full px-4 md:px-0 group "
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
              className=" placeholder:lowercase w-full rounded-xl border-none  py-3 md:py-4 placeholder-gray-300 focus:outline-none valid:[&:not(:placeholder-shown)]:ring-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-400 ring-1 ring-gray-300 hover:ring-primary focus:ring-2 shadow shadow-gray-100 transition-all duration-200 ease-in  "
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
              className="peer w-full rounded-xl border-none  py-3 md:py-4 placeholder-gray-300 focus:outline-none valid:[&:not(:placeholder-shown)]:ring-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-400 ring-1 ring-gray-300 hover:ring-primary focus:ring-2 transition-all duration-200 ease-in shadow shadow-gray-100   "
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
            className=" bg-primary hover:bg-blue-900/90 text-white tracking-wider px-10 py-5 rounded-xl focus:outline-none focus:bg-blue-800/90 w-full mt-20 transition-all duration-300 ease-in shadow disabled:cursor-not-allowed disabled:bg-primary/60 flex flex-row justify-center items-center group-invalid:pointer-events-none group-invalid:opacity-70  "
            disabled={isLoading}
          >
            {isLoading ? (
              <span>
                {" "}
                <CgSpinner className="w-6 h-6 mr-4  animate-spin " />{" "}
              </span>
            ) : null}
            {values.isMember ? "Login" : "Create Account"}
          </button>
        </div>
      </form>
      <p className=" text-sm flex flex-col md:flex-row  ">
        {values.isMember ? `Don't have an account?` : "Already a member?"}
        <button
          className="text-primary font-medium ml-2 "
          onClick={toggleMember}
        >
          {" "}
          {values.isMember ? "Create an account" : "Login"}{" "}
        </button>
      </p>
    </>
  )
}

export default RegisterForm
