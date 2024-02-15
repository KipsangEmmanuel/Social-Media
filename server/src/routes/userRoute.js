
import { Router } from "express";
import {  deleteUserById, getAll, getAllUsers, loginUser, registerUser, updateUserById } from "../controllers/userController.js";
const router = Router();

router.get('/users/', getAll);
router.get('/users/all', getAllUsers);
router.post('/users/register', registerUser);
router.post('/users/auth/login', loginUser);
router.delete('/users/:user_id', deleteUserById);
router.put('/users/:user_id', updateUserById);

export default router;


