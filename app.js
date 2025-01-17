const express = require("express")
const {products} = require('./data')

const app = express()

app.get("/", (req, res) => {
  res.send('<h1> Homepage</h1> <a href="api/products" > products</a>' )
})
// Route parameter is setup to avoid hand coding products params
app.get("/api/products/:productID", (req, res) => {
  console.log(req);
  console.log(req.params);
  
  const {productID} = req.params
  // Converting productID from string to number 
    const singleProduct = products.find((product)=> product.id === Number(productID))
    // setting up 404 if params not exit
    if(!singleProduct){
      res.status(404).send('Product Does Not Exit')
    }
    console.log(singleProduct);
    res.json(singleProduct);
  })

// Complex Params
  app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req);
    console.log(req.params);
    res.send('Hello World')
  })

  // Query strings setup

  app.get('/api/v1/query', (req,res)=>{
    // query format is : http://localhost:5000/api/v1/query?name=john&age=32
    console.log(req.query);
    res.send('hello world')

    
  })


    
  
  
  
app.listen(5000, () => {
  console.log("server listening on port : 5000")
})
