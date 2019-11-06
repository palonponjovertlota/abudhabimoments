import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { withTranslation } from 'i18n'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import Layout from 'components/Layout/Layout'
import Pattern from 'components/Pattern/Pattern'
import 'styles/pages/auth/login.css'

const Login = ({ t }) => (
  <Layout>
    <div className="tw-relative tw-py-16 tw-flex tw-flex-grow tw-flex-col tw-items-center tw-justify-center tw-bg-gray-light tw-text-center tw-text-white">
      <Pattern variant="reversed" />

      <div className="tw-w-full md:tw-w-auto tw-px-6 content">
        <h1 className="tw-text-3xl md:tw-text-4xl tw-font-bold">
          {t('title')}
        </h1>
        <div className="tw-p-0 form-wrap">
          <form noValidate>
            <Input
              type="email"
              name="email"
              label={t('emailLabel')}
              containerClassName="tw-w-full"
            />

            <Input
              type="password"
              name="password"
              label={t('passwordLabel')}
              slot={
                <div className="tw-text-right tw-text-gray-lightest tw-mt-1 md:tw-mt-2">
                  <Link href="/auth/forgot-password">
                    <a>{t('passwordSlot')}</a>
                  </Link>
                </div>
              }
              containerClassName="tw-w-full tw-mb-6 md:tw-mb-16"
            />

            <Button
              type="submit"
              variant="primary"
              className="tw-uppercase tw-mb-4 md:tw-mb-12"
            >
              {t('signUp')}
            </Button>

            <p>
              {t('noAccountPrompt')}
              <Link href="/auth/register">
                <a className="tw-text-blue"> {t('join')}</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

Login.getInitialProps = async () => {
  return {
    namespacesRequired: ['auth-login']
  }
}

Login.propTypes = {
  t: PropTypes.func
}

export default withTranslation('auth-login')(Login)
