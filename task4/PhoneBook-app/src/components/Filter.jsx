const Filter = ({ value, onChange }) => {
  return (
    <div>
      البحث: <input value={value} onChange={onChange} />
    </div>
  )
}

export default Filter