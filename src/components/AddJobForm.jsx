import { FormRow, FormRowSelect, Button } from "../components"

const AddJobForm = () => {
  return (
    <>
      <form className="  xl:w-2/3 space-y-6 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-28 gap-y-8   ">
          {/* Position */}
          <FormRow type="text" name="position" placeholder="your first name" />
          {/* Company */}
          <FormRow type="text" name="company" placeholder="your company name" />
          {/* Job location */}
          <FormRow type="text" name="job location" placeholder="My city" />
          {/* Job type */}
          <FormRowSelect name="jobType" labelText="job type" />
          {/* Job status */}
          <FormRowSelect name="status" />
          {/* Company logo */}
          <FormRow
            type="file"
            name="Company Logo"
            className=" bg-white file:mr-4  file:px-4
            file:border-0 file:bg-white
            file:text-sm file:font-semibold file:text-primary  text-gray-300 "
          />
          {/* About job textarea */}
          <div className=" md:col-span-2 ">
            <FormRow
              type="text"
              name="About Job"
              placeholder="Brief description about your job..."
              textArea={true}
            />
          </div>
        </div>
        <Button props={["+ add", "clear"]} />
      </form>
    </>
  )
}

export default AddJobForm
