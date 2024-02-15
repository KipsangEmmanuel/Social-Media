import { poolRequest,sql } from "../utils/dbConnect.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()


export const addUserService = async (newUser) => {
    try {
        const  result = await poolRequest()
        .input('username', sql.VarChar, newUser.username)
        .input('user_id', sql.VarChar, newUser.user_id)
        .input('password', sql.VarChar, newUser.password)
        .input('email', sql.VarChar, newUser.email)
        .query('INSERT INTO tbl_user (user_id, username, password, email) VALUES ( @user_id, @username, @password, @email)')

        console.log(result.recordset);

        return result;
        
    } catch (error) {
        console.log(error)
        throw error;
    }

}

export const findByCredentialsService = async (user) => {
    try {
        const userFoundResponse = await poolRequest()
        .input('username', sql.VarChar, user.username)
        .query('SELECT * FROM tbl_user WHERE username = @username');

        //compare the password from the body and the one in the db
        if(userFoundResponse.recordset[0]) {
            if(await bcrypt.compare(user.password, userFoundResponse.recordset[0].password)){

                let token = jwt.sign(
                    {
                        id: userFoundResponse.recordset[0].id,
                        username: userFoundResponse.recordset[0].username,
                        email: userFoundResponse.recordset[0].email
                    },
                    process.env.JWT_SECRET, { expiresIn: "2h"}
                );

                const { password, ...user } = userFoundResponse.recordset[0];
                return {user, token: `JWT ${token}`};


            }else{
                return { error: 'Invalid Credentials'}
            }
        }else{
            return { error: 'Invalid Credentials' };
        }
        
    } catch (error) {
        return error
        
    }
    
}

export const getAllUsersService = async () => {
    try {

        const query = 'SELECT * FROM tbl_user';
        const result = await sql.query(query);

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
