const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()



const filePath = './data.json'

const path = require('path')
const fs = require('fs')
const moviesData = require(filePath)

app.prepare().then(() => {

  const server = express()
  server.use(express.json())


  server.get('/api/v1/movies', (req, res) => {
    return res.json(moviesData)
  })



  server.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = moviesData.find(m => m.id === id)
    return res.json(movie)
  })


  server.post('/api/v1/movies', (req, res) => {
    const movie = req.body
    moviesData.push(movie)

    const pathToFile = path.join(__dirname, filePath)
    //stringify ur data
    //adds each property to a new line
    const stringifiedData = JSON.stringify(moviesData, null, 2)
    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }
      return res.json('Movie has been succesfuly added!')
    })
  })



  server.delete('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    const movieIndex = moviesData.findIndex(m => m.id === id)
    moviesData.splice(movieIndex, 1)

    const pathToFile = path.join(__dirname, filePath)
    const stringifiedData = JSON.stringify(moviesData, null, 2)

    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('Movie has been succesfuly deleted!')
    })
  })



  const PORT = process.env.PORT || 3000

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })

})