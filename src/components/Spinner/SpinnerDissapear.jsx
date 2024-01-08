
import React, { useState, useEffect } from 'react';

const SpinnerDisappear = ({ duration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
  
      return () => {
        clearTimeout(timer);
      };
    }, [duration]);
  
    if (!isVisible) return null;
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  };
  
  export default SpinnerDisappear;