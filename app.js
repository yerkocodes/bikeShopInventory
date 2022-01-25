const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const routeApi = require('./routes/api'); // Routes file

app.use(routeApi); // Routes file

//Listening server
app.listen(PORT, () => console.log(`Listening server on port ${PORT}`))
