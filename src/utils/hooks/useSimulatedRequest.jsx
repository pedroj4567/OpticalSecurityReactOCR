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

    // Simulate a request delay
    setTimeout(() => {
      const shouldSucceed = Math.random() < 0.5; // Simulate success or failure randomly
      setIsLoading(false);
      setCompleted(true);
      setHasError(!shouldSucceed);
    }, 300000);
  }, []);

  return { isLoading, completed, hasError, closeError, simulateRequest };
};

export default useSimulatedRequest;
