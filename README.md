Simple slideshow webpage to display artwork with credits.

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
1. `node .` to start server

TODO: Move this to a docker container!
