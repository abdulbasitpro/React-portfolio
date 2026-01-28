import React from 'react';

const Loader = ({ size = 'large', theme = 'professional' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-12 h-12';
      case 'medium':
        return 'w-16 h-16';
      case 'large':
      default:
        return 'w-20 h-20';
    }
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'minimal':
        return {
          primary: 'text-gray-600 dark:text-gray-300',
          accent: 'text-blue-500 dark:text-blue-400',
          bg: 'bg-gray-100 dark:bg-gray-800',
          border: 'border-gray-200 dark:border-gray-700'
        };
      case 'modern':
        return {
          primary: 'text-purple-600 dark:text-purple-300',
          accent: 'text-purple-500 dark:text-purple-400',
          bg: 'bg-purple-50 dark:bg-purple-900/20',
          border: 'border-purple-200 dark:border-purple-700'
        };
      case 'corporate':
        return {
          primary: 'text-teal-600 dark:text-teal-300',
          accent: 'text-teal-500 dark:text-teal-400',
          bg: 'bg-teal-50 dark:bg-teal-900/20',
          border: 'border-teal-200 dark:border-teal-700'
        };
      case 'professional':
      default:
        return {
          primary: 'text-gray-800 dark:text-white',
          accent: 'text-teal-500 dark:text-teal-400',
          bg: 'bg-white dark:bg-gray-900',
          border: 'border-gray-200 dark:border-gray-700'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`fixed inset-0 ${themeClasses.bg} flex items-center justify-center z-50 transition-all duration-300`}>
      <div className="text-center max-w-md mx-auto px-6">
        {/* Main loader animation */}
        <div className={`${getSizeClasses()} mx-auto mb-6 relative`}>
          {/* Outer container */}
          <div className="absolute inset-0">
            <div className={`w-full h-full rounded-full ${themeClasses.border} border-2`}></div>
          </div>

          {/* Animated rings */}
          <div className="absolute inset-0 animate-spin">
            <div className={`w-full h-full rounded-full border-2 border-transparent ${themeClasses.accent} border-t-transparent`}></div>
          </div>

          <div className="absolute inset-2 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
            <div className={`w-full h-full rounded-full border-2 border-transparent ${themeClasses.accent} border-b-transparent`}></div>
          </div>

          {/* Center element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`w-4 h-4 ${themeClasses.accent} rounded-full animate-pulse`}></div>
          </div>
        </div>

        {/* Branding */}
        <div className="mb-6">
          <h2 className={`text-2xl font-bold ${themeClasses.primary} mb-2`}>
            Abdul Basit
          </h2>
          <p className={`${themeClasses.primary} opacity-70 text-sm`}>
            MERN Stack Developer
          </p>
        </div>

        {/* Animated text */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2">
            <span className={`font-medium ${themeClasses.primary}`}>
              Loading Portfolio
            </span>
            <div className="flex space-x-1">
              <div className={`w-1 h-1 ${themeClasses.accent} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
              <div className={`w-1 h-1 ${themeClasses.accent} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
              <div className={`w-1 h-1 ${themeClasses.accent} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${themeClasses.accent.replace('text-', 'from-')} to-indigo-500 animate-progress`}
            style={{
              animation: 'loadingProgress 2.5s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Status messages */}
        <div className={`text-xs ${themeClasses.primary} opacity-60 space-y-1`}>
          <p className="animate-fadeIn">Initializing components...</p>
          <p className="animate-fadeIn" style={{ animationDelay: '500ms' }}>Loading projects...</p>
          <p className="animate-fadeIn" style={{ animationDelay: '1000ms' }}>Preparing showcase...</p>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes loadingProgress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }

        @keyframes fadeIn {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .animate-progress {
          animation: loadingProgress 2.5s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;