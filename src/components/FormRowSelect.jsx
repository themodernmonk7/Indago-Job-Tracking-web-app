const FormRowSelect = ({ labelText, name, options, value, handleChange }) => {
  return (
    <div className="input_container ">
      <label htmlFor={name} className="label_style">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="input_style capitalize "
      >
        {options.map((value, index) => {
          return (
            <option key={index} value={value}>
              {" "}
              {value}{" "}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect
