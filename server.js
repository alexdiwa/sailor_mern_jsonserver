const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// ----

// custom route
server.use(jsonServer.rewriter({
  "/auth/signup": "/signup",
  "/auth/login": "/login",
  "/article/1": "/1",
  "/article/2": "/2"
}))

// response for test token on register and login (disable at all other times)
// router.render = (req, res) => {
//   res.jsonp({
//     token: "Test Token!"
//   })
// }

// ----

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

