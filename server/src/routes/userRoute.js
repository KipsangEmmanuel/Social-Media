
import { Router } from "express";
import {  getAll, registerUser } from "../controllers/userController.js";
const router = Router();

router.get('/users/all', getAll);
router.post('/users/register', registerUser);
// router.post('/users/auth/login', loginUser);
// router.delete('/users/profile/:id', getAll);
// router.put('/users/profile/:id', getAll);

export default router;


