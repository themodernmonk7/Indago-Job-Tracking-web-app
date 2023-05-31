import axios from "axios"
import { clearStore } from "../features/user/userSlice"
import { getUserFromLocalStorage } from "./localStorage"

axios.defaults.withCredentials = true
const customFetch = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  // withCredentials: true,
})


export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue(
      error.response.data.msg || "Unauthorized! Logging Out..."
    )
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch
