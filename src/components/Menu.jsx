import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import HamburgerMenu from 'react-hamburger-menu'
import { Link } from 'react-router-dom'
import { ReactComponent as LogoSmall } from '../img/logo-small.svg'
import './Menu.scss'

function Menu(props) {
  const [lang, setLang] = useState('es')
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { t, theme } = props

  const changeLang = () => {
    const val = lang === 'es' ? 'en' : 'es'
    setLang(val)
    const { i18n } = props
    i18n.changeLanguage(val)
  }

  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div className={`menu${theme ? ` menu--${theme}` : ''}${menuIsOpen ? ' menu--isOpen' : ''}`}>
      <div className="menu_logo-container">
        <Link to="/">
          <LogoSmall style={{ height: '40px' }} />
        </Link>
      </div>
      <div className="menu_hamburguer">
        <HamburgerMenu
          isOpen={menuIsOpen}
          color="#666"
          menuClicked={openMenu}
        />
      </div>
      <div className="menu_menu-container">
        <div>
          <Link to="/">
            {t('menu:home')}
          </Link>
        </div>
        <div>
          <Link to="/work">
            {t('menu:work')}
          </Link>
        </div>
        <div>
          <Link to="/clients">
            {t('menu:clients')}
          </Link>
        </div>
        <div>
          <Link to="/about">
            {t('menu:about')}
          </Link>
        </div>
        <div>
          <Link to="/services">
            {t('menu:services')}
          </Link>
        </div>
        <div>
          <Link to="/contact">
            {t('menu:contact')}
          </Link>
        </div>
        <div>
          <button type="button" className="language-switch" onClick={() => changeLang()}>en/es</button>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Menu)
