import { Router } from "express"
import { checkUser } from "../controllers/AuthController.ts";

const router: Router = Router()
router.post("/check-user",checkUser)

export default router