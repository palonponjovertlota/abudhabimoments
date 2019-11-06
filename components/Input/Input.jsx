import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ name, label, slot, containerClassName, ...props }) => {
  return (
    <div className={`input ${containerClassName}`}>
      <input className="field" {...props} />
      <label className="label">{label}</label>
      {slot}
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  slot: PropTypes.any,
  containerClassName: PropTypes.string,
  className: PropTypes.string
}

export default Input
