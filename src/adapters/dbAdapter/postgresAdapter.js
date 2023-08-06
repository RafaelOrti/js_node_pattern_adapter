const { Pool } = require('pg');
const logger = require('../utils/logger');

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const PostgresAdapter = {
  query: async (text, params) => {
    try {
      const start = Date.now();
      const result = await pool.query(text, params);
      const duration = Date.now() - start;
      logger.info(`Query executed in ${duration}ms: ${text}`);
      return result;
    } catch (error) {
      logger.error('Error executing query', error);
      throw error;
    }
  },
};

module.exports = PostgresAdapter;
