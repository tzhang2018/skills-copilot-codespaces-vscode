// Create web server
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create an array to store comments
let comments = []

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments)
})

// Post a comment
app.post('/comments', (req, res) => {
    let comment = req.body.comment
    comments.push(comment)
    res.json(comments)
})

// Start web server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})