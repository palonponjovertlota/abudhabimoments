import React from 'react'
import Link from 'next/link'
import Input from 'components/Input/Input'
import Layout from 'components/Layout/Layout'
import Pattern from 'components/Pattern/Pattern'
import 'styles/pages/auth/login.css'

const Login = () => (
  <Layout>
    <div className="tw-relative tw-py-16 tw-flex tw-flex-grow tw-flex-col tw-items-center tw-justify-center tw-bg-gray-light tw-text-center tw-text-white">
      <Pattern variant="reversed" />

      <div className="tw-w-full md:tw-w-auto tw-px-6 content">
        <h1 className="tw-text-3xl md:tw-text-4xl tw-font-bold">Login</h1>
        <div className="tw-p-0 form-wrap">
          <form noValidate>
            <Input
              type="email"
              name="email"
              label="Your email"
              containerClassName="tw-w-full"
            />

            <Input
              type="password"
              name="password"
              label="Your password"
              slot={
                <div className="tw-text-right tw-text-gray-lightest tw-mt-1 md:tw-mt-2">
                  <Link href="/auth/forgot-password">
                    <a>Forgot password?</a>
                  </Link>
                </div>
              }
              containerClassName="tw-w-full"
            />
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default Login
