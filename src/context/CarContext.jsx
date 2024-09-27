import React, { createContext, useState, useContext } from 'react';

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [currentCar, setCurrentCar] = useState(null);

  return (
    <CarContext.Provider value={{ currentCar, setCurrentCar }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);