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
    // To Do
    // uploadUserImageThunk("/auth/uploadProfile", formData, thunkAPI)
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

//** ==================== Clear Store ==================== */
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk)

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
      toast.error(
        action.payload || "Something went wrong, Please try again later."
      )
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
      toast.error(
        action.payload || "Something went wrong, Please try again later."
      )
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

    //** ==================== Clear Store ==================== */
    [clearStore.rejected]: () => {
      toast.error("There was an error.")
    },
  },
})

export const { logoutUser } = userSlice.actions
export default userSlice.reducer
