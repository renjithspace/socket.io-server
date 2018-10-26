const express = require('express')
const app = express()

const port = 2323

app.listen(port, () => {
  console.log(`Server runnig on port ${port}`)
})