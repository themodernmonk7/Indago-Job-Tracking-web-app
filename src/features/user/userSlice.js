import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
})

console.log(userSlice)

export default userSlice.reducer
