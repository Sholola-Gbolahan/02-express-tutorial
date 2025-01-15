const http = require("http")

const server = http.createServer((req, res) => {
  // Checking information on type of request made and the path requested
  console.log(req.method)
  console.log(req.url)

  const url = req.url

  if (url === "/") {
    // Homepage
    res.writeHead(200, { "content-type": "text/html" })
    res.write("<h1>Homepage</h1>")
    res.end()
  }
//   About Page
  else if(url === '/about'){
    res.writeHead(200, { "content-type": "text/html" })
    res.write("<h1>About Page</h1>")
    res.end()
  }
  else{
    // 404
    res.writeHead(404, { "content-type": "text/html" })
    res.write("<h1>Page not found</h1>")
    res.end()
  }
})

server.listen(5000)
