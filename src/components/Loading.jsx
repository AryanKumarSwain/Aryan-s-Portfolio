import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">

        {/* Spinner */}
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-400 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-slate-400 animate-spin animation-delay-200"></div>
        </div>

        {/* Text */}
        <p className="text-white text-lg font-medium tracking-wide animate-pulse">
          Loading...
        </p>

      </div>
    </div>
  );
};

export default Loading;