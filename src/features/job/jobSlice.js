import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"
import { getUserFromLocalStorage } from "../../utils/localStorage"
import { logoutUser } from "../user/userSlice"

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobType: "full-time",
  jobTypeOptions: ["Full-time", "Part-time", "Internship"],
  status: "pending",
  statusOptions: ["pending", "declined", "interview"],
  aboutJob: "",
}

export const createJob = createAsyncThunk(
  "job/createJob",
  async (job, thunkAPI) => {
    try {
      const response = await customFetch.post("/jobs", job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(clearValues())
      return response.data
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser())
        return thunkAPI.rejectWithValue("Unauthorized! Logging Out...")
      }
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (jobId, thunkAPI) => {
    try {
      const response = await customFetch.delete(`/jobs/${jobId}`, {
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

export const uploadImage = createAsyncThunk("")

export const jobSlice = createSlice({
  name: "Job",
  initialState,
  reducers: {
    handleChangeFunction: (state, { payload: { name, value } }) => {
      state[name] = value
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || "",
      }
    },
  },
  extraReducers: {
    //** ==================== CREATE JOB ==================== */
    [createJob.pending]: (state) => {
      state.isLoading = true
    },
    [createJob.fulfilled]: (state, action) => {
      state.isLoading = false
      toast.success("Job added successfully!")
    },
    [createJob.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },
  },
})

export const { handleChangeFunction, clearValues } = jobSlice.actions
export default jobSlice.reducer
