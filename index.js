const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

// const connectDB = require('./config/db')

const app = express()

app.use(express.json());

const PORT = process.env.PORT || 3000



// connectDB()

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/lambda', (req, res) => {
    
})