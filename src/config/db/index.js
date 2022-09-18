// const { Client } = require('pg');
const { Sequelize } = require('sequelize');

// async function connect() {
//     const sequelize = new Sequelize('test', 'postgres', '2511', {
//         host: 'localhost',
//         dialect: 'postgres',
//     });

//     try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     } catch (error) {
//     console.error('Unable to connect to the database:', error);
//     };
    
// };

// module.exports = { connect };

module.exports = new Sequelize('courses', 'postgres', '2511', {
            host: 'localhost',
            dialect: 'postgres',
        });



















// try {
//     const client = new Client({
//         user: 'postgres',
//         host: 'localhost',
//         database: 'test',
//         password: '2511',
//         port: 5432,
//       });
    
//     client.connect();

//     client.query(`SELECT * FROM car`, (err, res) => {
//         if(!err) {
//             console.log(res.rows);
//             console.log('connect Sucsessfully!');
//         } else {
//             console.log(err.message);
//         }
//         client.end;
//     });
// } catch (error) {
//     console.log('connect Failure!');
// }