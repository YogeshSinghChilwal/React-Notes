import React from 'react';
import { Login } from '../components'; // Assuming the component is named Login

function LoginPage() { // Changed the name of the component to avoid confusion with the imported component
  return (
    <div className='py-8'>
      <Login /> {/* Use the component directly */}
    </div>
  );
}

export default LoginPage;
