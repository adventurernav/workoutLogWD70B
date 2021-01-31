const router = require('express').Router(); 
const User = require('../db').import('../models/user');

/**
 * User Signup
 */
router.post('/create', (req, res)=>{
User.create({
    username: req.body.user.username,
    passwordhash: req.body.user.password
})
.then(
    res.send('User created')
)
})



module.exports = router; 