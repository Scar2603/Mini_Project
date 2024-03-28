import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice'; // Import the logout action from your authSlice

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  return (
    <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
  );
};

export default LogoutButton;