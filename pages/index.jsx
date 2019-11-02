import React from 'react'

const url = 'https://abudhabimoments.ae'

const Home = () => (
  <div className="tw-flex tw-justify-center tw-items-center tw-h-screen">
    <a
      className="tw-text-gray-700 hover:tw-text-gray-900"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {url}
    </a>
  </div>
)

export default Home
