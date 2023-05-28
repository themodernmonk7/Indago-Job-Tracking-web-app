import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Error, Landing, Register, ProtectedRoute } from "./pages"
import { SharedLayout } from "./pages/dashboard"

import "react-toastify/dist/ReactToastify.css"
import { Toaster } from "react-hot-toast"
import { lazy } from "react"

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))
const AllJobs = lazy(() => import("./pages/dashboard/AllJobs"))
const AddJob = lazy(() => import("./pages/dashboard/AddJob"))
const Profile = lazy(() => import("./pages/dashboard/Profile"))

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
