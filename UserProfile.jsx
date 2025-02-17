

import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("User Profile Loaded:", user);
  }, [user]);

  if (!user) return <p className="text-center text-gray-600">User not logged in</p>;

  return (
    <div className="max-w-sm mx-auto bg-white p-5 shadow-md rounded-md mt-5">
      <h2 className="text-2xl font-bold mb-2 text-gray-700">User Profile</h2>
      <p className="text-gray-600"><strong>Name:</strong> {user.name}</p>
      <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default UserProfile;

