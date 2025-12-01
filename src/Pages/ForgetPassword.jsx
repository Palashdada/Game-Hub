import React, { use, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Context/AuthProviter";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { auth } = use(AuthContext);

  const location = useLocation();
  const [email, setemail] = useState(location.state?.email || "");
  //   console.log(email);

  //
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast.success("Password reset link sent! Check your email.");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  return (
    <div>
      <title>Game-Hub-Reset Password</title>{" "}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Reset Password</h2>
        <form
          onSubmit={handleResetPassword}
          className="flex flex-col gap-4 w-80"
        >
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Email"
            className="input"
          />

          <button className="btn btn-primary">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
