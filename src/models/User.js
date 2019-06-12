import connection from '.dbConnection/dBc'
const User = connection.define('user',{
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    }
},
{
//options    
})