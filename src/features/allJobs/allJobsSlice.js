import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../utils/axios"

const initialFilterState = {
  search: "",
  searchJobStatus: "all",
  searchJobType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
}

const initialState = {
  isLoading: false,
  jobs: [],
  total_jobs: 0,
  num_of_pages: 1,
  page: 1,
  stats: [],
  monthlyApplications: [],
  ...initialFilterState,
}

export const getAllJobs = createAsyncThunk(
  "allJobs/getAllJobs",
  async (_, thunkAPI) => {
    // Get the initialState of allJobs slice
    const { page, search, searchJobStatus, searchJobType, sort } =
      thunkAPI.getState().allJobs

    // Example url: jobs?status=all&jobType=all&sort=latest&page=1
    let url = `/jobs?status=${searchJobStatus}&jobType=${searchJobType}&sort=${sort}&page=${page}`
    if (search) {
      url = url + `&search=${search}`
    }
    try {
      const response = await customFetch.get(url, {
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

export const showStats = createAsyncThunk(
  "allJobs/showStats",
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get("/jobs/stats", {
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
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      // Every time user change something then page will back to 1
      state.page = 1
      state[name] = value
    },
    clearFilters: (state) => {
      return { ...state, ...initialFilterState }
    },
    changePage: (state, { payload }) => {
      state.page = payload
    },
    clearAllJobsState: () => {
      initialState
    },
  },
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
      toast.error(
        action.payload || "Something went wrong, Please try again later."
      )
    },

    //** ==================== SHOW STATS ==================== */
    [showStats.pending]: (state) => {
      state.isLoading = true
    },
    [showStats.fulfilled]: (state, action) => {
      const { defaultStats, monthlyApplications } = action.payload
      state.isLoading = false
      state.stats = defaultStats
      state.monthlyApplications = monthlyApplications
    },
    [showStats.rejected]: (state, action) => {
      state.isLoading = false
      toast.error(
        action.payload || "Something went wrong, Please try again later."
      )
    },
  },
})

export const { handleChange, clearFilters, changePage, clearAllJobsState } =
  allJobsSlice.actions
export default allJobsSlice.reducer
