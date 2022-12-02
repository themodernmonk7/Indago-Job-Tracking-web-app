import { createSlice } from "@reduxjs/toolkit"

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
      }
    },
  },
  extraReducers: {},
})

export const { handleChangeFunction, clearValues } = jobSlice.actions
export default jobSlice.reducer
