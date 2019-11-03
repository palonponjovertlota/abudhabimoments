import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from 'i18n'

const Error = ({ statusCode, t }) => (
  <div className="tw-flex tw-justify-center tw-items-center tw-h-screen">
    <p className="tw-text-gray">
      {statusCode ? t('with-status', { statusCode }) : t('without-status')}
    </p>
  </div>
)

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null
  if (res) {
    ;({ statusCode } = res)
  } else if (err) {
    ;({ statusCode } = err)
  }
  return {
    namespacesRequired: ['common'],
    statusCode
  }
}

Error.defaultProps = {
  statusCode: null
}

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired
}

export default withTranslation('errors')(Error)
