import { useSelector } from "react-redux"
import { FcPlanner, FcDisclaimer, FcBriefcase } from "react-icons/fc"
import { StatItem } from "../components"

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs)
  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FcBriefcase className="w-8 h-8" />,
      color: "",
      bcg: "",
    },
    {
      title: "interviews schedules",
      count: stats.interview || 0,
      icon: <FcPlanner className="w-8 h-8" />,
      color: "",
      bcg: "",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FcDisclaimer className="w-8 h-8" />,
      color: "",
      bcg: "",
    },
  ]
  return (
    <>
      <section className=" my-10 mb-28 grid grid-cols-1 gap-10 px-5 md:grid-cols-3 md:gap-5 lg:mx-5 lg:px-0 xl:mx-16 xl:gap-10 ">
        {defaultStats.map((item, index) => {
          return <StatItem key={index} {...item} />
        })}
      </section>
    </>
  )
}

export default StatsContainer
