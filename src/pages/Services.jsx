import React from 'react'
import { withTranslation } from 'react-i18next'
import Menu from '../components/Menu'

const Services = () => (
  <>
    <Menu />
    <div className="main-container servicesPage">
      <div className="main-content">
        <img src="img/services.png" alt="services list" />
      </div>
    </div>
  </>
)

export default withTranslation()(Services)
