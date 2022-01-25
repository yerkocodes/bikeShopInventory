const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Todo ok');
});

//Listening server
app.listen(PORT, () => console.log(`Listening server on port ${PORT}`))
