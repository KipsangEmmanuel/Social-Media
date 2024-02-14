import express from "express"
import { sql } from "../utils/dbConnect.js"
import { validateRegisterUser } from "../validators/userValidator.js";
import { addUserService } from "../services/userService.js";

export const getAll =async (req, res) => {
    const users= await sql.query(`select * [User] `)
    console.log(users.recordset);
}

export const registerUser = async (req, res) => {
    try {

        const { username, password, email } = req.body;
        const {error} = validateRegisterUser.validate(req.body);

        if (error) {
            return res.status(400).send({
                error: "password should be atleast 8 characters long with letters symbols and uppercase",
            })
        }

        //check if the user exist
        const userExist = await checkUserExists(email);
        if(userExist) {
            return res.status(409).json({
                error: "User already exist"
            })
        }

        const newUser = {
            username,
            email,
            password
        }
        const result = await addUserService(newUser);
        if (result) {
            returnres.status(201).json({
                message: "User registered successfully",
                user: newUser
            })
        }


        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: "Failed to register user!"
        })
        
    }
}



export const loginUser = (req, res) => {}

