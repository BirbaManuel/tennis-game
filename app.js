const external = module.exports = {}
const express = require("express")
const app = express()
const bodyParser= require("body-parser")
const cookieParser= require("cookie-parser")
const http = require("http")
const port = normalizePort(process.env.PORT || "8000")
const debug = require("debug")("app:server")
const morgan = require("morgan")

const playersRouters = require("./routes/playersRouter")

app.use(morgan(":method :url :status :response-time ms - :res[content-length]"))
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}))
app.use(bodyParser.json({limit: "50mb", extended: true}))
app.use(cookieParser())

/* ROUTES */
app.use("/", playersRouters)
app.set("port", port)

const server = http.createServer(app)

server.listen(port)
server.on("error", onError)
server.on("listening", onListening)


function normalizePort(val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }

  return false
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error
  }

  const bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges")
      process.exit(1)
      break
    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  const addr = server.address()
  console.log(addr)
  const bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port
  debug("Listening on " + bind)
}
external.app = app
