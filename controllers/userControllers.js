//DEPENDENCIES
const express = require("express");
const users = express.Router();
const notesController = require('./notesController')
users.use('/:user_id/notes/', notesController)

//QUERIES
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../queries/users");

//VALIDATIONS
const {
  checkBoolean,
  checkPassword,
  checkUrl,
  checkUserName,
  checkEmail,
} = require("../validations/userValidations");


//ROUTES:

//Index:
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  console.log(allUsers)
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//SHOW
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "no user found" });
  }
});

//CREATE
users.post(
  "/",
  async (req, res) => {
    try {
      const user = await createUser(req.body);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: "posting error" });
    }
  }
);

//UPDATE
users.put(
  "/:id",
  checkBoolean,
  checkEmail,
  checkUserName,
  async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await updateUser(id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(404).json({ error: "cant do it partner" });
    }
  }
);

//DELETE
users.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    const deletedUser = await deleteUser(id)
    if(deleteUser.id){
        res.status(200).json(deletedUser)
    } else {
        res.status(404).json({error:"user not found"})
    }
})

module.exports = users;
