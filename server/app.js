let express = require('express');
let app = express();
let sequelize = require('./db')

let log = require('./controllers/logController')
let user = require('./controllers/userController')

sequelize.sync()
//use force:true to drop all tables
// sequelize.sync({force:true})

app.use(express.json())

app.use('/log', log)
app.use('/user', user)

//Leave at the bottom
app.listen(3000, function(){
    console.log('App is listening on port 3000');
})