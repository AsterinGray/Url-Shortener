import express from 'express'
import { createUrl, getUrl } from './controller'

const routes = express.Router()

routes.post('/', createUrl)
routes.get('/:shortUrlId', getUrl)

export default routes
