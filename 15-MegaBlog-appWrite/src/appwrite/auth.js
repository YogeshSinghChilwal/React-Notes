import conf from '../conf/conf.js'
import {Client, Account, ID} from 'appwrite'

//~ 3- creating a auth class


//^ code from appWrite docs
//& now we can also use this piece of code but we are creating our own class then using this class inside it, 
//& because in future if we try to change our auth(writing our own) then we have to only manipulate the code inside this class not the whole code or by doing this the front end dosen't know which auth or service we are using
/* 
import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const user = await account.create(
    ID.unique(), 
    'email@example.com', 
    'password'
);

*/

export class AuthService{
    client = new Client();      //* we are not setting Endpoint here because we want it to set up when some one create a object using this class else it's a waste of resourse
    account;        //* and because we didn't set up Client so we can't create accout write now

    constructor() {
        this.client.setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)

        this.account = new Account(this.client)
    }

    async creatAccount({email, password, name}){        //* now this is a wrapper funciton account.create by doning this in future if we wnat to change accoutn creation process then we only have to change code inside it not the whole code 
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if(userAccount){
                // call another method -> if user accout is created so we also logging him
                return this.login({email, password})

            }else{
                return userAccount
            }

        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrenUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }

        return null
    }

    async logout(){
        try{
            await this.account.deleteSessions()
        }catch(error){
            throw error
        }
    }

}

const authService = new AuthService();

export default authService;