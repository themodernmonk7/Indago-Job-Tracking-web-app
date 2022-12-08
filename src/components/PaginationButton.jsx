import { useDispatch, useSelector } from "react-redux"
import { changePage } from "../features/allJobs/allJobsSlice"

const PaginationButton = () => {
  // Read data from the store
  const { num_of_pages } = useSelector((store) => store.allJobs)

  // Dispatch actions
  const dispatch = useDispatch()

  // Generate page number sequence
  const page = Array.from({ length: num_of_pages }, (_, index) => {
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
    <section className=" mb-10 py-5  flex justify-evenly  ">
      <button className="" onClick={prevPage}>
        Prev{" "}
      </button>
      <div className=" space-x-10 ">
        {page.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
              className={
                pageNumber === page
                  ? "bg-primary rounded-md px-4 py-2 text-red font-medium"
                  : "bg-white rounded-md px-4 py-2 text-primary font-medium"
              }
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button className="" onClick={nexPage}>
        next{" "}
      </button>
    </section>
  )
}

export default PaginationButton
