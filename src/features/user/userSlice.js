import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage"
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
  uploadUserImageThunk,
} from "./userThunk"
getUserFromLocalStorage

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
}

//** ==================== Register User ==================== */
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/register", user, thunkAPI)
  }
)

//** ==================== Login User ==================== */
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI)
  }
)

//** ==================== Update User ==================== */
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateUserThunk("auth/updateUser", user, thunkAPI)
  }
)

//** ==================== Upload User Image ==================== */
export const uploadUserImage = createAsyncThunk(
  "user/uploadUserImage",
  async (formData, thunkAPI) => {
    uploadUserImageThunk("/auth/uploadProfile", formData, thunkAPI)
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
      toast.error(action.payload || "Something went wrong, Please try again later.")
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
      toast.error(action.payload || "Something went wrong, Please try again later.")
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
      toast.error(
        action.payload || "Something went wrong, Please try again later."
      )
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
