import React, { createContext, useContext, useState, useCallback, } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success', duration = 4000) => {
    const id = Date.now();
    const newToast = { id, message, type, duration, isVisible: false };
    
    setToasts((prev) => [...prev, newToast]);
    
    // Trigger animation after a brief delay
    setTimeout(() => {
      setToasts((prev) => 
        prev.map((toast) => 
          toast.id === id ? { ...toast, isVisible: true } : toast
        )
      );
    }, 10);

    // Auto-remove toast
    setTimeout(() => {
      setToasts((prev) => 
        prev.map((toast) => 
          toast.id === id ? { ...toast, isVisible: false } : toast
        )
      );
      
      // Remove from DOM after animation
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => 
      prev.map((toast) => 
        toast.id === id ? { ...toast, isVisible: false } : toast
      )
    );
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  }, []);

  const getToastIcon = (type) => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getToastStyles = (type) => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-emerald-500 to-emerald-600 border-emerald-400';
      case 'error':
        return 'bg-gradient-to-r from-red-500 to-red-600 border-red-400';
      case 'warning':
        return 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-400';
      case 'info':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 border-blue-400';
      default:
        return 'bg-gradient-to-r from-gray-700 to-gray-800 border-gray-600';
    }
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              transform transition-all duration-300 ease-out pointer-events-auto
              ${toast.isVisible 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-full opacity-0 scale-95'
              }
              ${getToastStyles(toast.type)}
              border-l-4 rounded-lg shadow-lg hover:shadow-xl
              backdrop-blur-sm bg-opacity-95
              min-w-[300px] max-w-md
            `}
          >
            <div className="flex items-center p-4">
              {/* Icon */}
              <div className="flex-shrink-0 mr-3">
                <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  {getToastIcon(toast.type)}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white leading-5">
                  {toast.message}
                </p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => removeToast(toast.id)}
                className="flex-shrink-0 ml-4 rounded-full p-1 hover:bg-white hover:bg-opacity-20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Close notification"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="h-1 bg-black bg-opacity-20 rounded-b-lg overflow-hidden">
              <div 
                className="h-full bg-white bg-opacity-30 rounded-b-lg animate-shrink"
                style={{ 
                  animation: `shrink ${toast.duration}ms linear forwards`,
                  animationDelay: '100ms'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom CSS for progress bar animation */}
      <style jsx>{`
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        .animate-shrink {
          animation: shrink var(--duration) linear forwards;
        }
      `}</style>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Demo component to showcase the toast functionality
const ToastDemo = () => {
  const { showToast } = useToast();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
          Enhanced Toast Component Demo
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4">
          <h2 className="text-xl font-semibold text-slate-700 mb-4">Try Different Toast Types:</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => showToast('Operation completed successfully!', 'success')}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Success Toast
            </button>
            
            <button
              onClick={() => showToast('Something went wrong. Please try again.', 'error')}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Error Toast
            </button>
            
            <button
              onClick={() => showToast('Warning: This action cannot be undone.', 'warning')}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
              Warning Toast
            </button>
            
            <button
              onClick={() => showToast('New update available. Click to learn more.', 'info')}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Info Toast
            </button>
          </div>
          
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => showToast('This is a custom duration toast that will stay for 8 seconds!', 'info', 8000)}
              className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              Custom Duration Toast (8s)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the demo component wrapped with the provider
export default function App() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  );
}