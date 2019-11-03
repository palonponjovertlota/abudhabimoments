import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import { withTranslation } from 'i18n'

const Home = ({ t }) => <Layout>{t('title')}</Layout>

Home.getInitialProps = () => ({
  namespacesRequired: ['home']
})

Home.propTypes = {
  t: PropTypes.func
}

export default withTranslation('home')(Home)
