import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 py-14">
      <div className="w-11/12 lg:w-7/12 mx-auto bg-base-100 shadow-xl rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Contact <span className="text-primary">GameHub</span>
        </h1>

        <p className="text-center text-base-content/70 mb-10">
          Have questions, feedback, or suggestions? We’d love to hear from you!
          Fill out the form below and we’ll get back to you soon.
        </p>

        {/* CONTACT FORM */}
        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          <button className="btn btn-primary w-full">Send Message</button>
        </form>

        {/* CONTACT INFO */}
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">Or reach us at:</p>
          <p className="text-base-content/70 mt-1">support@gamehub.com</p>
          <p className="text-base-content/70">📞 +880 1711-234-671</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
