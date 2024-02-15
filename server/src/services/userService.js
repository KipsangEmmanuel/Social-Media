import { poolRequest,sql } from "../utils/dbConnect.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()


export const addUserService = async (newUser) => {
    try {
        const result = await poolRequest()
            .input('user_id', sql.VarChar, newUser.user_id)
            .input('Username', sql.VarChar, newUser.Username)
            .input('Password', sql.VarChar, newUser.Password)
            .input('Email', sql.VarChar, newUser.Email)
            .input('TagName', sql.VarChar, newUser.TagName)
            .input('Location', sql.VarChar, newUser.Location)
            .query('INSERT INTO tbl_user (user_id, Username, Password, Email, TagName, location) VALUES (@user_id, @Username, @Password, @Email, @TagName, @Location)');
        
        console.log(result.recordset);

        return result;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const findByCredentialsService = async (user) => {
    try {
        const userFoundResponse = await poolRequest()
            .input('username', sql.VarChar, user.username)
            .query('SELECT * FROM tbl_user WHERE Username = @username');

        // Compare the password from the body and the one in the db
        if (userFoundResponse.recordset[0]) {
            if (await bcrypt.compare(user.password, userFoundResponse.recordset[0].Password)) {

                let token = jwt.sign(
                    {
                        id: userFoundResponse.recordset[0].UserID,
                        username: userFoundResponse.recordset[0].Username,
                        email: userFoundResponse.recordset[0].Email
                    },
                    process.env.JWT_SECRET, { expiresIn: "2h"}
                );

                const { Password, ...userInfo } = userFoundResponse.recordset[0];
                return { user: userInfo, token: `JWT ${token}` };

            } else {
                return { error: 'Invalid Credentials' };
            }
        } else {
            return { error: 'Invalid Credentials' };
        }
        
    } catch (error) {
        return error;
    }
};


export const getAllUsersService = async () => {
    try {

        const query = 'SELECT * FROM tbl_user';
        const result = await poolRequest().query(query);

        return result.recordset;
        
    } catch (error) {
        throw error;
    }
}

export const deleteUserService = async(user_id) => {
    try {
        const query = `DELETE FROM tbl_user WHERE user_id = @user_id`;
        // console.log('this is the query', query);
        const result = await poolRequest()
                .input('user_id', sql.VarChar, user_id)
                .query(query)

        if(result.rowsAffected[0] === 0) {
            throw new Error('User not found')
        }

        return result;
        
    } catch (error) {
        throw error
        
    }
}


export const updateUserService = async (user_id, updatedValues) => {
    try {
        const { username, email, password } = updatedValues;
        
        const query = `
            UPDATE tbl_user 
            SET username = @username, email = @email, password = @password 
            WHERE user_id = @user_id`;

        const result = await poolRequest()
            .input('user_id', sql.VarChar, user_id)
            .input('username', sql.VarChar, username)
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .query(query);

        if (result.rowsAffected[0] === 0) {
            throw new Error('User not found');
        }

        return result;
    } catch (error) {
        throw error;
    }
};


export const getUserByIdService = async (user_id) => {
    try {
        const query = `SELECT * FROM tbl_user WHERE user_id = @user_id`;
        const result = await poolRequest()
            .input('user_id', sql.VarChar, user_id)
            .query(query);

        if (result.recordset.length === 0) {
            throw new Error('User not found');
        }

        return result.recordset[0];
    } catch (error) {
        throw error;
    }
};
