import React from 'react'
import Link from 'next/link'
import './Footer.css'

const Footer = () => (
  <footer className="tw-fixed tw-w-full tw-bottom-0 tw-left-0">
    <div className="tw-relative md:tw-hidden">
      <div className="tw-flex tw-flex-1 tw-justify-around tw-bg-white tw-text-gray tabs">
        <div className="tab tab-home">
          <Link href="/">
            <a>
              <i className="icon-home"></i>
              <span>Home</span>
            </a>
          </Link>
        </div>
        <div className="tab tab-follow">
          <button>
            <i className="icon-follow"></i>
            <span className="tw-text-blue">Follow Us</span>
          </button>
        </div>
        <div className="tab tab-more">
          <button>
            <i className="icon-more"></i>
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
