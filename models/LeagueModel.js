// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    name: String,
    type: String,
    teams: [
        {
            teamName: String
        }
    ]
});

const League = mongoose.model('League', leagueSchema);
module.exports = League;

// const leagueSchema = new Schema({
//   name: String,
//   type: String,
//   teams: [
//         {
//           teamName: String,
//           players: [
//               {
//                   playerName: String,
//                   gradeLevel: Number,
//                   emailAddress: String
//               }
//           ]
//         }
//     ],
//     locations: [
//         {
//             name: String,
//             address: String
//         }
//     ]
// });