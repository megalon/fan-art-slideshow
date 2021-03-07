import dotenv from 'dotenv'
import express, { response } from 'express'
import path from 'path'
import fetch from 'node-fetch'

// ------ Setup ------
dotenv.config()
const app = express()
const port: string = process.env.PORT as string

//#region Config express
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))
//#endregion

//#region Routes
app.get('/', async (req, res) => {
  const response = await fetch(`http://localhost:${port}/art-and-credits.json`)
  const json = await response.json()

  res.render('default', json)
})

// Handle 404
app.use((req, res) => {
  res.redirect('/')
})
//#endregion

// Start server
app.listen(port, () => {
  console.log(`Fan Art Slideshow listening on port ${port}!`)
})
