const express = require('express');
const app = express();

app.use(express.static(__dirname));


app.listen(8014, () => {
    console.log('Server started at http://localhost:8014');
  });