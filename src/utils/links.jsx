import React from "react"
import { HiOutlineCollection } from "react-icons/hi"
import { TbSmartHome } from "react-icons/tb"
import { BiUser, BiPlus } from "react-icons/bi"
const links = [
  {
    id: 1,
    text: "dashboard",
    path: "/",
    icon: <TbSmartHome className="w-7 h-7" />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "/all-jobs",
    icon: <HiOutlineCollection className="w-7 h-7" />,
  },
  {
    id: 3,
    text: "add job",
    path: "/add-job",
    icon: <BiPlus className="w-7 h-7" />,
  },
  {
    id: 4,
    text: "profile",
    path: "/profile",
    icon: <BiUser className="w-7 h-7" />,
  },
]

export default links
