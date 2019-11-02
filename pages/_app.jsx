import React from 'react'
import Next from 'next/app'
import '../styles/app.css'

export default class App extends Next {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
}
