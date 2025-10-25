import React, { memo } from "react";

const ProfileImage = memo(() => (
  <div
    className="relative group"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    {/* Gradient effects */}
    <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
      <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
    </div>

    {/* Image container */}
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
      <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40" />
      <img
        src="/Photo.png"
        alt="Profile"
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        loading="lazy"
      />
    </div>
  </div>
));
export default ProfileImage; 
