const { expect } = require('chai');
const UserModel = require('../src/models/userModel');

describe('User Model', () => {
  // Prueba para verificar que la función createUser() crea un usuario correctamente
  it('should create a new user', () => {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
    };

    const newUser = UserModel.createUser(userData);

    expect(newUser).to.be.an('object');
    expect(newUser).to.have.property('id');
    expect(newUser.name).to.equal(userData.name);
    expect(newUser.email).to.equal(userData.email);
    expect(newUser.age).to.equal(userData.age);
  });

  // Prueba para verificar que la función getUserById() obtiene un usuario por su ID
  it('should get a user by ID', () => {
    const userId = 'user123';

    const user = UserModel.getUserById(userId);

    expect(user).to.be.an('object');
    expect(user).to.have.property('id', userId);
  });

  // Prueba para verificar que la función updateUser() actualiza los datos de un usuario
  it('should update a user', () => {
    const userId = 'user123';
    const updatedData = {
      name: 'Updated Name',
      email: 'updated.email@example.com',
      age: 35,
    };

    const updatedUser = UserModel.updateUser(userId, updatedData);

    expect(updatedUser).to.be.an('object');
    expect(updatedUser).to.have.property('id', userId);
    expect(updatedUser.name).to.equal(updatedData.name);
    expect(updatedUser.email).to.equal(updatedData.email);
    expect(updatedUser.age).to.equal(updatedData.age);
  });

  // Prueba para verificar que la función deleteUser() elimina un usuario
  it('should delete a user', () => {
    const userId = 'user123';

    const deletedUser = UserModel.deleteUser(userId);

    expect(deletedUser).to.be.an('object');
    expect(deletedUser).to.have.property('id', userId);
  });
});
