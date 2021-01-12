import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import Menu from '../components/Menu'
import Background from '../img/work-background.png'

const Work = (props) => {
  const { t } = props
  return (
    <>
      <Menu theme="black" />
      <div className="main-container workPage" style={{ backgroundImage: `url(${Background})` }}>
        <div className="main-content">
          <div>
            <Link to="/video">{t('video:video')}</Link>
          </div>
          <div>
            <Link to="/photo">{t('photo:photo')}</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default withTranslation()(Work)
