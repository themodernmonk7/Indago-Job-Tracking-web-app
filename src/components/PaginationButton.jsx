import { useDispatch, useSelector } from "react-redux"
import { changePage } from "../features/allJobs/allJobsSlice"
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"

const PaginationButton = () => {
  // Read data from the store
  const { num_of_pages, page } = useSelector((store) => store.allJobs)

  // Dispatch actions
  const dispatch = useDispatch()

  // Generate page number sequence
  const pages = Array.from({ length: num_of_pages }, (_, index) => {
    return index + 1
  })

  // Next page function
  const nexPage = () => {
    let newPage = page + 1
    if (newPage > num_of_pages) {
      newPage = 1
    }
    dispatch(changePage(newPage))
  }

  // Previous page function
  const prevPage = () => {
    let newPage = page - 1
    if (newPage < 1) {
      newPage = num_of_pages
    }
    dispatch(changePage(newPage))
  }

  return (
    <section className=" mb-24 flex flex-row  items-center justify-center space-x-12 px-6 md:py-5 lg:mb-10  ">
      <button onClick={prevPage}>
        <MdOutlineNavigateBefore className="h-7 w-7 text-gray-500 " />
      </button>
      <div className=" grid grid-cols-4 place-items-center gap-x-12 gap-y-4  md:flex lg:gap-x-8 xl:space-x-10  ">
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
              className={
                pageNumber === page
                  ? "h-8 w-8 rounded-md bg-primary  font-medium text-white"
                  : " h-8 w-8  rounded-md bg-white font-medium"
              }
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button onClick={nexPage}>
        <MdOutlineNavigateNext className="h-7 w-7 text-gray-500 " />
      </button>
    </section>
  )
}

export default PaginationButton
