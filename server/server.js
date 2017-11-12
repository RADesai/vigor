const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());
app.options('*', cors());
app.delete('*', cors());

routes(app, express);

app.listen(port, () => console.log(`App running on port ${port}!`));