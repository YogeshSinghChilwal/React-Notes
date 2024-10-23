import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Models, Query } from "appwrite";

// Define types for post creation and update
interface PostData {
    title: string;
    slug: string;
    content: string;
    featuredImage?: string;
    status: string;
    userId: string;
}

interface UpdatePostData {
    title?: string;
    content?: string;
    featuredImage?: string;
    status?: string;
}

interface Post {
    $id: string;
    title: string;
    content: string;
    featuredImage: string;
    status: string;
    // Add any other properties related to your post
  }

export class Service {
    client: Client;
    databases: Databases;
    bucket: Storage;

    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // Method to create a post
    async createPost({ title, slug, content, featuredImage, status, userId }: PostData): Promise<Models.Document | undefined> {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    // Method to update a post
    async updatePost(slug: string, { title, content, featuredImage, status }: UpdatePostData): Promise<Models.Document | undefined> {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    // Method to delete a post
    async deletePost(slug: string): Promise<boolean> {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    // Method to get a post
    async getPost(slug: string): Promise<Models.Document | Post > {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }
    }

    // Method to get posts with queries
    async getPosts(queries: Array<ReturnType<typeof Query.equal>> = [Query.equal("status", "active")]): Promise<false | Models.DocumentList<Models.Document> | { documents: Post[] }> {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    // File upload service
    async uploadFile(file: File): Promise<Models.File | false> {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    // Delete a file
    async deleteFile(fileId: string): Promise<boolean> {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    // Get file preview
    getFilePreview(fileId: string): URL {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service;
