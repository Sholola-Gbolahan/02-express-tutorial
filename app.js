const express = require("express")
const {products} = require('./data')

const app = express()

app.get("/", (req, res) => {
  res.send('<h1> Homepage</h1> <a href="api/products" > products</a>' )
})

app.get("/api/products", (req, res) => {
    // sending back without adding description 
    const newProducts = products.map((product) =>{
        const {id,name,image} = product
        return {id,name,image}
    } )
    res.send(newProducts)
  })
  
app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
