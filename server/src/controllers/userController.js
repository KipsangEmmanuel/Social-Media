import express from "express"
import bcrypt from 'bcrypt'
import { v4 } from 'uuid';
import { sql } from "../utils/dbConnect.js"
import { addUserService, deleteUserService, findByCredentialsService, getAllUsersService, getUserByIdService, updateUserService } from "../services/userService.js";
import { notAuthorized, sendCreated, sendServerError } from "../helper/helperFunction.js";
import { userLoginValidator, validateRegisterUser } from "../validators/userValidator.js";


export const getAll =async (req, res) => {
    const users= await sql.query(`select * tbl_user `)
    console.log(users.recordset);
}

export const registerUser = async (req, res) => {
    const { Username, Password, Email, TagName, Location } = req.body;
    console.log("body", req.body);

    const { error } = validateRegisterUser({
        Username,
        Email,
        Password,
        TagName,
        Location,
    }); // validate the body
    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            const user_id = v4();

            // hash the password
            const salt = await bcrypt.genSalt(8);
            const hashedPassword = await bcrypt.hash(Password, salt);

            // create new user
            const newUser = {
                user_id,
                Username,
                Email,
                Password:hashedPassword,
                TagName,
                Location
            };

            // add user to the database
            const response = await addUserService(newUser);
            console.log(response);

            if (response && response.rowsAffected && response.rowsAffected.length > 0 && response.rowsAffected[0] > 0) {
                sendCreated(res, 'User created successfully');
            } else {
                sendServerError(res, 'Failed to create user');
            }
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
};




export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const { error } = userLoginValidator({ username, password });

    if (error) {
        return res.status(400).send(error.details[0].message);
    } else {
        try {
            const userResponse = await findByCredentialsService({ username, password });
            
            if (userResponse.error) {
                notAuthorized(res, userResponse.error);
            } else {
                res.status(200).send(userResponse);
            }
            
        } catch (error) {
            sendServerError(res, error.message);
        }
    }
};



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


export const deleteUserById = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        console.log('user id',user_id);
        await deleteUserService(user_id)

        return res.status(200).json({
            message: "User deleted successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
        
    }
}


export const updateUserById = async(req, res) => {
    try {
        const user_id = req.params.user_id;
        // console.log('user reached', user_id);
        const { username, email, password} = req.body;
        const updateValues = { username, email, password}
        await updateUserService(user_id, updateValues)

        return res.status(200).json({
            message: "User updated successfully!"
        })
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
        
    }
}


export const getUserById = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const user = await getUserByIdService(user_id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};



