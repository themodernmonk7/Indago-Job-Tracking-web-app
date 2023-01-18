import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios"
import { getAllJobs, hideLoading, showLoading } from "../allJobs/allJobsSlice"
import { clearValues } from "./jobSlice"

//** ==================== CREATE JOB ==================== */
export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs", job)
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

//** ==================== DELETE JOB ==================== */
export const deleteJobThunk = async (jobId, thunkAPI) => {
  try {
    thunkAPI.dispatch(showLoading())
    const response = await customFetch.delete(`/jobs/${jobId}`)
    thunkAPI.dispatch(getAllJobs())
    return response.data
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

//** ==================== EDIT JOB ==================== */
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`/jobs/${jobId}`, job)
    thunkAPI.dispatch(clearValues())
    return response.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

//** ==================== UPLOAD IMAGE ==================== */
export const uploadImageThunk = async (formData, thunkAPI) => {
  try {
    const response = await customFetch.post("/jobs/uploadImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    thunkAPI.fulfillWithValue(response.data.image.src)
    return response.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
