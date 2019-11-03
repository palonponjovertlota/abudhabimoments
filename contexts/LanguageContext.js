import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children, ...props }) => {
  return (
    <LanguageContext.Provider value={{ ...props }}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.defaultProps = {
  isRtl: false
}

LanguageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]),
  language: PropTypes.oneOf(['en', 'ar']).isRequired,
  setLanguage: PropTypes.func.isRequired,
  isRtl: PropTypes.bool
}
