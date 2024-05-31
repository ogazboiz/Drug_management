// src/ScrollContext.js

import React, { createContext, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const navigate = useNavigate();
  const scrollRefs = useRef({});

  const scrollToSection = (section) => {
    if (scrollRefs.current[section]) {
      scrollRefs.current[section].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const registerRef = (section, ref) => {
    scrollRefs.current[section] = ref;
  };

  const navigateAndScroll = (path, section) => {
    navigate(path);
    setTimeout(() => scrollToSection(section), 100); // Delay to ensure route change is complete
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, registerRef, navigateAndScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
