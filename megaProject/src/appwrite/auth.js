import conf from '../conf/conf'

/* now we want client account and id from appwrite */

import {Client,Account,ID} from 'appwrite';


//now create new Client first

export class AuthService {
    client= new Client();
    account;
    //now for linking the end point and project id create the constructor method
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        //now add value to the account object
        this.account=new Account(this.client)
    }

    //now we have add account but we don't want dependencies 
    //so create one method
    //we need async and await here

    async createAccount ({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name);

            if (userAccount) {
                //call another method for login directly
                return this.login({email,password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        /* if any error comes so it should return null */
        return null;
    }
    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}


//creating one object for accessing it
const authService =new AuthService();


export default AuthService