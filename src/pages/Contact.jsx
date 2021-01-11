import React from 'react'
import { StaticKitProvider } from '@statickit/react'
import { withTranslation } from 'react-i18next'
import Menu from '../components/Menu'
import ContactForm from '../components/ContactForm'
import { ReactComponent as BigLogo } from '../img/logo-big.svg'

const Contact = () => (
  <StaticKitProvider site="b2d20d843e48">
    <Menu theme="black" />
    <div className="main-container">
      <div className="main-content">
        <ContactForm />
      </div>
      <div className="side-bar" style={{ textAlign: 'center'}}>
        <BigLogo style={{ height: '200px' }} />
      </div>
    </div>
  </StaticKitProvider>
)

export default withTranslation()(Contact)
