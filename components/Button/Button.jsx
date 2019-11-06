import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ variant, children, className, ...others }) => (
  <button className={`btn btn-${variant} ${className}`} {...others}>
    {children}
  </button>
)

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'text']).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ])
}

export default Button
