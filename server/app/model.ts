import { model, Schema } from 'mongoose'

import { Url } from './types'

const urlSchema = new Schema<Url>({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  shortUrlId: {
    type: String,
    required: true,
    unique: true,
  },
})

const UrlModel = model('URL', urlSchema)

export default UrlModel
