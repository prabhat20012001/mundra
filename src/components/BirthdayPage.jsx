import React from 'react';
import khuswantPic from "../assets/Khuswant.jpg"; // Path is relative to `src/components/`
import { FaGift, FaBirthdayCake } from 'react-icons/fa'; // FaGift and FaBirthdayCake are correct imports

function BirthdayPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 animate-gradient-x relative">
      {/* Card Section */}
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-lg transform transition duration-500 hover:scale-105">
        
        {/* Heart-shaped Image Container */}
        <div className="relative flex justify-center mb-4">
          <div className="heart-shape relative h-40 w-40 overflow-hidden">
            <img
              src={khuswantPic} // Khuswant Sir's picture
              alt="Khuswant Sir"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-blue-700 mb-2 animate-pulse">Happy Birthday, Khuswant Sir!</h1>
        <p className="text-lg text-gray-700 mb-4">
          May your day be as amazing and joyful as you make everyone around you feel. 🎉 Here's to another year of inspiration, fun, and great memories!
        </p>

        {/* Fun Elements */}
        <div className="mt-6 flex justify-center space-x-6">
          <FaBirthdayCake className="text-6xl text-pink-500 bounce" />
          <FaGift className="text-6xl text-purple-500 bounce" />
        </div>
      </div>

      {/* Confetti Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="confetti w-4 h-4 bg-red-400 rounded-full animate-fall"></div>
        <div className="confetti w-4 h-4 bg-blue-400 rounded-full animate-fall delay-200"></div>
        <div className="confetti w-4 h-4 bg-green-400 rounded-full animate-fall delay-400"></div>
        <div className="confetti w-4 h-4 bg-yellow-400 rounded-full animate-fall delay-600"></div>
        <div className="confetti w-4 h-4 bg-pink-400 rounded-full animate-fall delay-800"></div>
      </div>

   
    </div>
  );
}

export default BirthdayPage;
