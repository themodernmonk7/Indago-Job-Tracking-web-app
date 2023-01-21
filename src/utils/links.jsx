import React from "react"
import { HiOutlineCollection } from "react-icons/hi"
import { TbSmartHome } from "react-icons/tb"
import { BiUser, BiPlus } from "react-icons/bi"
const links = [
  {
    id: 1,
    text: "dashboard",
    path: "/",
    icon: <TbSmartHome className="h-7 w-7" />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "/all-jobs",
    icon: <HiOutlineCollection className="h-7 w-7" />,
  },
  {
    id: 3,
    text: "add job",
    path: "/add-job",
    icon: <BiPlus className="h-7 w-7" />,
  },
  {
    id: 4,
    text: "profile",
    path: "/profile",
    icon: <BiUser className="h-7 w-7" />,
  },
]

export default links
