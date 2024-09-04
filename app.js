//Main Application Files natin commonly named app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 2031;

// Set view engine to EJS kaya ininstall natin ang EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files as Public para maaccess yung nilalaman nito nang other files
app.use(express.static(path.join(__dirname, 'public')));

// Taga-Imports nang mga routes
const indexRouter = require('./routes/index');
const servicesRouter = require('./routes/services');
const portfolioRouter = require('./routes/portfolio');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

// Gumamit tayo dito nang 5 routes based on the instruction
app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);
app.use('/portfolio', portfolioRouter);
app.use('/services', servicesRouter);

// ang 404 handler sa tingin ko taga-Handle siya nang mga unauthorized routes
app.use((req, res) => {
    res.status(404).render('404');
});

//If you successfully run this program you will get the http link.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
