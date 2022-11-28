import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"

const initialState = {
  isLoading: false,
  user: null,
}
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/register", user)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/login", user)
      console.log("login success")
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    //** ==================== REGISTER USER ==================== */
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, action) => {
      const { user } = action.payload
      state.isLoading = false
      state.user = user
      toast.success(`Hello there ${user.name}`)
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },
    //** ==================== LOGIN USER ==================== */
    [loginUser.pending]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, action) => {
      const { user } = action.payload
      state.isLoading = false
      state.user = user
      toast.success(`Welcome back ${user.name}`)
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },
  },
})


export default userSlice.reducer
