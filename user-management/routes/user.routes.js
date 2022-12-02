const express = require("express");
const { getAllUsers, addUser, updateUser, deleteUser, getUserById } = require("../controller/user-controller");

const router = express.Router();

router.get("/", getAllUsers);

// adding/saving record routes goes here..
router.post("/", addUser);

// update users details route goes here
router.put("/:id", updateUser);

// delete user record routes here...
router.delete("/:id", deleteUser);

// get user by id route route here..
router.get("/:id", getUserById);


// export the router module
module.exports = router;