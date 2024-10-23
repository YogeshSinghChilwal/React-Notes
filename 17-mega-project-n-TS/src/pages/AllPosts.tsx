import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

interface Post {
  $id: string;
  title: string;
  content: string;
  featuredImage: string;
  status: string;
  // Add any other properties related to your post
}

const AllPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts: { documents: Post[] } ) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
