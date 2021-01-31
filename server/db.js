const Sequelize = require('sequelize');
const sequelize = new Sequelize('workoutLogWD70B', 'postgres', '159864', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function () {
        console.log('Connected to workoutLogWD70B in postgres database ');
    },
    function(err){
        console.log(err);
    }
);
module.exports = sequelize;