'use server'
import Auth from '@/Schema/authSchema'
import { connectDB } from '@/Utils/mongoconnect' //Import database from utils
import { parseJS } from '@/Utils/Parse'

// Sign Up
export const signupAction = async (user) => {
    // console.log(user);
    try {
        await connectDB() //DB connected
        const newuser = await Auth.create(user) //Data from the users
        // console.log(newuser);
        return { "msg": "SignUp success" }
    } catch (error) { //If error throw the error
        throw new Error("Internal server error");
    }
}

//Login
export const loginAction = async (user) => {
    console.log(user); 
    await connectDB() //Db Connected
    const dbperson = await Auth.findOne({"email":user.email}) //Find person in database
    console.log(dbperson);
    if(!dbperson) throw new Error("Please signup first"); //If user not found

    else if (user.password != dbperson.password) throw new Error("Enter Correct Password"); //If password is wrong
    
    return{"msg":"Login Success"}
     //Do dbaction you want and return something
}

// Profile

export const profileAction = async (email) => {
    await connectDB() //DB connected
    // console.log(email);
    const dbuser = await Auth.findOne({email}) //Find user in DB to get profile
    // console.log(dbuser);

    if(!dbuser) throw new Error("Please Login First"); 
    return parseJS(dbuser)
}