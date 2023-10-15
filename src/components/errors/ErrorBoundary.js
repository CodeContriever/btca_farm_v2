import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      setHasError(true);
    };

    // Add an error event listener to the window object
    window.addEventListener('error', errorHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    // You can render a custom error message or a fallback UI here
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children;
}

export default ErrorBoundary;
