import React, { use } from "react";
import { Link, Links, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProviter";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { singinWithEmail, setUser, singInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    const regEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!regEx.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
    }

    singinWithEmail(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName,
          photoURL,
        })
          .then(() => {
            setUser({ ...user, displayName, photoURL });
            navigate("/");
          })
          .catch(() => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage, errorCode);
      });
  };
  const handelGoogleShingIn = () => {
    singInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <title>Game-Hub:Register</title>
      <form onSubmit={handelSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-4xl mx-auto">Register</legend>

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
            required
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">photoURL</label>
          <input
            type="text"
            name="photoURL"
            className="input"
            placeholder="photoURL"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </form>
      <div>
        <button
          onClick={handelGoogleShingIn}
          className="btn w-full bg-white text-black border-[#e5e5e5]"
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
        <p className="mx-auto  ">
          already have an account?{" "}
          <Link className=" font-bold " to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
