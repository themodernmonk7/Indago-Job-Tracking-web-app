import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios"
import { clearAllJobsState } from "../allJobs/allJobsSlice"
import { logoutUser } from "./userSlice"
import { clearValues } from "../job/jobSlice"

//** ==================== Register User ==================== */
export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user)
    return response.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

//** ==================== Email Verification ==================== */
export const userAccountVerificationThunk =  async({verificationToken, email}, thunkAPI) => {
  // console.log(` Before request: ${verificationToken} and ${email} `)
  try {
    const {data} = await customFetch.post('/auth/email-verification', {verificationToken, email} )
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

//** ==================== Login User ==================== */
export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.post("/auth/login", user)
    return response.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

//** ==================== Update User ==================== */
export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.patch("auth/updateUser", user)
    return response.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

//** ==================== Upload User Image ==================== */
export const uploadUserImageThunk = async (formData, thunkAPI) => {
  try {
    const response = await customFetch.post("/auth/uploadProfile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    thunkAPI.fulfillWithValue(response.data.image.src)
    return response.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

//** ==================== Clear Store ==================== */
export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    // Logout user
    thunkAPI.dispatch(logoutUser(message))
    // Clear jobs values
    thunkAPI.dispatch(clearAllJobsState())
    // Clear job input value
    thunkAPI.dispatch(clearValues())
    return Promise.resolve()
  } catch (error) {
    return Promise.reject()
  }
}
