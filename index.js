const express = require('express')
const socket = require('socket.io')

const app = express()
const port = 2323

const server = app.listen(port, () => {
  console.log(`Socket server runnig on port ${port}`)
})

const io = socket(server)

io.on('connection', function(socket) {
  console.log(`Connection ${socket.id} established`)
})