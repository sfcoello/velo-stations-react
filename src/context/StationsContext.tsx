import React, { createContext, useContext } from 'react';
import useStationsData from '../api';
import { Station } from '../veloAntwerpen';

const StationsContext = createContext<Station[]>([]);

interface StationsProviderProps {
    children: React.ReactNode; // Define `children` en las props
}

export const StationsProvider: React.FC<StationsProviderProps> = ({ children }) => {

    const { stations, loading, error } = useStationsData();

    if (loading) return <div>Loading...</div>; // Manejo del estado de carga
    if (error) return <div>{error}</div>; // Manejo del estado de erro

    return (
        <StationsContext.Provider value={stations}>
            {children}
        </StationsContext.Provider>
    );
};

export const useStations = () => useContext(StationsContext);