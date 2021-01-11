import React, { useState, useEffect} from 'react'
import { withTranslation } from 'react-i18next'
import Masonry from 'react-masonry-css'
import Menu from '../components/Menu'
import { sanity, urlForImage } from '../utils/sanityClient'

const tags = ['product', 'portrait', 'travel', 'nature', 'music', 'sports', 'architecture', 'food', 'social']

const Photo = () => {
  const [data, setData] = useState([])
  const [selectedTags, setSelectedTags] = useState('')

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == 'fotos']
          {
            foto,
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
        console.error('Oh no, error occured: ', err);
      })
  }, [])

  return (
    <>
      <Menu />
      <div className="main-container">
        <div className="side-bar">
          <h1>PHOTO</h1>
          <div className="photo-tag" onClick={() => setSelectedTags('')}>all categories</div>
          {
          tags.map((item, i) => <div key={i} className="photo-tag" onClick={() => setSelectedTags(item)}>{item}</div>)
          }
        </div>
        <div className="main-content">
          <Masonry
            breakpointCols={{ default: 3, 800: 2 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {
              data
                .filter((item) => !selectedTags || item.keywords.includes(selectedTags))
                .map((item, key) => (
                  <img
                    className="photo-img"
                    key={key}
                    src={urlForImage(item.foto).url()}
                    alt={item.titulo}
                  />
                ))
            }
          </Masonry>
        </div>
      </div>
    </>
  )
}

export default withTranslation()(Photo)
