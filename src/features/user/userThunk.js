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

//** ==================== Login User ==================== */
export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user)
    return response.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

//** ==================== Update User ==================== */
export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.patch(url, user)
    return response.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

//** ==================== Upload User Image ==================== */
export const uploadUserImageThunk = async (url, formData, thunkAPI) => {
  try {
    const response = await customFetch.post(url, formData, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    thunkAPI.fulfillWithValue(response.data.image.src)
    console.log(response.data)
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
