const PersonForm = ({
  onSubmit,
  name,
  number,
  onNameChange,
  onNumberChange
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        الاسم: <input value={name} onChange={onNameChange} />
      </div>
      <div>
        الرقم: <input value={number} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">إضافة</button>
      </div>
    </form>
  )
}

export default PersonForm