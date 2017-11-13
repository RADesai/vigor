const path = require('path');

module.exports = function (app, express) {
    // const router = express.Router();
    //endpoints and routes

    // app.use('/api', router);


    app.get('/*', (req, res) => {
        console.log("app.get('/*',");
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}