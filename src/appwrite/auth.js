import conf from "../conf/conf.js";    
import { Client, Account, ID } from "appwrite";


class AuthService {
    client = new Client();

    // defining variable
    account;

    // so basically client and acc should be created when making an object that's why using constructor.    
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email}) {
        try {
            const userAccount = await account.createEmailToken(
                ID.unique(),
                email, 
            );
            const userId = sessionToken.userId;
            if (userAccount) {
                // call another method
                return this.login({userId, secret});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({userId, secret}) {
        try {
            return await this.account.account.createSession(
                userId,
                secret
            );
        } catch (error) {
            return error
        }
    }
    async getCurrentUser() {
        try {
            return await this.account;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
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


const authService = new AuthService();


// exporting object here.
export default authService