import dotenv from 'dotenv'
import express, { response } from 'express'
import path from 'path'

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
app.get('/', (req, res) => {
  res.render('default')
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
