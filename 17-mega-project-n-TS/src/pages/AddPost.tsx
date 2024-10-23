import React from 'react';
import { Container, PostForm } from '../components';

const AddPost: React.FC = () => {
  return (
    <div className='py-8'>
      <Container>
        <PostForm />
      </Container>
    </div>
  );
};

export default AddPost;
