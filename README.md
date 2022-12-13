# Express
This is a template detailing common applications of the Node.js framework Express.

Documentation:

> http://expressjs.com/

## Express generator

> https://expressjs.com/en/starter/generator.html

## Create Express project
In a terminal run the following commands:
```
mkdir express
cd express
npm init
```
Keep default npm settings

Installing nodemon and babel:
```
npm install express nodemon
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
```

Creating a babel file:
```
touch .babelrc 
```
Populate .babelrc
```
{
    "presets" : ["@babel/preset-env"]
}
```
Add version 'module' in package.json
```
"type": "module",
"version": "1.0.0",
```

In package.json update "scripts". This will run the project with babel when starting.
```
"scripts": {
  "start": "nodemon --experimental-json-modules --exec babel-node index.js"
},
```

Create index.js (This js file can have any name but must match the reference on the 'start' lines in the package.json file).
Populate the index.js file. 
```
import express from "express";
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})
```
This has created an express variable name app and used listen method to listen on set port(3000).

Complete by running:
```
npm install
npm start
```

This will return the following in the console. 

> SERVER IS RUNNING ON PORT 3000




