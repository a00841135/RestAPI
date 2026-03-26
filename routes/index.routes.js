import { Router } from "express"
import { getAPI, postAPI, getPolo, getPong, getAMONGUS } from "../controllers/index.controllers.js"

const router = Router();

router.get("/", getAPI);
router.post("/", postAPI);
router.get("/marco", getPolo);
router.get("/ping", getPong);
router.get("/a/b/c", getAMONGUS);

export default router;