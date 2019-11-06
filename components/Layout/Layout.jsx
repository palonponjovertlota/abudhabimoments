import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

function Layout({ hasFooter, children, ...props }) {
  return (
    <div className="tw-flex tw-flex-col tw-min-h-screen" {...props}>
      <div
        tabIndex={-1}
        role="group"
        className="tw-flex tw-flex-col tw-flex-grow tw-outline-none"
      >
        <Header />

        {children}

        {hasFooter && <Footer />}
      </div>
    </div>
  )
}

Layout.defaultProps = {
  hasFooter: true
}

Layout.propTypes = {
  hasFooter: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ])
}

export default Layout
