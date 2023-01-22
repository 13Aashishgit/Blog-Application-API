import  Express  from "express";
import { getAllUser, login, signup } from "../controllers/user-controller";


const router = Express.Router();

router.get("/", getAllUser);
router.post("/signup",signup)
router.post("/login",login)
export default router;