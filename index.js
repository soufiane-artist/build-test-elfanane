const express =require('express')
const app = express()


const path = require("path")


//client
app.use(express.static(path.join(__dirname,'/build')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/build/index.html'))
})
app.listen('3000',()=>{
    console.log('listen port 3000');
})