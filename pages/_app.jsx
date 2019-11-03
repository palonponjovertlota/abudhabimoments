import React from 'react'
import Next from 'next/app'
import 'styles/app.css'
import { appWithTranslation } from 'i18n'

class App extends Next {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <style jsx global>{`
          @font-face {
            font-family: icomoon;
            src: url(/fonts/icomoon.woff) format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: block;
          }

          [class*=' icon-'],
          [class^='icon-'] {
            font-family: icomoon !important;
            speak: none;
            font-style: normal;
            font-weight: 400;
            font-feature-settings: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .icon-ticket:before {
            content: '\e939';
          }

          .icon-time:before {
            content: '\e914';
          }

          .icon-fullscreen:before {
            content: '\e913';
          }

          .icon-calendar:before {
            content: '\e912';
          }

          .icon-share:before {
            content: '\e911';
          }

          .icon-check-circle:before {
            content: '\e900';
          }

          .icon-check:before {
            content: '\e902';
          }

          .icon-circle:before {
            content: '\e903';
          }

          .icon-x:before {
            content: '\e901';
          }

          .icon-tarrow:before {
            content: '\e907';
          }

          .icon-barrow:before {
            content: '\e904';
          }

          .icon-larrow:before {
            content: '\e905';
          }

          .icon-rarrow:before {
            content: '\e906';
          }

          .icon-spinner3:before {
            content: '\e97c';
          }

          .icon-spinner5:before {
            content: '\e97e';
          }

          .icon-facebook:before {
            content: '\ea90';
          }

          .icon-twitter:before {
            content: '\ea96';
          }

          .icon-youtube:before {
            content: '\ea9d';
          }

          .icon-instagram:before {
            content: '\ea92';
          }

          .icon-snapchat:before {
            content: '\e90d';
          }

          .icon-follow:before {
            content: '\e90e';
          }

          .icon-home:before {
            content: '\e90f';
          }

          .icon-more:before {
            content: '\e910';
          }

          .icon-login:before {
            content: '\e90a';
          }

          .icon-logout:before {
            content: '\e90b';
          }

          .icon-marker:before {
            content: '\e90c';
          }

          .icon-arrow-left:before {
            content: '\e908';
          }

          .icon-arrow-right:before {
            content: '\e909';
          }

          body {
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 14px;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New,
              monospace;
          }
        `}</style>

        <Component {...pageProps} />
      </>
    )
  }
}

export default appWithTranslation(App)
