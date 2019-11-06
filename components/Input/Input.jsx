import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { LanguageContext } from 'contexts/LanguageContext'
import './Input.css'

const Input = ({
  name,
  label,
  slot,
  className,
  containerClassName,
  ...props
}) => {
  const { isRtl } = useContext(LanguageContext)

  return (
    <div className={`input ${containerClassName}`}>
      <input className={`field ${className}`} {...props} />
      <label className={`label ${isRtl ? 'tw-right-0' : 'tw-left-0'}`}>
        {label}
      </label>
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
