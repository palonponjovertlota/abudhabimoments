import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'

function Layout({ children, ...props }) {
  return (
    <div className="tw-flex tw-flex-col tw-min-h-screen">
      <Header {...props} />

      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ])
}

export default Layout
