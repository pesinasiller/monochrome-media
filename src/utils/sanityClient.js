import imageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')

export const sanity = sanityClient({
  projectId: 'ubsujq2c',
  dataset: 'monochrome',
  useCdn: true,
})

const builder = imageUrlBuilder(sanity)
export function urlForImage(source) {
  return builder.image(source)
}
