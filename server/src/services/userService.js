import { poolRequest,sql } from "../utils/dbConnect.js";

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

export const findByCredentialsService = async (username, password) => {
    
}