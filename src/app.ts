import dotenv from 'dotenv'
import express, { response } from 'express'
import path from 'path'
import fetch from 'node-fetch'
import fs from 'fs'

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
  res.render('default', { artwork: getFanArtData() })
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

const getFanArtData = () => {
  const imagesPath = path.join(__dirname, 'public/images')

  const folders = fs.readdirSync(imagesPath)

  let imageData: imageInfo[] = []

  folders.forEach((folder) => {
    const images = fs.readdirSync(path.join(imagesPath, folder))
    images.forEach((image) => {
      imageData.push({
        artist: folder,
        filepath: `./images/${folder}/${image}`,
      })
    })
  })

  return imageData
}

type imageInfo = {
  artist: string
  filepath: string
}
