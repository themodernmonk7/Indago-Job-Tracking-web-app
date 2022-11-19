import React from "react"
import { HiPlus, HiUser, HiCollection, HiViewGrid } from "react-icons/hi"
const links = [
  {
    id: 1,
    text: "dashboard",
    path: "/",
    icon: <HiViewGrid />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "/all-jobs",
    icon: <HiCollection />,
  },
  {
    id: 3,
    text: "add job",
    path: "/add-job",
    icon: <HiPlus />,
  },
  {
    id: 4,
    text: "profile",
    path: "/profile",
    icon: <HiUser />,
  },
]

export default links
