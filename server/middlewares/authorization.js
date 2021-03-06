const {Task} = require('../models')

function authorization(req, res, next) {
    Task.findByPk(req.params.id)
        .then(task => {
            if(req.user.id == task.UserId) {
                console.log('task id cocok');
                next()
            } else {
                console.log('task id tidak cocok');
                res.status(401).json({msg: 'Not Authorized'})
            }
        })
        .catch(err => res.status(500).json({msg: 'Internal server error authorization'}))
}

module.exports = authorization