import React from 'react'
import { withTranslation } from 'react-i18next'
import Menu from '../components/Menu'

const Clients = (props) => {
  const { t } = props
  return (
    <>
      <Menu />
      <div className="main-container clientsPage">
        <div className="side-bar">
          <span className="clientsPage__title">{t('menu:clients')}</span>
          <span>mazda</span>
          <span>nissan</span>
          <span>trek</span>
          <span>matices</span>
          <span> arborea</span>
          <span>tequila la cofradía</span>
          <span>hotel morales</span>
          <span>flex</span>
          <span>plexus</span>
          <span>gfny</span>
          <span>gdluz</span>
          <span>casillas+casillas</span>
          <span>galilea 2000</span>
          <span>living ouest</span>
        </div>
      </div>
    </>
  )
}

export default withTranslation()(Clients)
