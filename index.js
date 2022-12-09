import express, { request, response } from "express";
import data from './data/mock.json' assert { type: "json" };

const app = express();
const PORT = 3000;

//Using the public folder at project root
app.use(express.static("public"));

//Using the images folder at the route /images
app.use('/images', express.static('images'));

//Middleware
//using express.json and express.urlencoded
// app.use(express.json());
app.use(express.urlencoded({extended: true}));

//App routing
app.route('/class')
.get((request, response) => {
    response.json("retrieve class info");
    // throw new Error();
})
.post((request, response) => {
    response.send('This is a POST request at /create')
})
.put((request, response) => {
    response.send('This is a PUT request at /edit')
});

//GET
app.get('/', (request, response) => {
    // response.send('This is a GET request at /')
    response.json(data);
});

//POST express.json express.urlencoded
app.post("/item", (request, response) => {
    console.log(request.body);
    response.send(response.body);
});

//GET - download method
app.get('/download', (request, response) => {
    response.download("images/mountains_2.jpeg");
});

//GET - redurtect method
app.get('/redirect', (request, response) => {
    response.redirect('http://www.google.com');
});

//GET with next
app.get('/next', (request, response, next) => {
    console.log("Response will be sent by the next function");
    next();
}, (request, response) => {
    response.send("just set up route with second callback")
}
);

//Get with routing paramiters
app.get("/class/:id", (request, response) => {
    // console.log(request.params);
    //save id and convert from string to number. Responses are string by default.
    const studentId = Number(request.params.id);
    // => returns without explicitly typing return
    const student = data.filter((student) => student.id === studentId)
    response.send(student); 
});

//POST
app.post('/create', (request, response) => {
    response.send('This is a POST request at /create')
});
//PUT
app.put('/edit', (request, response) => {
    response.send('This is a PUT request at /edit')
});
//DELETE
app.delete('/delete', (request, response) => {
    response.send('This is a DELETE request at /delete')
});

//Errors - error handler function
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('broken!');
});

app.listen(PORT, () => {
    // console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    // console.log(data);
});

