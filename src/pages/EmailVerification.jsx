import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { userAccountVerification } from "../features/user/userSlice"

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const EmailVerification = () => {
  const { isLoading } = useSelector((store) => store.user)
  const query = useQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("First 1")
    if (!isLoading) {
      dispatch(
        userAccountVerification({
          verificationToken: query.get("token"),
          email: query.get("email"),
        })
      )
    }
  }, [])

  return (
    <>
      <section className=" my-10 mb-28 grid place-items-center  space-y-10 px-5 md:px-8   ">
        <h2> Account Confirmed </h2>
        <Link
          to="/register"
          className=" rounded-md bg-primary px-4 py-2 text-white "
        >
          {" "}
          Please Login{" "}
        </Link>
      </section>
    </>
  )
}

export default EmailVerification
