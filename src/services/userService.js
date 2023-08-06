const UserModel = require('../models/userModel');
const logger = require('../utils/logger');

const UserService = {
  createUser: (userData) => {
    try {
      const newUser = UserModel.createUser(userData);
      logger.info(`Nuevo usuario creado: ${newUser.name} (${newUser.email})`);
      return newUser;
    } catch (error) {
      logger.error('Error al crear un usuario', error);
      throw new Error('No se pudo crear el usuario');
    }
  },

  getUserById: (userId) => {
    try {
      const user = UserModel.getUserById(userId);
      if (!user) {
        logger.warn(`Usuario con ID ${userId} no encontrado`);
      }
      return user;
    } catch (error) {
      logger.error('Error al obtener el usuario por ID', error);
      throw new Error('No se pudo obtener el usuario');
    }
  },

  updateUser: (userId, updatedData) => {
    try {
      const updatedUser = UserModel.updateUser(userId, updatedData);
      if (!updatedUser) {
        logger.warn(`Usuario con ID ${userId} no encontrado`);
      } else {
        logger.info(`Usuario con ID ${userId} actualizado`);
      }
      return updatedUser;
    } catch (error) {
      logger.error('Error al actualizar el usuario', error);
      throw new Error('No se pudo actualizar el usuario');
    }
  },

  deleteUser: (userId) => {
    try {
      const deletedUser = UserModel.deleteUser(userId);
      if (!deletedUser) {
        logger.warn(`Usuario con ID ${userId} no encontrado`);
      } else {
        logger.info(`Usuario con ID ${userId} eliminado`);
      }
      return deletedUser;
    } catch (error) {
      logger.error('Error al eliminar el usuario', error);
      throw new Error('No se pudo eliminar el usuario');
    }
  },
};

module.exports = UserService;
