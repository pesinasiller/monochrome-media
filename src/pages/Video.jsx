import React, { useState, useEffect } from 'react'
import Vimeo from '@u-wave/react-vimeo'
import Masonry from 'react-masonry-css'
import { withTranslation } from 'react-i18next'
import { sanity } from '../utils/sanityClient'
import Menu from '../components/Menu'
import './Video.scss'

const Video = (props) => {
  const [data, setData] = useState([])
  const { t } = props

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == 'videos']
          {
            foto,
            ink,
            titulo,
            keywords
          }
          | order(publishedAt desc)`,
      )
      .then((res) => {
        console.log(res)
        setData(res)
      })
      .catch((err) => {
        console.error('Oh no, error occured: ', err)
      })
  }, [])

  return (
    <>
      <Menu />
      <div className="main-container">
        <div className="video-main-content">
          <h3>{t('video:video')}</h3>
          <br />
          <Masonry
            breakpointCols={{ default: 3, 800: 2 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {
              data
                .map((item) => (
                  <Vimeo
                    className="video"
                    key={item.link}
                    video={item.ink}
                  />
                ))
            }
          </Masonry>
        </div>
      </div>
    </>
  )
}

export default withTranslation()(Video)
