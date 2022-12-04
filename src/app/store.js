import { configureStore } from "@reduxjs/toolkit"
import allJobsSlice from "../features/allJobs/allJobsSlice"
import jobSlice from "../features/job/jobSlice"
import userSlice from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
})
