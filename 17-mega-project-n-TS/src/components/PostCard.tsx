import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

// Define the props interface
interface PostCardProps {
    $id: string; // The unique identifier for the post
    title: string; // The title of the post
    featuredImage: string; // The ID or URL of the featured image
}

const PostCard: React.FC<PostCardProps> = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img
                        src={appwriteService.getFilePreview(featuredImage).toString()}  //! Convert URL to string
                        alt={title}
                        className='rounded-xl'
                    />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
};

export default PostCard;
