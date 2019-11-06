import React from 'react'
import PropTypes from 'prop-types'
import './Pattern.css'

const Pattern = ({ variant }) => (
  <div
    className={`tw-absolute tw-pointer-events-none tw-w-full tw-h-full tw-left-0 tw-top-0 patterns patterns-${variant}`}
  >
    <i className="pattern"></i>
    <i className="pattern"></i>
  </div>
)

Pattern.propTypes = {
  variant: PropTypes.oneOf(['reversed'])
}

export default Pattern
