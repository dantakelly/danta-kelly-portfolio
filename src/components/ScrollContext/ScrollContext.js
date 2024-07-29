// context/ScrollContext.js
import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ aboutRef, projectsRef, contactRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
