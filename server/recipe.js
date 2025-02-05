//Express route that handles GET requests to get recipes from Edamam API based on queries from user

const express = require('express'); //imports express library
const axios = require('axios'); //imports axios library
const router = express.Router(); //creates a new router object

const APP_ID = 'b48d37e6'; //Edamam API application id
const APP_KEY = 'd2cbbdf1d3448bdf4ae88558529c6872'; //Edamam API application key

//handles asynchronous operations like HTTP requests
router.get('/:query', async (req, res) => {
    const query = req.params.query; //gets the query from the URL
    //error handle
    try {
        const apiURL =  `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        const response = await axios.get(apiURL); //makes a GET request to the Edamam API
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching recipes', error);
        res.status(500).json({error: 'Unable to fetch recipe details'})
}
});

module.exports = router; //exports the router object

