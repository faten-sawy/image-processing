# Udacity Image Processing API

## Description

This API can be used as a placeholder that allows you to resize an image's width and height based on url parameters.

### Project build depended on

1. [TypeScript] (https://www.typescriptlang.org/docs/)
2. [Node.JS] (https://nodejs.org/dist/latest-v16.x/docs/api/)
3. [Express] (https://expressjs.com/)
4. [Sharp] (https://www.npmjs.com/package/sharp)

### For Unit testing

1. [Jasmine] (https://jasmine.github.io/)
2. [supertest] (https://www.npmjs.com/package/supertest)


## Project Setup Instruction

Install npm in your computer, if you have node installed then most likely you have npm.

# Initialize The project

## start the server

1. Install all dependencies
   `npm install`

2. Build the project from TypeScript to JavaScript
   `npm run build`

3. Start the Server
   `npm run start`

### The server will start on port: the user environment port, or the default host is on: http://localhost:4000.

4. Run the Tests
   `npm run test`

5. Run Prettier and ESLint
   `npm run prettier`
   `npm run lint`

# Functionality and Endpoints


. Resizing Endpoint
   `/images/?imgName=tree&imgWidth=200&imgHeight=100`