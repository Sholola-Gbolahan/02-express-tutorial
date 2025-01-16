const express = require("express")

const app = express()

app.get("/", (req, res) => {
  // we can pass ion string as well as HTML
  // express uses send
  console.log('User hit the server');
  
  res.status(200).send("Homepage")
})

app.get("/about", (req, res) => {
  res.send("About Page")
})


// This handles all http verbs with any method
app.all('*',(req,res)=>{
    // status() is used to pass in the status code
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
  console.log("server is listen on port:5000")
})

// app.get - Read Data
// app.post - Inster Data
// app.put  - Update Data
// app.delete - Delete Data
// app.all
// app.use
// app.listen
