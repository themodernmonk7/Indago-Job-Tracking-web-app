import { useState } from "react"
import { FormRow } from "../components"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
}

const RegisterForm = () => {
  const [values, setValues] = useState(initialState)

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  return (
    <>
      <form
        className=" md:w-2/3  lg:w-2/3 xl:w-1/2 w-full px-4 md:px-0 "
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
          Create Account
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
