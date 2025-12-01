import React, { use } from "react";
import { AuthContext } from "../Context/AuthProviter";
import Loding from "../Components/Loding";
import { Link } from "react-router";

const Profile = () => {
  const { suser, loding } = use(AuthContext);

  if (loding) {
    return <Loding></Loding>;
  }

  return (
    <div>
      <title>Game-Hub:Profile</title>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">My Profile</h2>
        <img
          src={suser.photoURL}
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <p className="mb-2">Name: {suser.displayName}</p>
        <p className="mb-4">Email: {suser.email}</p>

        <Link to={"/updateprofile"}>
          <button className="btn btn-primary">Update Information</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
