import express from 'express'

import exampRoute from './exampRoute'

const server = express()

server.use('/examp-route', exampRoute)

export default server
