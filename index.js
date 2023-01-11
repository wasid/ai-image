const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static folder
app.use(express.static(path.join(__dirname,'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server is listening on port ${port}`);
    }
});