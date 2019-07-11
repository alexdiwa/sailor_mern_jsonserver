const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// ----

// custom route
server.use(jsonServer.rewriter({
  "/auth/register": "/auth"
}))

// response
router.render = (req, res) => {
  res.status(201).jsonp({
    token: "Test Token!"
  })
}

// ----


server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})