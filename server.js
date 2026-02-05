const express = require('express');

const app = express()       //created a server and saved in app variable.


//programmed server
app.get("/", (req,res) => {
    res.send("hello world")
})


//programmed server
app.get("/about", (req,res) => {
    res.send("About Page")
})

app.listen(3000)            //started server