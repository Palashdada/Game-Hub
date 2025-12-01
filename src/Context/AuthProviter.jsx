import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebass.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviter = ({ children }) => {
  const [loding, setLoding] = useState(true);
  const [suser, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const singinWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithEmail = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singOut = () => {
    return signOut(auth);
  };
  const singInWithGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, provider);
  };
  const updateUserProfile = (displayName, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (cUser) => {
      setUser(cUser);
      setLoding(false);
      return () => {
        unSub();
      };
    });
  }, []);

  const value = {
    suser,
    singinWithEmail,
    setUser,
    loginWithEmail,
    singOut,
    singInWithGoogle,
    loding,
    updateUserProfile,
    setLoding,
    auth,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProviter;
