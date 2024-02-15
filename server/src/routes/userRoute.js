
import { Router } from "express";
import {  getAll, getAllUsers, loginUser, registerUser } from "../controllers/userController.js";
const router = Router();

router.get('/users/', getAll);
router.get('/users/all', getAllUsers);
router.post('/users/register', registerUser);
router.post('/users/auth/login', loginUser);
// router.delete('/users/profile/:id', getAll);
// router.put('/users/profile/:id', getAll);

export default router;


