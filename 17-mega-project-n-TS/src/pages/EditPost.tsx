import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

interface Post {
  $id: string;
  title: string;
  content: string;
  featuredImage: string;
  status: string;
  // Add any other properties related to your post
}

const EditPost: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post: Post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  return post ? (
    <div className='py-8'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
