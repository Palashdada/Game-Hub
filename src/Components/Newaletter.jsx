import React, { useState } from "react";
import { toast } from "react-toastify";

const Newaletter = () => {
  const [email, setEmail] = useState("");
  const handelSubscribe = (e) => {
    e.preventDefault();

    if (email) {
      return toast.success("Subscribed successfully");
    }
  };
  return (
    <div>
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Subscribe to our Newsletter
        </h2>
        <p className="mb-6 text-gray-600 max-w-md mx-auto">
          Get the latest updates and news about your favorite games straight to
          your inbox.
        </p>
        <form
          onSubmit={handelSubscribe}
          className="flex justify-center gap-3 flex-wrap"
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            value={email}
            className="px-4 py-3 border border-gray-300 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="btn btn-primary px-8 py-3 text-white font-semibold rounded-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newaletter;
