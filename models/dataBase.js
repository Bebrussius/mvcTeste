const mysql = require('mysql2/promise');

class DataBase {
    static async connect() {
        if (global.connection && global.connection.state !== 'disconnected') {
            return global.connection;
        }

        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Ard_0-1-#',
            database: 'bdequipamentos',
        });

        console.log("Conectou-se com MySQL!");
        global.connection = connection;
        return connection;
    }

    static async query(sql) {
        const conn = await this.connect();
        const [rows] = await conn.query(sql);
        return rows;
    }
}

module.exports = DataBase;
