import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProviter";
import Loding from "../Components/Loding";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { suser, loding, updateUserProfile, setUser, setLoding, auth } =
    use(AuthContext);

  //   console.log(suser);
  const [displayName, setName] = useState(suser?.displayName);
  const [photoURL, setPhotoURL] = useState(suser?.photoURL);
  useEffect(() => {}, [suser]);
  if (loding) {
    return <Loding></Loding>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then(() => {
        // Profile updated!
        // ...
        setUser({ ...suser, displayName, photoURL });
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <title>Game-Hub:Update Profile</title>
      <h2 className="text-3xl font-bold mb-4">Update Profile</h2>
      <form onSubmit={handleUpdate} className="flex flex-col gap-4 w-80">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
          className="input"
        />
        <input
          onChange={(e) => setPhotoURL(e.target.value)}
          type="text"
          placeholder="Photo URL"
          className="input"
        />
        <button className="btn btn-primary">Update Information</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
