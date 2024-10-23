import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import { AppDispatch } from './store/store'; // Assuming this is defined in your Redux store

// You can create an interface for the structure of userData if you have its shape defined
interface UserData {
  id: string;
  email: string;
  // Add other fields of the userData if applicable
}

function App() {
  const [loading, setLoading] = useState<boolean>(true); // Type the loading state
  const dispatch = useDispatch<AppDispatch>(); // Ensure dispatch is typed correctly for Redux actions

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData: UserData | null | any) => { // Define the type of userData
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]); // Include dispatch as a dependency

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
