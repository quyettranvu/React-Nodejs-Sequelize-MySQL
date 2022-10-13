import dbConfig from '../config/dbConfig.js';

import {Sequelize,DataTypes} from 'sequelize';

import Products from './productModel.js';
import Reviews from './reviewModel.js';

//Create model with help of Sequelize
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        //operatorsAliases: false,
        operatorsAliases: 0,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

//Connect to DB
sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

//Initialisation
const db={}

db.Sequelize=Sequelize;
db.sequelize=sequelize;

//Create components of db and pass values to them
db.products=Products(sequelize, DataTypes);
db.reviews=Reviews(sequelize, DataTypes);

//If we set force true it will force recreate every elements in database
db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


export default db;