import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const { initialLanguage } = this.props.__NEXT_DATA__.props

    return (
      <Html
        lang={initialLanguage}
        dir={initialLanguage === 'ar' ? 'rtl' : 'ltr'}
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
