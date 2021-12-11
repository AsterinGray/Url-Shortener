import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { PORT } from './app/config'
import routes from './app/routes'

const app = express()

mongoose.connect(
  'mongodb+srv://AsterinGray:ProjectAG19@urlshortener.msu6e.mongodb.net/URLShortener?retryWrites=true&w=majority'
)

const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log('Database Connected'))

app.use(cors())
app.use(express.json())

app.use('/', routes)

app.listen(PORT)
