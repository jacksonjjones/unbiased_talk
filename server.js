// Importing required dependencies
const express = require('express'); 
const path = require('path'); 

// Importing route handlers
const apiRoutes = require('./routes/apiRoutes'); 
const htmlRoutes = require('./routes/htmlRoutes'); 

// Creating an instance of Express application
const app = express();

// Setting the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming request bodies as JSON
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files such as HTML, CSS, and JavaScript
app.use(express.static(path.join(__dirname, 'public')));

// Mounting API routes at the '/api' path prefix
app.use('/api', apiRoutes);

// Mounting HTML routes at the root path
app.use('/', htmlRoutes);

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
