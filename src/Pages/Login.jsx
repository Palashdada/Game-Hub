import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthProviter";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { setUser, loginWithEmail, singInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setemail] = useState("");

  const handelLogin = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    loginWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };
  const handelGoogleShingIn = () => {
    singInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <title>Game-Hub:Login</title>
      <form className="mx-auto" onSubmit={handelLogin}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setemail(e.target.value)}
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <Link state={{ email }} to={"/forgetpassword"}>
        <p>Forget Password?</p>
      </Link>
      <button
        onClick={handelGoogleShingIn}
        className="btn mt-5 bg-white text-black border-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
      <div>
        <p>
          don t have an account{" "}
          <Link className="font-bold" to={"/register"}>
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
