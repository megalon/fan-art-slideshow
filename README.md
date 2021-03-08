Simple slideshow webpage to display artwork with an artist credit.

Images are loaded from subdirectories within the directory `build/public/images/`.
The name of the artist that is displayed is taken from the name of the directory the artwork is stored in.

Example: `build/public/images/megalon/test.png` would load the image and display the artist name `megalon`.

To add more artists, simply create a new directory and drop their artwork in there.

# Info

- Backend: **NodeJS** with **TypeScript**
- Routing: **Express.js**

# 🧪 Development

## Requirements

1. yarn v1.x
1. NodeJS
1. VisualStudio Code (recommended)

## Setup

1. Open a shell in the project directory
1. Install packages with `yarn`
1. Copy `example.env` to `.env` and fill out the information

## .env explaination

| Value | Usage       |
| ----- | ----------- |
| PORT  | Port number. EX: `1234` |
| NODE_ENV  | `development` or `production` |

## Watch files for changes
Recompile TS files on change using the command below

1. `yarn dev`

Run server and (hopefully) restart when any of the above changes occur

1. `nodemon .`

# 🚀 Deploying

1. `git pull`
1. `yarn` to install packages
1. Fill out .env and set variable `NODE_ENV` to `production`
1. `yarn build`
1. Place images inside of the folder `build/public/images/(artist-name)/`
1. `node .` to start server

TODO: Move this to a docker container!
