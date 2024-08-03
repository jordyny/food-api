//basic Express server that handles API requests related to recipes, with the routes defined in recipe.js
//imports and setup
const express = require('express'); //imports express library
const app = express(); //creates a new express application

//port configuration
const port = process.env.PORT || 5000; //sets the port for the server to listen for requests


const recipeRoutes = require('./recipe'); //imports the recipe.js file, which contains the route for handling recipe API reqs

//middleware
app.use(express.json()); //parses incoming requests with JSON payloads into JS objects
//routing
app.use('/api/recipe', recipeRoutes); //sets the route for recipe API requests

//server start
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

