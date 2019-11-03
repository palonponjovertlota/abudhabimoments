import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const LocaleContext = createContext()

export const LocaleProvider = ({ children, ...props }) => {
  return (
    <LocaleContext.Provider value={{ ...props }}>
      {children}
    </LocaleContext.Provider>
  )
}

LocaleProvider.defaultProps = {
  isRtl: false
}

LocaleProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]),
  locale: PropTypes.oneOf(['en', 'ar']).isRequired,
  setLocale: PropTypes.func.isRequired,
  isRtl: PropTypes.bool
}
