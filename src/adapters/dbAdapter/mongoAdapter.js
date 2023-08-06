const mongoose = require('mongoose');
const logger = require('../utils/logger');

// Configuración de la conexión a la base de datos MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Conexión exitosa a MongoDB');
  } catch (error) {
    logger.error('Error al conectar a MongoDB', error);
    throw error;
  }
};

const MongoAdapter = {
  connectToMongoDB,
};

module.exports = MongoAdapter;
