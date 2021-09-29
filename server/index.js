const express = require('express')
const app = express();
const cors = require('cors');
const usersRoutes = require('./route/Users')
const listRoutes = require('./route/List')
if(process.env.NODE_ENV !== "production") require('dotenv').config();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

app.use((_req, _res, next)=>{
    console.log(' Incoming Request 🦅 ');
    next();
})

app.get('/', (_req,res)=>{
    res.json({message: "Welcome to Chanho's server. Please, add endpoints"})
})

app.use('/users',usersRoutes);
app.use('/list', listRoutes);

app.listen(PORT, ()=>{
    console.log(` 🚀 listening on ${PORT} `)
})