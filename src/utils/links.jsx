import React from "react"
import { HiOutlineCollection, HiOutlineHome, HiOutlineUser, HiOutlinePlus } from "react-icons/hi"
const links = [
  {
    id: 1,
    text: "home",
    path: "/",
    icon: <HiOutlineHome className="h-6 w-6" />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "/all-jobs",
    icon: <HiOutlineCollection className="h-6 w-6" />,
  },
  {
    id: 3,
    text: "add job",
    path: "/add-job",
    icon: <HiOutlinePlus className="h-6 w-6" />,
  },
  {
    id: 4,
    text: "profile",
    path: "/profile",
    icon: <HiOutlineUser className="h-6 w-6" />,
  },
]

export default links
