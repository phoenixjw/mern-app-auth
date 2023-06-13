require('dotenv').config()

const { config } = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')


// express app
const app = express()

// middleware - Allows request body to be accessed in handler
app.use(express.json())
//              - logs requests made
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
 .then(() => {
     // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB and listening on port', process.env.PORT)
    }) 
  })
    .catch((error) => {
        console.log(error)
  })
