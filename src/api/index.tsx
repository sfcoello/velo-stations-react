import { useEffect, useState } from "react";
import axios from "axios";
import { VeloAntwerpenResponse, Station } from "../veloAntwerpen";

const useStationsData = () => {
    const [stations, setStations] = useState<Station[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<VeloAntwerpenResponse>("http://localhost:8080/velo/stations");
                console.log(JSON.stringify('respuestaaaaa '+response.data))
                setStations(response.data.network.stations);
            }catch (error) {
                console.error('Failed getting stations:', error);
                setError('Failed to fetch stations'); 
              } finally {
                setLoading(false); 
              }
        };

        fetchData();
    }, []);

    return { stations, loading, error };
};

export default useStationsData;

// const useStationsData = () => {
//     const [stations, setStations] = useState<Station[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch('/data/velo.json');
//           console.log(JSON.stringify('respuestaaaaa '+response))
//           const data: VeloAntwerpenResponse = await response.json();
//           console.log(JSON.stringify('SOFIA aa' + data.network))
//           setStations(data.network.stations);
//         } catch (error) {
//           console.log('Failed getting stations:', error);
//           setError('Failed to fetch stations');
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     return { stations, loading, error };
//   };

//export default useStationsData;
