import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-row">
        <p className="py-2">{user.email}</p>
        <img width="55px" className=" rounded-3xl px-2" src={user.picture} alt={user.name} />
        
      </div>
    )
  );
};

export default Profile;