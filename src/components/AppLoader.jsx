import React, { useState, useEffect } from 'react';

const AppLoader = ({ children, loading = true, delay = 1000 }) => {
  const [showLoader, setShowLoader] = useState(loading);

  useEffect(() => {
    if (loading) {
      setShowLoader(true);
    } else {
      // Delay hiding the loader to create a smooth transition
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 300); // 300ms fade-out duration

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (showLoader) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center max-w-md mx-auto px-6">
          {/* Main loader animation with profile image */}
          <div className="w-24 h-24 mx-auto mb-6 relative">
            {/* Outer animated ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-teal-500 dark:border-t-teal-400 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>

            {/* Middle animated ring */}
            <div className="absolute inset-2 border-4 border-transparent border-b-teal-500 dark:border-b-teal-400 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>

            {/* Inner ring with profile image */}
            <div className="absolute inset-4 rounded-full overflow-hidden bg-white dark:bg-gray-800 border-2 border-teal-100 dark:border-gray-700 flex items-center justify-center">
              <img
                src="/images/Screenshot 2024-11-17 154953.png"
                alt="Abdul Basit"
                className="w-full h-full object-cover animate-pulse"
                style={{ animationDuration: '2s' }}
              />
            </div>
          </div>

          {/* Professional branding */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 tracking-tight">
              Abdul Basit
            </h2>
            <p className="text-lg text-teal-600 dark:text-teal-400 font-medium mb-1">
              MERN Stack Developer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 opacity-80">
              Crafting Digital Experiences
            </p>
          </div>

          {/* Animated loading text */}
          <div className="mb-6">
            <div className="inline-flex items-center space-x-3">
              <span className="font-semibold text-gray-700 dark:text-gray-300 text-lg">
                Loading Portfolio
              </span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>

          {/* Sophisticated progress indicator */}
          <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 animate-progress"
              style={{
                animation: 'loadingProgress 2s ease-in-out infinite'
              }}
            ></div>
          </div>

          {/* Subtle status indicators */}
          <div className="flex justify-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="animate-pulse">Initializing</span>
            <span className="animate-pulse" style={{ animationDelay: '500ms' }}>Loading</span>
            <span className="animate-pulse" style={{ animationDelay: '1000ms' }}>Ready</span>
          </div>
        </div>

        {/* Enhanced CSS animations */}
        <style jsx>{`
          @keyframes loadingProgress {
            0% {
              width: 0%;
              box-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
            }
            50% {
              width: 70%;
              box-shadow: 0 0 20px rgba(20, 184, 166, 0.8);
            }
            100% {
              width: 100%;
              box-shadow: 0 0 15px rgba(99, 102, 241, 0.6);
            }
          }

          .animate-progress {
            animation: loadingProgress 2s ease-in-out infinite;
          }

          /* Enhanced pulse animation */
          .animate-pulse {
            animation: enhancedPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          @keyframes enhancedPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
          }
        `}</style>
      </div>
    );
  }

  return children;
};

export default AppLoader;