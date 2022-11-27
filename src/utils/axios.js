import axios from "axios"

const customFetch = axios.create({
  baseURL: "https://indago-job-tracking-website-api-production.up.railway.app/",
})

export default customFetch
