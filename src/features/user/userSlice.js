import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

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
      return response.data
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser())
        return thunkAPI.rejectWithValue("Unauthorized! Login out...")
      }
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const uploadUserImage = createAsyncThunk(
  "user/uploadUserImage",
  async (formData, thunkAPI) => {
    try {
      const response = await customFetch.post("/auth/uploadProfile", formData, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      thunkAPI.fulfillWithValue(response.data.image.src)
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
    logoutUser: (state, action) => {
      state.user = null
      toast.success(action.payload)
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
      toast.error(action.payload || "Network error")
    },

    //** ==================== UPDATE USER INFORMATION ==================== */
    [updateUser.pending]: (state) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, action) => {
      const { user } = action.payload
      state.isLoading = false
      state.user = user
      addUserToLocalStorage(user)
      toast.success("Save changes successfully")
    },
    [updateUser.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload || "Network Error")
    },
    // //** ==================== UPLOAD USER IMAGE ==================== */
    [uploadUserImage.fulfilled]: (state, action) => {
      state.user.image = action.payload.image.src
      toast.success("Image uploaded successfully!")
    },
    [uploadUserImage.rejected]: (state, action) => {
      toast.error(
        action.payload || "Something went wrong, Please try again later!"
      )
    },
  },
})

export const { logoutUser } = userSlice.actions
export default userSlice.reducer
