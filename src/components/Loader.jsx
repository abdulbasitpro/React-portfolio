import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo/Brand Element */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-teal-200 dark:border-teal-900 rounded-full"></div>

            {/* Animated inner circle */}
            <div className="absolute inset-2 border-4 border-transparent border-t-teal-500 dark:border-t-teal-400 rounded-full animate-spin"></div>

            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-teal-500 dark:bg-teal-400 rounded-full"></div>
          </div>
        </div>

        {/* Text with typing effect */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          <span className="inline-block animate-pulse">Loading Portfolio...</span>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-indigo-500 animate-progress"
            style={{
              animation: 'progressAnimation 2s ease-in-out infinite alternate'
            }}
          ></div>
        </div>

        {/* Additional text */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
          Preparing your personalized experience
        </p>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes progressAnimation {
          0% { width: 20%; }
          100% { width: 80%; }
        }

        .animate-progress {
          animation: progressAnimation 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Loader;