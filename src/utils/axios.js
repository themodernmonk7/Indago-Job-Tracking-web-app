import axios from "axios"
import { clearStore } from "../features/user/userSlice"
import { getUserFromLocalStorage } from "./localStorage"

const customFetch = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
})

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage()
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.token}`
  }
  return config
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
