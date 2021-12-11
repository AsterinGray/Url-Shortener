import { Request, Response } from 'express'
import shortid from 'shortid'

import UrlModel from './model'
import { HOST, PORT } from './config'
import { validateUrl } from './utils'

export const createUrl = async (req: Request, res: Response) => {
  try {
    const longUrl = req.body.url
    if (!validateUrl(longUrl)) {
      console.log('invalid')
      return res.status(400).json({ message: 'Invalid URL' })
    }

    const shortUrlId = shortid.generate()
    const shortUrl = `http://${HOST}:${PORT}/${shortUrlId}`

    const Url = new UrlModel({
      longUrl,
      shortUrl,
      shortUrlId,
    })

    await Url.save()

    return res.status(201).send({ shortUrl })
  } catch (error) {
    res.status(500).send('Create URL Failed')
  }
}

export const getUrl = async (req: Request, res: Response) => {
  try {
    const Url = await UrlModel.findOne({
      shortUrlId: req.params.shortUrlId,
    })
    return !Url
      ? res.status(404).send('Not found')
      : res.redirect(301, Url.longUrl)
  } catch (error) {
    res.status(500).send('Url Not Found!')
  }
}
