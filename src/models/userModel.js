const users = [];

const UserModel = {
  createUser: (userData) => {
    const newUser = {
      id: generateUserId(),
      name: userData.name,
      email: userData.email,
      age: userData.age,
    };

    users.push(newUser);
    return newUser;
  },

  getUserById: (userId) => {
    return users.find((user) => user.id === userId);
  },

  updateUser: (userId, updatedData) => {
    const user = users.find((user) => user.id === userId);

    if (!user) {
      return null;
    }

    user.name = updatedData.name || user.name;
    user.email = updatedData.email || user.email;
    user.age = updatedData.age || user.age;

    return user;
  },

  deleteUser: (userId) => {
    const index = users.findIndex((user) => user.id === userId);

    if (index === -1) {
      return null;
    }

    return users.splice(index, 1)[0];
  },
};

function generateUserId() {
  // Simulación de generación de ID único para el usuario
  return Math.random().toString(36).substr(2, 9);
}

module.exports = UserModel;
