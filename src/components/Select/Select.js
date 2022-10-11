import React from 'react'

const Select = ({options = [], onSelect}) => {

    const handleSelect = (e) => {
        onSelect(e.target.value)
    }

  return (
    <select onChange={handleSelect}>
      {
          options.map((opt) => <option key={opt.text} value={opt.text}>{opt.text}</option>)
      }
    </select>
  )
}

export default Select