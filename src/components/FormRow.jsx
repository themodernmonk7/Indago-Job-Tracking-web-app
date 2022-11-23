const FormRow = ({
  type,
  name,
  labelText,
  className,
  placeholder,
  textArea,
}) => {
  return (
    <div className={`input_container `}>
      <label htmlFor="" className="label_style">
        {labelText || name}
      </label>
      {textArea ? (
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          maxLength={50}
          placeholder="Brief description about your job..."
          className={`input_style resize-none `}
        ></textarea>
      ) : (
        <input
          id={name}
          placeholder={placeholder}
          type={type}
          name={name}
          className={`input_style ${className} `}
        />
      )}
    </div>
  )
}

export default FormRow
