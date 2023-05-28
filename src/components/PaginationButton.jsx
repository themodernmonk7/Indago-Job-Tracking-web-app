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
    <section className=" mb-24 flex flex-row  items-center justify-center space-x-12 px-6 md:py-5 lg:mb-10 ">
      <div className=" flex rounded-md shadow ">
        <button
          className=" h-9  w-9 rounded-l-md border bg-white  "
          type="button"
          aria-label="Next Page"
          onClick={prevPage}
        >
          <MdOutlineNavigateBefore className="h-6 w-6 text-gray-500 " />
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              aria-label={`Go to page ${pageNumber}`}
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
              className={
                pageNumber === page
                  ? "h-9 w-9  bg-black/80  text-sm font-medium text-white "
                  : " h-9  w-9 border-y border-r bg-white text-sm font-medium "
              }
            >
              {pageNumber}
            </button>
          )
        })}
        <button
          className=" h-9 w-9 rounded-r-md border-y border-r bg-white "
          type="button"
          aria-label="Next Page"
          onClick={nexPage}
        >
          <MdOutlineNavigateNext className="h-7 w-7 text-gray-500 " />
        </button>
      </div>
    </section>
  ) 
}

export default PaginationButton
