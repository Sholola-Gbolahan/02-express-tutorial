const express = require("express")
const {products} = require('./data')

const app = express()

app.get("/", (req, res) => {
  res.send('<h1> Homepage</h1> <a href="api/products" > products</a>' )
})
// Route parameter is setup to avoid hand coding products params
app.get("/api/products/1", (req, res) => {
    const singleProduct = products.find((product)=> product.id === 1)
    res.json(singleProduct)
  })                                                  
  
app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
