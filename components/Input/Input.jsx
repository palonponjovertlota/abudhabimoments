import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ name, label, className, ...props }) => {
  return (
    <div className="input">
      <input className="field" {...props} />
      <label className="label">{label}</label>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string
}

export default Input
