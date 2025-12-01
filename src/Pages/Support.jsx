import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen bg-base-200 py-14">
      <div className="w-11/12 lg:w-8/12 mx-auto bg-base-100 shadow-xl rounded-xl p-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-4">
          GameHub <span className="text-primary">Support</span>
        </h1>

        <p className="text-center text-base-content/70 mb-10">
          Need help using GameHub? Browse common issues below or contact us
          directly. We're here to make your gaming experience smooth and
          enjoyable!
        </p>

        {/* FAQ SECTION */}
        <div className="space-y-5 mb-10">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-medium">
              How do I create an account?
            </div>
            <div className="collapse-content">
              <p>
                Click on the Register button in the navigation bar and fill in
                your information to get started.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-medium">
              How do I update my profile?
            </div>
            <div className="collapse-content">
              <p>
                Go to your Profile page and click on the Edit option to update
                your information or photo.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-medium">
              Why can't I log in?
            </div>
            <div className="collapse-content">
              <p>
                Make sure your email and password are correct. If the problem
                continues, try resetting your password.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-medium">
              How do I report a broken game or link?
            </div>
            <div className="collapse-content">
              <p>
                Please fill out the support form below with details of the issue
                so we can fix it quickly.
              </p>
            </div>
          </div>
        </div>

        {/* SUPPORT FORM */}
        <h2 className="text-2xl font-semibold mb-6">Get Support</h2>

        <form className="space-y-6">
          <div>
            <label className="font-semibold">Your Name</label>
            <input
              type="text"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              className="input input-bordered w-full mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="font-semibold">Describe Your Issue</label>
            <textarea
              rows="5"
              className="textarea textarea-bordered w-full mt-1"
              placeholder="Write your issue or question..."
            ></textarea>
          </div>

          <button className="btn btn-primary w-full">Submit Request</button>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-10">
          <p className="text-lg font-semibold">Or reach us directly:</p>
          <p className="text-base-content/70 mt-1">support@gamehub.com</p>
          <p className="text-base-content/70">📞 +880 1711-234-671</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
