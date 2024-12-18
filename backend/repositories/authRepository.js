const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '../users.json');

// קריאת המשתמשים מהקובץ
const loadUsers = () => {
  try {
    const data = fs.readFileSync(usersFile, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// שמירת המשתמשים לקובץ
const saveUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), 'utf-8');
};

const getAllUsers = () => {
  return loadUsers();
};

const createUser = ({ username, password }) => {
  const users = loadUsers();
  if (users.find(user => user.username === username)) {
    throw new Error('Username already exists');
  }
  const newUser = { username, password }; // הוספת המשתמש החדש
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

const findUserByUsername = (username) => {
  const users = loadUsers();
  return users.find(user => user.username === username);
};

module.exports = {
  getAllUsers,
  createUser,
  findUserByUsername,
};
