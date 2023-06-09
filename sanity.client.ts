import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { Image } from './types'

export const projectId = 'xqw7og00'
export const dataset = 'production'
const apiVersion = '2022-11-15'

const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: Image) => builder.image(source)
export default client
