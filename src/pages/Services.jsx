import React from 'react'
import { withTranslation } from 'react-i18next'
import Menu from '../components/Menu'
import ServicesImg from '../img/services.png'

const Services = () => (
  <>
    <Menu />
    <div className="main-container servicesPage">
      <div className="main-content">
        <img src={ServicesImg} alt="services list" />
      </div>
    </div>
  </>
)

export default withTranslation()(Services)
