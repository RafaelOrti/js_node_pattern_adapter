const mysql = require('mysql');
const util = require('util');
const logger = require('../utils/logger');

// Configuración de la conexión a la base de datos MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

// Promisify para poder utilizar async/await con las consultas
pool.query = util.promisify(pool.query);

const MySQLAdapter = {
  query: async (sql, values) => {
    try {
      const start = Date.now();
      const result = await pool.query(sql, values);
      const duration = Date.now() - start;
      logger.info(`Query executed in ${duration}ms: ${sql}`);
      return result;
    } catch (error) {
      logger.error('Error executing query', error);
      throw error;
    }
  },
};

module.exports = MySQLAdapter;
