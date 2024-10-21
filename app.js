const express = require('express');
const cors = require('cors');
const routesV1 = require('./routes/v1');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', routesV1);

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` PORT: ${PORT} | ENV: ${env}`);
});
