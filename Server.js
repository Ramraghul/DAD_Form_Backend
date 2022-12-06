//Required;
require('./Src/Config/Config');
const express = require('express');
const App = express();
const cors = require('cors');
const formData = require('./Src/Routes/formRoute');


//Middleware;
App.use(express.json());
App.use(cors({ origin: "http://localhost:3000"}))



//Controller;
App.use('/',formData);



//Port Listing;
const PORT = 4000;
App.listen(PORT, () => {
    console.log('Port is Running on ' + PORT);
});