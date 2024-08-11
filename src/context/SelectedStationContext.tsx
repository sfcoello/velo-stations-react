import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Station } from '../veloAntwerpen';

interface SelectedStationContextProps {
  selectedStation: Station | null;
  setSelectedStation: (station: Station | null) => void;
}

const SelectedStationContext = createContext<SelectedStationContextProps | undefined>(undefined);

export const SelectedStationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  return (
    <SelectedStationContext.Provider value={{ selectedStation, setSelectedStation }}>
      {children}
    </SelectedStationContext.Provider>
  );
};

export const useSelectedStation = () => {
  const context = useContext(SelectedStationContext);
  if (!context) {
    throw new Error('useSelectedStation must be used within a SelectedStationProvider');
  }
  return context;
};