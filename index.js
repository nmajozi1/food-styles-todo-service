const express = require('express');
const dbSetup = require('./db/db-setup');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoute = require('./src/routes/user.route');
const todosRoute = require('./src/routes/todos.route');

dbSetup();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(userRoute);
app.use(todosRoute);

app.listen(4000, () => {
    console.log('Listening on port 4000');
});