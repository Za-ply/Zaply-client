"use client";

import React, { createContext, useContext, useState } from "react";

const ErrorContext = createContext({
  hasError: false,
  setError: (state: boolean) => {},
});

export const useError = () => useContext(ErrorContext);

const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <ErrorContext.Provider value={{ hasError, setError: setHasError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
