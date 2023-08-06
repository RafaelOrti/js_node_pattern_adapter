import express from 'express';
import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.json';
import { initMongoDB, initMySQL, initPostgreSQL } from './adapters/dbAdapters';
import UserService from './services/userService';
import logger from './utils/logger';

// Configuración de variables de entorno
dotenv.config();

// Inicialización de adaptadores de base de datos
if (process.env.DB_TYPE === 'mongodb') {
  initMongoDB(dbConfig.mongodb);
} else if (process.env.DB_TYPE === 'mysql') {
  initMySQL(dbConfig.mysql);
} else if (process.env.DB_TYPE === 'postgres') {
  initPostgreSQL(dbConfig.postgres);
} else {
  logger.error('Tipo de base de datos no soportado');
  process.exit(1);
}

const app = express();

// Middleware para parsear el body de las peticiones como JSON
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola, bienvenido a mi aplicación!');
});

// Rutas para usuarios
app.post('/users', (req, res) => {
  const newUser = UserService.createUser(req.body);
  res.json(newUser);
});

app.get('/users/:userId', (req, res) => {
  const user = UserService.getUserById(req.params.userId);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
});

app.put('/users/:userId', (req, res) => {
  const updatedUser = UserService.updateUser(req.params.userId, req.body);
  if (!updatedUser) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(updatedUser);
});

app.delete('/users/:userId', (req, res) => {
  const deletedUser = UserService.deleteUser(req.params.userId);
  if (!deletedUser) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(deletedUser);
});

// Inicio del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Aplicación escuchando en el puerto ${port}`);
});
