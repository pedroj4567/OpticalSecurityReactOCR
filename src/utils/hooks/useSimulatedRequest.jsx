import { useState, useCallback } from 'react';

const useSimulatedRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [hasError, setHasError] = useState(false);

  function closeError(){
    setHasError(false)
  }

  const simulateRequest = useCallback(() => {
    setIsLoading(true);

    // Simular request
    setTimeout(() => {
      const shouldSucceed = Math.random() < 0.5; 
      setIsLoading(false);
      setCompleted(true);
      setHasError(!shouldSucceed);
    }, 2000);
  }, []);

  return { isLoading, completed, hasError, closeError, simulateRequest };
};

export default useSimulatedRequest;
