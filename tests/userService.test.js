const { expect } = require('chai');
const sinon = require('sinon');
const UserService = require('../src/services/userService');
const UserModel = require('../src/models/userModel');

describe('User Service', () => {
  // Prueba para verificar que la función createUser() crea un usuario correctamente
  it('should create a new user', () => {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
    };

    const createUserStub = sinon.stub(UserModel, 'createUser').returns(userData);

    const newUser = UserService.createUser(userData);

    expect(newUser).to.be.an('object');
    expect(newUser.name).to.equal(userData.name);
    expect(newUser.email).to.equal(userData.email);
    expect(newUser.age).to.equal(userData.age);

    createUserStub.restore();
  });

  // Prueba para verificar que la función getUserById() obtiene un usuario por su ID
  it('should get a user by ID', () => {
    const userId = 'user123';
    const userData = {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
    };

    const getUserByIdStub = sinon.stub(UserModel, 'getUserById').returns(userData);

    const user = UserService.getUserById(userId);

    expect(user).to.be.an('object');
    expect(user.id).to.equal(userId);
    expect(user.name).to.equal(userData.name);
    expect(user.email).to.equal(userData.email);
    expect(user.age).to.equal(userData.age);

    getUserByIdStub.restore();
  });

  // Prueba para verificar que la función updateUser() actualiza los datos de un usuario
  it('should update a user', () => {
    const userId = 'user123';
    const updatedData = {
      name: 'Updated Name',
      email: 'updated.email@example.com',
      age: 35,
    };

    const updateUserStub = sinon.stub(UserModel, 'updateUser').returns(updatedData);

    const updatedUser = UserService.updateUser(userId, updatedData);

    expect(updatedUser).to.be.an('object');
    expect(updatedUser.id).to.equal(userId);
    expect(updatedUser.name).to.equal(updatedData.name);
    expect(updatedUser.email).to.equal(updatedData.email);
    expect(updatedUser.age).to.equal(updatedData.age);

    updateUserStub.restore();
  });

  // Prueba para verificar que la función deleteUser() elimina un usuario
  it('should delete a user', () => {
    const userId = 'user123';
    const userData = {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
    };

    const deleteUserStub = sinon.stub(UserModel, 'deleteUser').returns(userData);

    const deletedUser = UserService.deleteUser(userId);

    expect(deletedUser).to.be.an('object');
    expect(deletedUser.id).to.equal(userId);
    expect(deletedUser.name).to.equal(userData.name);
    expect(deletedUser.email).to.equal(userData.email);
    expect(deletedUser.age).to.equal(userData.age);

    deleteUserStub.restore();
  });
});
