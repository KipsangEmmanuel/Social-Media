import { poolRequest } from "../utils/dbConnect.js";

export const addUserService = async (newUser) => {
    try {
        const  result = await poolRequest()
        .input('username', sql.VarChar, newUser.username)
        .input('password', sql.VarChar, newUser.password)
        .input('email', sql.VarChar, newUser.email)
        .query('INSERT INTO [User](username, password, email) VALUES (@username, @password, @email)')

        console.log(result.recordset);

        return result;
        
    } catch (error) {
        console.log(error)
        throw error;
    }

}

export const findByCredentialsService = async (username, password) => {
    
}