import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'

function Layout({ children, ...props }) {
  return (
    <div className="tw-flex tw-flex-col tw-min-h-screen" {...props}>
      <div
        tabIndex={-1}
        role="group"
        className="tw-flex tw-flex-col tw-flex-grow tw-outline-none"
      >
        <Header />

        {children}
      </div>
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
