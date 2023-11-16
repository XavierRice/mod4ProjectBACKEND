const db = require("../db/dbConfig");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (err) {
    return err;
  }
};

const getUser = async (user_id) => {
  try {
    const user = await db.one("SELECT * FROM users WHERE id=$1", user_id);
    return user;
  } catch (err) {
    return err;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users ( username, name, email, password, memebership, profilePic) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        user.username,
        user.name,
        user.email,
        user.password,
        user.membership,
        user.profilePic,
      ]
    )
     return newUser;
  } catch (err) {
    return err;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      id
    );
    return deletedUser;
  } catch (err) {
    return err;
  }
};

const updateUser = async (id, user) => {
  try {
    const updatedUser = await db.one(
      "UPDATE user SET username=$1, name=$2, email=$3, password=$4, membership=$5, profilePic=$6 RETURNING *",
      [
        user.username,
        user.name,
        user.email,
        user.password,
        user.membership,
        user.profilePic,
        id,
      ]
    )
     return updatedUser;
  } catch (err) {
    return err;
  }
};


module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}