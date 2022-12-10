import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"
import { getUserFromLocalStorage } from "../../utils/localStorage"
import { getAllJobs } from "../allJobs/allJobsSlice"
import { logoutUser } from "../user/userSlice"

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobType: "full-time",
  jobTypeOptions: ["full-time", "part-time", "internship"],
  status: "pending",
  statusOptions: ["pending", "declined", "interview"],
  jobDescription: "",
  image: "",
  isEditing: false,
  editJobId: "",
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
      thunkAPI.dispatch(getAllJobs())
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const editJob = createAsyncThunk(
  "job/editJob",
  async ({ jobId, job }, thunkAPI) => {
    try {
      const response = await customFetch.patch(`/jobs/${jobId}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      thunkAPI.dispatch(clearValues())
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

export const uploadImage = createAsyncThunk(
  "job/uploadImage",
  async (formData, thunkAPI) => {
    try {
      const response = await customFetch.post("/jobs/uploadImage", formData, {
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
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload }
    },
  },
  extraReducers: {
    //** ==================== CREATE JOB ==================== */
    [createJob.pending]: (state) => {
      state.isLoading = true
    },
    [createJob.fulfilled]: (state) => {
      state.isLoading = false
      toast.success("Job added successfully!")
    },
    [createJob.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },
    //** ==================== EDIT JOB ==================== */
    [editJob.pending]: (state) => {
      state.isLoading = true
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false
      toast.success("Save changes successfully!")
    },
    [editJob.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(action.payload)
    },

    //** ==================== EDIT JOB ==================== */
    [deleteJob.fulfilled]: () => {
      toast.success("Job deleted successfully!")
    },
    //** ==================== UPLOAD IMAGE ==================== */
    [uploadImage.fulfilled]: (state, action) => {
      state.isLoading = false
      state.image = action.payload.image.src
    },
  },
})

export const { handleChangeFunction, clearValues, setEditJob } =
  jobSlice.actions
export default jobSlice.reducer
