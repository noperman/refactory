const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const requestIp = require('request-ip');
app.use(requestIp.mw())

app.post('/', async (req, res) => {
  var date = new Date()
  // const ip = req.clientIp;

  let log = `[${date}] Success: POST http://localhost:${port} {"counter" : ${req.body.counter}, "X-RANDOM" : "${req.headers['x-random']}"} \n`

  // console.log(log)
  await fs.appendFileSync('server.log', log);

  return res.status(201).json({
    "X-RANDOM" : req.headers['x-random'],
    "counter" : req.body.counter
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})