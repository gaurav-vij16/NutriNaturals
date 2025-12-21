import { Router } from "express";
import { adminLogin , addAdmin } from "../Controllers/AdminControllers";

const router = Router();

router.post("/login", adminLogin);
router.post("/add", addAdmin);
export default router;