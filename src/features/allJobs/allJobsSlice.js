import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { getAllJobsThunk, showStatsThunk } from "./allJobsThunk"

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

//** ==================== Get all jobs ==================== */
export const getAllJobs = createAsyncThunk(
  "allJobs/getAllJobs",
  getAllJobsThunk
)

//** ==================== Show stats ==================== */
export const showStats = createAsyncThunk("allJobs/showStats", showStatsThunk)

export const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true
    },
    hideLoading: (state) => {
      state.isLoading = false
    },
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
  extraReducers: (builder) => {
    builder
      //** ==================== GET ALL JOBS ==================== */
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        const { jobs, totalJobs, numOfPages } = action.payload
        state.isLoading = false
        state.jobs = jobs
        state.total_jobs = totalJobs
        state.num_of_pages = numOfPages
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.isLoading = false
        toast.error(
          action.payload || "Something went wrong, Please try again later."
        )
      })

      //** ==================== SHOW STATS ==================== */
      .addCase(showStats.pending, (state) => {
        state.isLoading = true
      })
      .addCase(showStats.fulfilled, (state, action) => {
        const { defaultStats, monthlyApplications } = action.payload
        state.isLoading = false
        state.stats = defaultStats
        state.monthlyApplications = monthlyApplications
      })
      .addCase(showStats.rejected, (state, action) => {
        state.isLoading = false
        toast.error(
          action.payload || "Something went wrong, Please try again later."
        )
      })
  },
})

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllJobsState,
} = allJobsSlice.actions
export default allJobsSlice.reducer
