const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "yxr1qjk8fsr4d7ry",
    password: "cj91kolz39btxjwm",
    database: "dud2ysrumo8jpvo7"
});

module.exports = pool;
