import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"

const initialState = {
  isLoading: false,
  jobs: [],
  total_jobs: 0,
  num_of_pages: 1,
  page: 1,
}

export const getAllJobs = createAsyncThunk(
  "allJobs/getAllJobs",
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get("/jobs", {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {},
  extraReducers: {
    //** ==================== GET ALL JOBS ==================== */
    [getAllJobs.pending]: (state) => {
      state.isLoading = true
    },
    [getAllJobs.fulfilled]: (state, action) => {
      const { jobs, totalJobs, numOfPages } = action.payload
      state.isLoading = false
      state.jobs = jobs
      state.total_jobs = totalJobs
      state.num_of_pages = numOfPages
    },
    [getAllJobs.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },
  },
})

export const {} = allJobsSlice.actions
export default allJobsSlice.reducer
