// -------------------- REQUIREMENTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// PORT
const PORT = process.env.PORT || 4000;
// ROUTES
const routes = require('./routes');

require('dotenv').config();

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: "GET, POST, PUT, DELETE", // only these methods are allowed
    credentials: true, // allows session cookies to be sent back and forth between client and server
    optionsSuccessStatus: 200 // only for legacy browsers (they fail if you send 204 back)  
};

// -------------------- MIDDLEWARE
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleTimeString();
    const result = `${method} ${url} ${requestedAt}`;
    console.log(result);
    // console.logs method used, url, time
    next();
});

// -------------------- sanity check
// app.get("/greetings/:name", (request, response) => {
//     response.send( "Hello, " + request.params.name );
// });

// -------------------- ROUTES

app.use('/api/v1', routes.auth);
app.use('/api/v1', routes.api);

// wrong api route
app.use('api/*', (req, res) => {
    res.status(404).json({ status: 404, error: 'Page not found. What happened?'})
});

// -------------------- SERVER START
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
