import React, { useContext } from 'react'
import Link from 'next/link'
import { LanguageContext } from 'contexts/LanguageContext'
import 'styles/header.css'

const languages = [
  {
    label: 'AR',
    name: 'ar'
  },
  {
    label: 'EN',
    name: 'en'
  }
]

function Header() {
  const { language, setLanguage, isRtl } = useContext(LanguageContext)
  const navItems = [
    <div
      key={0}
      className="tw-mx-3 md:tw-mx-6 tw-border tw-border-white tw-rounded-full tw-text-white tw-cursor-pointer lang-switch"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
    >
      {languages.map((l, key) => (
        <span className={language === l.name ? 'active' : ''} key={key}>
          {l.label}
        </span>
      ))}
    </div>,

    <Link key={1} href="/auth/login">
      <a className="tw-inline-block tw-text-white tw-text-3xl md:tw-text-4xl profile">
        <i className="icon-login"></i>
      </a>
    </Link>
  ]

  const renderNavItems = items => (
    <>
      {items.map((item, key) => (
        <React.Fragment key={key}>{item}</React.Fragment>
      ))}
    </>
  )

  return (
    <header>
      <div className="tw-flex tw-items-center tw-justify-between md:tw-justify-center tw-p-6 md:tw-px-12 md:tw-py-4 tw-bg-gray">
        <Link href="/">
          <a aria-current="page">
            <img
              className="logo"
              src={`/png/logo_${language}.png`}
              alt="Logo"
            />
          </a>
        </Link>

        <nav
          className={`md:tw-absolute ${
            isRtl ? 'md:tw-left-0 md:tw-ml-12' : 'md:tw-right-0 md:tw-mr-12'
          }`}
        >
          {renderNavItems(isRtl ? navItems.splice(0).reverse() : navItems)}
        </nav>
      </div>
    </header>
  )
}

export default Header
