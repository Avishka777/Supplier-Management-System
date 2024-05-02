import { createContext, useState, useEffect } from 'react';

// Create context
export const AppContext = createContext();

// Key for local storage
const LOCAL_STORAGE_KEY = 'sidebar';

// AppProvider component
export const AppProvider = ({ children }) => {
  // State for tracking sidebar state
  const [stateTrack, setStateTrack] = useState(0);

  // Load state from local storage on component mount
  useEffect(() => {
    const storedStateTrack = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedStateTrack) {
      setStateTrack(storedStateTrack);
    }
  }, []);

  // Save state to local storage when stateTrack changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateTrack));
  }, [stateTrack]);

  // Provide context value to children components
  return (
    <AppContext.Provider value={{ stateTrack, setStateTrack }}>
      {children}
    </AppContext.Provider>
  );
};
