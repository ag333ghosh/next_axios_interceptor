import React from "react";

const LoadingSpinner: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-4 text-white text-lg font-semibold">Loading...</span>
        </div>
    )
}

export default LoadingSpinner;