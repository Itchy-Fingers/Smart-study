import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center p-6"
      style={{
        backgroundImage: "url('/assets/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 bg-opacity-80 w-full h-full absolute top-0 left-0 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          SmartStudy
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium mb-2">
          "Learn Smart, Grow Sharp"
        </p>

        <p className="max-w-xl text-gray-600 mb-6">
          SmartStudy is your all-in-one academic companion — organize your study
          materials, collaborate in forums, manage your schedule, and access
          tailored resources to enhance your learning experience. It is competency based allowing all levels to learn easily.
        </p>

        <div className="space-x-4">
          <Link to="./loginForm">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
          <Link to="./signupForm">
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;