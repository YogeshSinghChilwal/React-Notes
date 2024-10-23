import conf from '../conf/conf';
import { Client, Account, ID, Models } from "appwrite";

// Define the parameter types for the methods
interface AuthCredentials {
    email: string;
    password: string;
    name?: string;  // Optional, since login doesn't use name
}

export class AuthService {
    client: Client;
    account: Account;

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // Method to create an account
    async createAccount({ email, password, name }: AuthCredentials): Promise<Models.Session | Models.User<{}>> {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name || '');
            if (userAccount) {
                // Call login if account is created
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // Method to log in
    async login({ email, password }: AuthCredentials): Promise<Models.Session> {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // Method to get the current user
    async getCurrentUser(): Promise<Models.User<{}> | null> {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    // Method to log out
    async logout(): Promise<void> {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;
