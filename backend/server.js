const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const routes = require('./routes');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes
app.use('/', routes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


