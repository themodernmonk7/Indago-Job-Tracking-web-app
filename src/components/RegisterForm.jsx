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
        className=" md:w-2/3  lg:w-2/3 xl:w-1/2 w-full px-4 md:px-0 "
        onSubmit={handleSubmit}
      >
        {/* TODO: Show error message */}
        {/* <p className="text-red-400"> {error} </p> */}
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
          <FormRow
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            className=" placeholder:lowercase "
            value={values.email}
            handleChange={handleChange}
          />
          {/* Password */}
          <FormRow
            type="password"
            name="password"
            placeholder="**********"
            value={values.password}
            handleChange={handleChange}
          />
        </div>
        <button
          className=" bg-primary hover:bg-blue-900/90 text-white tracking-wider px-10 py-4 rounded-xl focus:outline-none focus:bg-blue-800/90 w-full mt-20 transition-all duration-300 ease-in shadow disabled:cursor-not-allowed disabled:bg-primary/60 flex flex-row justify-center items-center  "
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
