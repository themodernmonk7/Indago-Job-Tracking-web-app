import { FormRow, Button } from "../components"

const ProfileForm = () => {
  return (
    <form className=" xl:w-2/3 space-y-6 ">
      <div className="grid md:grid-cols-2 md:gap-x-28 gap-y-8">
        {/* First Name */}
        <FormRow type="text" name=" First Name" placeholder="Sarah" />
        {/* Last name */}
        <FormRow type="text" name=" Last Name" placeholder="Williams" />
        {/* Email */}
        <FormRow type="email" name=" Email" placeholder="youremail@gmail.com" />
        {/* Location */}
        <FormRow
          type="text"
          name="Location"
          placeholder="My city"
          label_style_className="after:content-none"
        />
        {/* Bio */}
        <div className="md:col-span-2">
          <FormRow
            type="text"
            name="Bio"
            textArea={true}
            placeholder="Brief description about yourself..."
          />
        </div>
      </div>
      <Button props={["save", "cancel"]} />
    </form>
  )
}

export default ProfileForm
