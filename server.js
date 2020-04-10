// -------------------- REQUIREMENTS
const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const routes = require('./routes');
// const cors = require('cors'); // may or may not need

// -------------------- MIDDLEWARE
// const corsOptions = {
//     origin: ["http://localhost:3000"],
//     methods: "GET, POST, PUT, DELETE", // only these methods are allowed
//     credentials: true, // allows session cookies to be sent back and forth between client and server
//     optionsSuccessStatus: 200 // only for legacy browsers as they fail if you send 204 back  
// };

// app.use(cors(corsOptions));

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

// app.use(session({
//     store: new MongoStore({
//         url: process.env.MONGODB_URI || 'mongodb://localhost:27017/creator-forum',
//     }),
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUnitialized: false,
//     cookie: {
//         maxAge: 1209600000, // 1000 * 60 * 60 * 24 * 7 * 2 => 2 weeks
//     },
// }));

// -------------------- ROUTES
app.use("/api/v1", routes.api);

// wrong api route
app.use('api/*', (req, res) => {
    res.status(404).json({ status: 404, error: 'Page not found. What happened?'})
});

// -------------------- SERVER START
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
