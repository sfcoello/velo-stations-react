export interface Extra {
    address: string;
    status: string;
    uid: number;
  }
  
  export interface Station {
    empty_slots: number;
    extra: Extra;
    free_bikes: number;
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    timestamp: string;
  }
  
  export interface Location {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  }
  
  export interface Network {
    company: string[];
    href: string;
    id: string;
    location: Location;
    name: string;
    stations: Station[];
  }
  
  export interface VeloAntwerpenResponse {
    network: Network;
  }