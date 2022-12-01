import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage"
getUserFromLocalStorage

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
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

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.patch("auth/updateUser", user, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      console.log(response)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null
      removeUserFromLocalStorage()
    },
  },
  extraReducers: {
    //** ==================== REGISTER USER ==================== */
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, action) => {
      const { user } = action.payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
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
      addUserToLocalStorage(user)
      toast.success(`Welcome back ${user.name}`)
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },

    //** ==================== LOGIN USER ==================== */
    [updateUser.pending]: (state) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, action) => {
      const { user } = action.payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
    },
    [updateUser.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },
  },
})

export const { logoutUser } = userSlice.actions
export default userSlice.reducer
