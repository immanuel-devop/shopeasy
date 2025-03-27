const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Welcome to shop easy for testing')
})

app.listen(PORT,()=>{
    console.log(`server running on the port ${PORT}`)
})