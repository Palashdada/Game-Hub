import React from "react";

const Blog = () => {
  return (
    <section className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Latest Gaming News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-base-100 p-4 rounded-xl shadow hover:shadow-lg">
          <h3 className="font-bold mb-2">New FPS Title Released!</h3>
          <p className="text-sm text-base-content/70">
            Experience intense action and strategy with the latest FPS game on
            PC and console.
          </p>
        </div>
        <div className="bg-base-100 p-4 rounded-xl shadow hover:shadow-lg">
          <h3 className="font-bold mb-2">Battle Royale Championship</h3>
          <p className="text-sm text-base-content/70">
            Join players worldwide in the ultimate Battle Royale tournament.
          </p>
        </div>
        <div className="bg-base-100 p-4 rounded-xl shadow hover:shadow-lg">
          <h3 className="font-bold mb-2">RPG Game Updates</h3>
          <p className="text-sm text-base-content/70">
            Explore new worlds and features in the top-rated RPG games.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
