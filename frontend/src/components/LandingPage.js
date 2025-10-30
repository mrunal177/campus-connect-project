import React from "react";

function LandingPage() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 px-8 text-center min-h-screen flex flex-col items-center justify-center">
      <p className="text-lg mb-8 max-w-2xl">
        A platform that helps students connect, collaborate, and grow through
        shared projects and ideas.
      </p>
      <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-100 transition">
        Get Started
      </button>
    </section>
  );
}

export default LandingPage;
