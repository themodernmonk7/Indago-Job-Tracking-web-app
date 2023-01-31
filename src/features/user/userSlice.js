import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"
import customFetch from "../../utils/axios"

import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage"
import {
  clearStoreThunk,
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
  uploadUserImageThunk,
} from "./userThunk"
getUserFromLocalStorage

const initialState = {
  isLoading: false,
  uploadLoading: false,
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
export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk)

//** ==================== Update User ==================== */
export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk)

//** ==================== Upload User Image ==================== */
export const uploadUserImage = createAsyncThunk(
  "user/uploadUserImage",
  uploadUserImageThunk
)

//** ==================== Clear Store ==================== */
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, action) => {
      state.user = null
      if (action.payload) {
        toast.success(action.payload)
      }
      removeUserFromLocalStorage()
    },
  },
  extraReducers: (builder) => {
    builder
      //** ==================== REGISTER USER ==================== */
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { user } = action.payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Hello ${user.name}`)
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        toast.error(
          action.payload || "Something went wrong, Please try again later."
        )
      })
      //** ==================== LOGIN USER ==================== */
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user } = action.payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Welcome back ${user.name}`)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        toast.error(
          action.payload || "Something went wrong, Please try again later."
        )
      })

      //** ==================== UPDATE USER INFORMATION ==================== */
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { user } = action.payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success("Save changes successfully")
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false
        toast.error(
          action.payload || "Something went wrong, Please try again later."
        )
      })
      // //** ==================== UPLOAD USER IMAGE ==================== */
      .addCase(uploadUserImage.pending, (state) => {
        state.uploadLoading = true
      })
      .addCase(uploadUserImage.fulfilled, (state, action) => {
        state.user.image = action.payload.image.src
        state.uploadLoading = false
        toast.success("Image uploaded successfully!")
      })
      .addCase(uploadUserImage.rejected, (state, action) => {
        state.uploadLoading = false
        toast.error(
          action.payload || "Something went wrong, Please try again later!"
        )
      })

      //** ==================== Clear Store ==================== */
      .addCase(clearStore.rejected, () => {
        toast.error("There was an error.")
      })
  },
})

export const { logoutUser } = userSlice.actions
export default userSlice.reducer
