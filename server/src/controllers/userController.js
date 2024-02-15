import express from "express"
import bcrypt from 'bcrypt'
import { v4 } from 'uuid';
import { sql } from "../utils/dbConnect.js"
import { addUserService, findByCredentialsService, getAllUsersService } from "../services/userService.js";
import { notAuthorized, sendCreated, sendServerError } from "../helper/helperFunction.js";
import { userLoginValidator, validateRegisterUser } from "../validators/userValidator.js";


export const getAll =async (req, res) => {
    const users= await sql.query(`select * tbl_user `)
    console.log(users.recordset);
}

export const registerUser = async (req, res) => {

    const {username, password, email} = req.body;
    console.log("body",req.body)


    const {error} = validateRegisterUser({ username, email, password });//validate the body
    if(error) {
        return res.status(400).send(error.details[0].message);
    }else{
        try {

            const user_id = v4();

            //hash the password
            const salt = await bcrypt.genSalt(8);
            const hashedPassword = await bcrypt.hash(password, salt)

            //create new user
            const newUser = {
                user_id,
                username,
                password: hashedPassword,
                email
            }

            // console.log(newUser)

            //add user to the database
            const response = await addUserService(newUser)
            console.log(response)

            if(res.message){
                sendServerError(res, response.message)
            }else{
                sendCreated(res, 'User created successfully')
            }
            
        } catch (error) {
            sendServerError(res, error.message);
        }
    }

}


export const loginUser = async (req, res) => {
    const {username, password} = req.body
    const { error } = userLoginValidator({ username, password });
    if(error) {
        return res.status(400).send(error.details[0].message);

    }else{
        try {
            const userResponse = await findByCredentialsService({ username, password });
            if(userResponse.error) {
                notAuthorized(res, userResponse.error)
            }else{
                res.status(200).send(userResponse)
            }
            
        } catch (error) {
            sendServerError(res, error.message)
        }
    }
}


export const getAllUsers = async(req, res) => {
    try {
        const users = await getAllUsersService()

        if(users.length > 0) {
            res.status(200).json(users)
        }else{
            res.status(404).json({
                message: "No users found"
            })
        }
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

