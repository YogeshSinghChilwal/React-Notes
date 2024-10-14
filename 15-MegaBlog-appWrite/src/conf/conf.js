//~ 2- creating config file to export .env 
const conf = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL) ,     //* we are doing this because importing env every time can couse error - my be they didn't load up or in other format
    appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID )

}

export default conf


//^ if we create our project using create
//console.log(process.env.REACT_APP_APPWRITE_URL)   //* ReferenceError: process is not defined 
  
//^ for vite + react
//console.log(import.meta.env.VITE_APPWRITE_URL);