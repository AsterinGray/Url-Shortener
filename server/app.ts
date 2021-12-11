import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { MONGODB_URI, PORT } from './app/config'
import routes from './app/routes'

const app = express()

mongoose.connect(MONGODB_URI)

const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log('Database Connected'))

app.use(cors())
app.use(express.json())

app.use('/', routes)

app.listen(PORT)
