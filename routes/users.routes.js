import { Router } from "express"
import { getUsers, getUser, postUser, putUser, deleteUser } from "../controllers/users.controllers.js"

const router = Router();

router.get("/users", getUsers); // get all users
router.get("/users/:id", getUser); // get user
router.post("/users", postUser); // create user
router.put("/users/:id", putUser); // update user
router.delete("/users/:id", deleteUser); // delete user

export default router;