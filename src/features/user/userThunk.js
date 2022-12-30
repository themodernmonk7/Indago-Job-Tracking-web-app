import customFetch from "../../utils/axios"

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
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
