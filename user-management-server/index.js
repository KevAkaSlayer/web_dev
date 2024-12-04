const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;  

app.use(cors());    

const users = [
    {id:1,name:'John',email:'john@gmail.com'},
    {id:2,name:'Doe',email:'doe@gmail.com'},
    {id:3,name:'kev',email:'kev@gmail.com'},
]

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/users',(req,res)=>{
    res.send(users);
})   



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})