const FormRowSelect = ({ labelText, name, options }) => {
  return (
    <div className="input_container ">
      <label htmlFor={name} className="label_style">
        {labelText || name}
      </label>
      <select name={name} id={name} className="input_style capitalize ">
        <option value="full-time">full-time</option>
        <option value="part-time">part-time</option>
        <option value="internship">internship</option>
      </select>
    </div>
  )
}

export default FormRowSelect
