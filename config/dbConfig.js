export default {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '13112000Nhatrang',
    DB:'react_node_sequelize_api',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}