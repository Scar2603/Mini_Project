import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { user, loginWithRedirect,logout,isAuthenticated } = useAuth0();
  console.log(user);

  return (
    isAuthenticated ? <button onClick={() => logout()} className='btn btn-primary'>Logout</button> : <button onClick={() => loginWithRedirect()} className='btn btn-primary'>Login</button>

  )
};

export default LoginButton;