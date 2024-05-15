import { Router } from "express";
import { addPhoneNumber } from "../controller.js";
const router = Router()

router.route('/add-phone').post(addPhoneNumber)






export default router;