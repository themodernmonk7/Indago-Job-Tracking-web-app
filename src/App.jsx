import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Error, Landing, Register, ProtectedRoute } from "./pages"
import {
  AddJob,
  AllJobs,
  Dashboard,
  Profile,
  SharedLayout,
} from "./pages/dashboard"
import "react-toastify/dist/ReactToastify.css"
import { Toaster } from "react-hot-toast"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              {" "}
              <SharedLayout />{" "}
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  )
}

export default App
