const path = require('path');

const mongoose = require('mongoose');
let db = 'mongodb://localhost/vigordb';

mongoose.connect(db, (err, res) => {
    if (err) {
        console.log('Failed to connect to ' + db, res);
    } else {
        console.log('Connected to ' + db);
    }
});

const Leagues = require('../models/LeagueModel.js');

module.exports = function (app, express) {
    const router = express.Router();

    app.use('/api', router);

    app.post('/api', (req, res) => res.json(
        { message: "/api : 'POST'" }
    ));

    app.get('/api/leagues', function(req, res) {
        Leagues.find((err, leagues) => {
            err ?
                res.send(err)
                : res.json(leagues);
        });
    });

    app.post('/api/leagues', (req, res) => {
        let league = new Leagues();
        league.name = 'Exon Basketball League';
        league.type = 'Pickup';
        league.teams = [
            {
                teamName: 'Ballers'
            },
            {
                teamName: 'Ringers'
            }
        ]
        league.save((err) => {
            err ?
                res.send(err)
                : res.json({
                    message: 'League created!'
                })
        });
    });

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}