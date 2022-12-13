# Express
This is a template detailing common applications of the Node.js framework Express.

## Install and run template

In the project folder run:
```
npm install
npm start
```
*To avoid ESM error switch ton the Current version of node.

> https://github.com/nodejs/node/issues/27441

The template will be running on port 3000:

> http://localhost:3000/

Get list of all class members in json file here:

> http://localhost:3000/

Get first class member by id here:

> http://localhost:3000/class/1

Get image in images folder here:

> http://localhost:3000/images/mountains_2.jpeg

## Create Express Template

### Express documentation

> http://expressjs.com/

### Express generator

> https://expressjs.com/en/starter/generator.html

### Express Template without Generator 
In a terminal run the following commands:
```
mkdir express
cd express
npm init
```
This will create and move to the new 'express' project folder. It will then initialize the project with npm. Keep the default npm settings to match this example.

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
*To debug modile errors use the Current version of node.

> https://github.com/nodejs/node/issues/27441

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

### Adding Mock Data
This resource will be used to generate example json data https://www.mockaroo.com/.
- remove id and gender 
- crate 25 rows
- change format to json 
- download data 
- change file name to mock.json
- create data folder in project folder
- add mock.json to data folder
Add data
In index.json add data with on line second line below 'import express'.
```
import express from "express";
import data from './data/mock.json' assert { type: "json" };
```
We will add CRUD(Create, Read, Update and Delete) functionality with the following block added below 'const PORT = 3000;' and above 'app.listen'.
```
//GET
app.get('/', (request, response) => {
    // response.send('This is a GET request at /')
    response.json(data);
})
//POST
app.post('/create', (request, response) => {
    response.send('This is a POST request at /create')
})
//PUT
app.put('/edit', (request, response) => {
    response.send('This is a PUT request at /edit')
})
//DELETE
app.delete('/delete', (request, response) => {
    response.send('This is a DELETE request at /delete')
})
```
*These updated can be tested with postman.

### Access static files

Create 'public' and 'images' folders in the project's main directory. Then add the following below 'const PORT = 3000;'.
```
//Using the public folder at project root
app.use(express.static("public"))
//Using the images folder at the route /images
app.use('/images', express.static('images'))
```
This will include access to the 'public' and 'images' folders. This will allow access to the mountains_2.jpeg image.

> http://localhost:3000/images/mountains_2.jpeg

### Express Routing

Access students in the mock.json file by id.

```
//Get with routing parameters
app.get("/class/:id", (request, response) => {
    // console.log(request.params);
    //save id and convert from string to number. Responses are string by default.
    const studentId = Number(request.params.id);
    // => returns without explicitly typing return
    const student = data.filter((student) => student.id === studentId)
    response.send(student); 
});
```