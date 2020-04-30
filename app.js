const express = require('express');
const stripe = require('stripe')('sk_test_HzcTRfzOcWO6tzm4DqtXnPsc00hSDw0rwO');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

//Server scripts
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);

});