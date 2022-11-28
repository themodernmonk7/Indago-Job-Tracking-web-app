import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FormRow } from "../components"
import { toast } from "react-toastify"
import { loginUser, registerUser } from "../features/user/userSlice"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
}

const RegisterForm = () => {
  const [values, setValues] = useState(initialState)
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    // console.log(`${name}: ${value}`)
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target)
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      console.log("Please fill out all fields")
      toast.error("Please fill out all fields")
      return
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }))
    }
    dispatch(registerUser({ name: name, email: email, password: password }))
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

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
        <button className=" bg-primary hover:bg-blue-900/90 text-white tracking-wider px-10 py-4 rounded-xl focus:outline-none focus:bg-blue-800/90 w-full mt-20 transition-all duration-300 ease-in shadow ">
          {values.isMember ? "Login" : "Create Account"}
        </button>
      </form>
      {/* 
      Not a Member? Sign Up
      Don't have an account? Sign up for free

       */}
      <p className=" text-sm  ">
        {values.isMember ? `Don't have an account?` : "Already a member?"}
        <button
          className="text-primary font-medium ml-3 "
          onClick={toggleMember}
        >
          {" "}
          {values.isMember ? "Sign up for free" : "Login"}{" "}
        </button>
      </p>
    </>
  )
}

export default RegisterForm
