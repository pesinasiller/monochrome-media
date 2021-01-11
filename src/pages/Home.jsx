import React from 'react'
import { withTranslation } from 'react-i18next'
import { SocialIcon } from 'react-social-icons'
import Menu from '../components/Menu'
import { ReactComponent as BigLogo } from '../img/logo-big.svg'

const Home = () => (
  <>
    <div className="vimeo-wrapper">
      <iframe
        title="background"
        src="https://player.vimeo.com/video/76979871?background=1&autoplay=1&loop=1&byline=0&title=0"
        frameBorder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowFullScreen
      />
    </div>
    <Menu theme="black" />
    <div className="main-container" style={{ background: 'none' }}>
      <div style={{ width: '100vw', textAlign: 'center' }}>
        <BigLogo style={{ maxWidth: '30%' }} />
        <br />
        <br />
        <br />
        video / photo / live multicam streaming
      </div>
    </div>
    <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
      <SocialIcon url="https://instagram.com/alberto.romero.dp/" fgColor="#000" bgColor="transparent" />
      <SocialIcon url="https://vimeo.com/" fgColor="#000" bgColor="transparent" />
      <SocialIcon url="https://youtube.com/" fgColor="#000" bgColor="transparent" />
      <SocialIcon url="https://facebook.com/" fgColor="#000" bgColor="transparent" />
    </div>
  </>
)

export default withTranslation()(Home)
