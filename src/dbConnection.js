import Sequelize from 'sequelize';

//Setting up db Connection
const connection = new Sequelize('postgres://postgres:kegz@localhost:5432/bio');

//Checking for whether the connection hsa been established
const checkDbConnection = (req, res, next) => {
    connection.sync({
        logging:   console.log,
        force: true
    }).then(() => {
        console.log('connection has been established successfully')
    })
    .catch(err => {
        console.log('uneble to connect to the database', err)
    })
    next()
}

export default checkDbConnection
