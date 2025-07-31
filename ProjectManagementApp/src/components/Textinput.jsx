const Textinput = (label, textarea, ...props) => {
  return (
    <div>

      {textarea ? <textarea {...props} /> : <input {...props} />}
    </div>
  )
}

export default Textinput
