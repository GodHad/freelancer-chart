const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
// Start the server
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
