const express = require('express');
const app = express();
const port = 3000;
const router = require('./router/simpleRouter');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/v1', router);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));