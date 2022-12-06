//Required;
require('./Src/Config/Config');
const express = require('express');
const App = express();
const cors = require('cors');
const formData = require('./Src/Routes/formRoute');


//Middleware;
App.use(express.json());
App.use(cors({ origin: "https://dad-form-frontend.vercel.app"}))



//Controller;
App.use('/',formData);



//Port Listing;
const PORT = process.env.PORT || 4000;
App.listen(PORT, () => {
    console.log('Port is Running on ' + PORT);
});