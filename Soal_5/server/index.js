const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser')
const requestIp = require('request-ip');

const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", "Origin, If-None-Match, Referer, User-Agent, X-Requested-With, Host, Cache-Control, Connection, Content-Type, Accept, Accept-Encoding, Accept-Language, Authorization, Range, x-random");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  res.header('Access-Control-Expose-Headers', 'Content-Length,Content-Range');
  next();
});

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