import customFetch from "../../utils/axios"
import { clearAllJobsState } from "../allJobs/allJobsSlice"
import { logoutUser } from "./userSlice"
import { clearValues } from "../job/jobSlice"

//** ==================== Register User ==================== */
export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

//** ==================== Login User ==================== */
export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.post(url, user)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

//** ==================== Update User ==================== */
export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.patch(url, user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    })
    return response.data
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser())
      return thunkAPI.rejectWithValue("Unauthorized! Login out...")
    }
    return thunkAPI.rejectWithValue(error.response.data.msg)
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
    return thunkAPI.rejectWithValue(error.response.data.msg)
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