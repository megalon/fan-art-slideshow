import dotenv from 'dotenv'
import express, { response } from 'express'
import path from 'path'

// ------ Setup ------
dotenv.config()
const app = express()
const port: string = process.env.PORT as string

// Config express
app.use(express.static(path.join(__dirname, 'public')))

//#region Routes
//#region GET
app.get('/', (req, res) => {
  res.send('Test!')
})

// Handle 404
app.use((req, res) => {
  res.redirect('/')
})
//#endregion
//#endregion

// Start server
app.listen(port, () => {
  console.log(`Fan Art Slideshow listening on port ${port}!`)
})
